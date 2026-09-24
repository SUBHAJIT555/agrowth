"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  PENDING_ORDER_KEY,
  markCheckoutPaid,
  readCheckoutRequest,
} from "@/lib/checkout";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";

type PayViewState = "loading" | "pay" | "success" | "failed" | "missing";

type StatusPayload = {
  status?: string;
  order_id?: string;
  amount?: string | number;
  txn_id?: string;
  error?: string;
  message?: string;
  qr_data?: string;
  intent_url?: string;
  payer_vpa?: string;
  payment_mode?: string;
};

function resolvePayStatus(result: StatusPayload) {
  const status = (result.status || "pending").toLowerCase();
  const msg = `${result.message || ""} ${result.error || ""}`.toLowerCase();
  if (
    status === "failed" &&
    /not found|database error|no record|does not exist/.test(msg)
  ) {
    return "pending";
  }
  return status;
}

function isPhoneBrowser() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

function qrImageSrc(qrData?: string, intentUrl?: string) {
  if (qrData) {
    return qrData.startsWith("data:")
      ? qrData
      : `data:image/png;base64,${qrData}`;
  }
  if (intentUrl) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&ecc=M&data=${encodeURIComponent(intentUrl)}`;
  }
  return "";
}

export function PayView() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<PayViewState>("loading");
  const [details, setDetails] = useState<StatusPayload>({});
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    setIsPhone(isPhoneBrowser());
  }, []);

  useEffect(() => {
    const orderId =
      searchParams.get("order_id") ||
      window.sessionStorage.getItem(PENDING_ORDER_KEY) ||
      "";

    if (!orderId) {
      setView("missing");
      return;
    }

    const poll = { cancelled: false, timer: 0 };

    const check = async () => {
      const res = await fetch("/api/mpurse.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "status", order_id: orderId }),
      });
      const raw = await res.text();
      let result: StatusPayload = {};
      try {
        result = raw ? (JSON.parse(raw) as StatusPayload) : {};
      } catch {
        throw new Error("Payment PHP is not running.");
      }
      if (poll.cancelled) return null;
      setDetails(result);
      return resolvePayStatus(result);
    };

    const finish = (next: PayViewState) => {
      if (poll.timer) {
        window.clearInterval(poll.timer);
        poll.timer = 0;
      }
      if (next === "success") {
        const request = readCheckoutRequest();
        if (request) markCheckoutPaid(request, orderId);
      }
      setView(next);
    };

    const run = async () => {
      try {
        const status = await check();
        if (poll.cancelled || !status) return;
        if (status === "success" || status === "failed") {
          finish(status);
          return;
        }
        setView("pay");
      } catch {
        if (!poll.cancelled) {
          setDetails({ error: "Unable to load payment." });
          setView("pay");
        }
        return;
      }

      poll.timer = window.setInterval(() => {
        void (async () => {
          try {
            const next = await check();
            if (poll.cancelled || !next) return;
            if (next === "success" || next === "failed") finish(next);
          } catch {
            /* keep waiting */
          }
        })();
      }, 3000);
    };

    void run();

    return () => {
      poll.cancelled = true;
      if (poll.timer) window.clearInterval(poll.timer);
    };
  }, [searchParams]);

  const amountLabel =
    details.amount !== undefined && details.amount !== null && details.amount !== ""
      ? `₹${Number(details.amount).toLocaleString("en-IN")}`
      : "";
  const qrSrc = qrImageSrc(details.qr_data, details.intent_url);

  return (
    <div className="ag-checkout-page">
      <div className="checkout-shell ag-checkout-success">
        {view === "loading" && (
          <>
            <p className="ag-checkout-kicker">Payment</p>
            <h1 className="ag-checkout-title">Preparing payment…</h1>
            <p>Please wait.</p>
          </>
        )}

        {view === "pay" && (
          <>
            <p className="ag-checkout-kicker">UPI</p>
            <h1 className="ag-checkout-title">Complete payment</h1>
            <p>
              {amountLabel ? `Amount: ${amountLabel}. ` : ""}
              {details.order_id ? `Order ${details.order_id}.` : ""}
            </p>

            {details.payer_vpa ? (
              <p className="ag-checkout-pay-note">
                A payment request was sent to <strong>{details.payer_vpa}</strong>.
                Approve it in your UPI app. This page updates automatically.
              </p>
            ) : null}

            {isPhone && details.intent_url ? (
              <div className="ag-checkout-actions">
                <a className="ag-checkout-btn" href={details.intent_url}>
                  <span className="ag-checkout-btn-label">Open UPI app</span>
                  <span className="ag-checkout-btn-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            ) : null}

            {qrSrc ? (
              <div className="ag-checkout-qr">
                <p>
                  {isPhone
                    ? "Or scan this QR from another phone"
                    : "There is no UPI app on a computer. Scan this QR with GPay, PhonePe, Paytm, or any UPI app on your phone."}
                </p>
                <img src={qrSrc} alt="UPI QR code" width={220} height={220} />
              </div>
            ) : null}

            {!details.payer_vpa && !qrSrc && !details.intent_url ? (
              <p className="ag-checkout-status" role="alert">
                {details.error ||
                  details.message ||
                  "Payment details are not available. Go back to checkout and try again."}
              </p>
            ) : null}

            <p>Keep this page open until you see success.</p>
          </>
        )}

        {view === "success" && (
          <>
            <p className="ag-checkout-kicker">Paid</p>
            <h1 className="ag-checkout-title">Payment successful</h1>
            <p>
              {details.order_id ? `Order ID: ${details.order_id}. ` : ""}
              {amountLabel ? `Amount paid: ${amountLabel}.` : ""}
            </p>
            <div className="ag-checkout-actions">
              <CheckoutButton href="/">Back to home</CheckoutButton>
            </div>
          </>
        )}

        {view === "failed" && (
          <>
            <h1 className="ag-checkout-title">Payment failed</h1>
            <p>
              {details.message ||
                details.error ||
                "The UPI payment was not completed."}
            </p>
            <div className="ag-checkout-actions">
              <CheckoutButton href="/checkout">Try again</CheckoutButton>
            </div>
          </>
        )}

        {view === "missing" && (
          <>
            <h1 className="ag-checkout-title">No order found</h1>
            <p>Start checkout again to generate a new UPI payment.</p>
            <div className="ag-checkout-actions">
              <CheckoutButton href="/checkout">Go to checkout</CheckoutButton>
            </div>
          </>
        )}

        {view !== "success" ? (
          <p className="ag-checkout-back">
            <Link href="/checkout">Back to checkout</Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}

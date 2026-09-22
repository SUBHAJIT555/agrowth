import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path
        d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CheckoutButtonProps = {
  children: React.ReactNode;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function CheckoutButton({
  children,
  href,
  type = "button",
  ...props
}: CheckoutButtonProps) {
  const content = (
    <>
      <span className="ag-checkout-btn-label">{children}</span>
      <span className="ag-checkout-btn-arrow" aria-hidden="true">
        <ArrowIcon />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="ag-checkout-btn">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className="ag-checkout-btn" {...props}>
      {content}
    </button>
  );
}

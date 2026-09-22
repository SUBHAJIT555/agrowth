import { CsImage } from "@/components/case-studies/CsImage";
import type { CaseStudyDetail } from "@/data/case-studies/types";

export const lumeera: CaseStudyDetail = {
  slug: "lumeera",
  title: "Lumeera",
  metaTitle: "Lumeera",
  description:
    "Using Agent Mart AI’s Google Ads Agency Accounts and GMC setup to stabilize campaigns, scale ad spend, and drive 128% more conversions.",
  lead: "Using Agent Mart AI’s Google Ads Agency Accounts and GMC setup to stabilize campaigns, scale ad spend, and drive 128% more conversions.",
  heroBg: "#e87438",
  heroImage: {
    src: "/assets/images/case-study/lumeera.png",
    alt: "Lumeera",
    width: 719,
    height: 404,
  },
  service: "Google Agency Ads Account",
  challenge: (
    <>
      <p>Lumeera faced significant hurdles in scaling their dropshipping business through Google Ads.</p>
      <ul>
        <li>
          They struggled to register and verify a Google Merchant Center (GMC) account, a critical step for running Shopping campaigns.
        </li>
        <li>Their ad accounts were unstable, often facing restrictions that disrupted campaign continuity.</li>
        <li>
          As a result, campaign performance was inconsistent, with limited conversions and higher-than-expected CPAs, making it difficult to compete in a crowded dropshipping market.
        </li>
      </ul>
      <CsImage
        src="/assets/images/case-studies/lumeera/lumeera-before-performance.jpg"
        alt=""
        width={1919}
        height={777}
      />
      <p className="cs-caption cs-caption--left">
        Image showing the initial, fluctuating performance with a $19.99 Cost/Conversion before Agent Mart AI&apos;s intervention
      </p>
    </>
  ),
  solution: (
    <>
      <p>Agent Mart AI provided a multi-faceted solution that addressed Lumeera’s core infrastructure and strategy needs:</p>
      <ul>
        <li>
          High-Trust Google Agency Account: We supplied a robust, pre-warmed agency ad account, eliminating the instability and restrictions that previously held them back.
        </li>
        <li>
          Registered Google Merchant Center (GMC): Our team expertly navigated the GMC setup and approval process, ensuring their product feed went live quickly and complied with Google&apos;s policies.
        </li>
        <li>
          Strategic Support for Niche Products: With a stable account, we helped Lumeera scale effectively. By analyzing audience insights, we identified high-intent customer segments perfectly suited for their niche products.
        </li>
      </ul>
      <p>
        This data-driven approach allowed Lumeera to confidently increase its campaign budget by over 33% to target the most valuable audiences.
      </p>
    </>
  ),
  results: (
    <>
      <p>Between July and September 2025, Lumeera achieved remarkable improvements after switching to Agent Mart AI’s solution:</p>
      <ul>
        <li>Conversions surged by +128.88%.</li>
        <li>Despite increasing the ad spend by +148.87% in ad spend (totaling over $8.29K), efficiency remained high.</li>
        <li>The CPA dropped to $19.37, keeping customer acquisition costs low while scaling aggressively.</li>
      </ul>
      <CsImage
        src="/assets/images/case-studies/lumeera/lumeera-results.jpg"
        alt=""
        width={837}
        height={438}
      />
      <p>
        These results underline the effectiveness of combining a stable ad account infrastructure with smart budget allocation and niche product targeting.
      </p>
      <p>
        With Agent Mart AI’s Google Agency Ads Account and GMC setup, Lumeera turned a struggling ad operation into a scalable, profitable growth channel. Within three months, they doubled conversions, reduced acquisition costs, and unlocked consistent performance in the competitive dropshipping landscape.
      </p>
      <h2>
        <strong>About the Client - Lumeera</strong>
      </h2>
      <p>
        <strong>Lumeera</strong>, a local lifestyle brand, struggled with rising ad costs, limited reach, and inconsistent sales. Partnering with Agent Mart AI in July 2025, they used our Google Ads Agency Account to overcome these hurdles and drive sustainable growth.
      </p>
      <ul>
        <li>
          <strong>Industry:</strong> Dropshipping
        </li>
        <li>
          <strong>Company Size</strong>: 51–200 employees
        </li>
        <li>
          <strong>Service Provided</strong>: GMC Register, Google Agency Ads Account, Google Ads Support
        </li>
      </ul>
      <h2>
        <strong>Ready to Scale Without Limits?</strong>
      </h2>
      <p>
        If you&apos;re stuck with account restrictions, GMC issues, or unstable performance on Google Ads, it&apos;s time to switch to a smarter solution.
      </p>
      <p>
        👉 Join our channel:{" "}
        <a href="mailto:info@agentmart-ai.com" rel="noopener" target="_blank">
          info@agentmart-ai.com
        </a>{" "}
        or reach out today to see how Agent Mart AI can unlock your next stage of growth.
      </p>
    </>
  ),
};

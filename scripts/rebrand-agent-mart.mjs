import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src");
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full);
  }
}

walk(root);

const replacements = [
  ["AGrowth Agency –", "Agent Mart AI –"],
  ["AGrowth Agency", "Agent Mart AI"],
  ["AGrowth's", "Agent Mart AI's"],
  ["AGrowth’s", "Agent Mart AI’s"],
  ["AGrowth.io", "Agent Mart AI"],
  ["AGrowth, LLC", "Agent Mart AI"],
  ["AGrowth Platform", "Agent Mart Platform"],
  ["AGrowth Auto Top-up", "Agent Mart Auto Top-up"],
  ["AGrowth Auto", "Agent Mart Auto"],
  ["AGrowth Dashboard", "Agent Mart Dashboard"],
  ["AGrowth dashboard", "Agent Mart dashboard"],
  ["AGrowth Policy", "Agent Mart AI Policy"],
  ["AGrowth wallet", "Agent Mart wallet"],
  ["How AGrowth Beats", "How Agent Mart AI Beats"],
  ["Only at AGrowth", "Only at Agent Mart AI"],
  ["Protected by AGrowth", "Protected by Agent Mart AI"],
  ["With AGrowth", "With Agent Mart AI"],
  ["switching to AGrowth", "switching to Agent Mart AI"],
  ["partnering with AGrowth", "partnering with Agent Mart AI"],
  ["Partnering with AGrowth", "Partnering with Agent Mart AI"],
  ["Partner With AGrowth", "Partner With Agent Mart AI"],
  ["At AGrowth", "At Agent Mart AI"],
  ["from AGrowth", "from Agent Mart AI"],
  ["via AGrowth", "via Agent Mart AI"],
  ["sales@agrowth.io", "info@agentmart-ai.com"],
  ["https://t.me/agrowth_agency", "mailto:info@agentmart-ai.com"],
  ["https://www.trustpilot.com/review/agrowth.io", "https://agentmart-ai.com"],
  ["t.me/agrowth_agency", "info@agentmart-ai.com"],
  ["AGrowth", "Agent Mart AI"],
];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  content = content
    .replaceAll("/pages/agrowth-platform", "___KEEP_PAGES_PLATFORM___")
    .replaceAll("/agrowth-platform", "___KEEP_ALIAS_PLATFORM___")
    .replaceAll("@/components/agrowth-platform", "___KEEP_COMP_PLATFORM___")
    .replaceAll("@/styles/agrowth-platform", "___KEEP_STYLE_PLATFORM___")
    .replaceAll("agrowth-platform.css", "___KEEP_CSS_PLATFORM___")
    .replaceAll("stronger-together-agrowth", "___KEEP_PARTNER_ROUTE___")
    .replaceAll("agrowth-cs-", "___KEEP_CS_CLASS___")
    .replaceAll("agrowth-cta", "___KEEP_CTA_CLASS___")
    .replaceAll('className="agrowth-desc"', "___KEEP_DESC_CLASS___")
    .replaceAll(".agrowth-desc", "___KEEP_DESC_SEL___")
    .replaceAll("    agrowth:", "___KEEP_AG_KEY___")
    .replaceAll("row.agrowth", "___KEEP_AG_ROW___")
    .replaceAll("AgrowthPlatformPage", "___KEEP_PAGE_FN___");

  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }

  content = content
    .replaceAll("___KEEP_PAGES_PLATFORM___", "/pages/agrowth-platform")
    .replaceAll("___KEEP_ALIAS_PLATFORM___", "/agrowth-platform")
    .replaceAll("___KEEP_COMP_PLATFORM___", "@/components/agrowth-platform")
    .replaceAll("___KEEP_STYLE_PLATFORM___", "@/styles/agrowth-platform")
    .replaceAll("___KEEP_CSS_PLATFORM___", "agrowth-platform.css")
    .replaceAll("___KEEP_PARTNER_ROUTE___", "stronger-together-agrowth")
    .replaceAll("___KEEP_CS_CLASS___", "agrowth-cs-")
    .replaceAll("___KEEP_CTA_CLASS___", "agrowth-cta")
    .replaceAll("___KEEP_DESC_CLASS___", 'className="agrowth-desc"')
    .replaceAll("___KEEP_DESC_SEL___", ".agrowth-desc")
    .replaceAll("___KEEP_AG_KEY___", "    agrowth:")
    .replaceAll("___KEEP_AG_ROW___", "row.agrowth")
    .replaceAll("___KEEP_PAGE_FN___", "AgrowthPlatformPage");

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(path.relative(process.cwd(), file));
  }
}

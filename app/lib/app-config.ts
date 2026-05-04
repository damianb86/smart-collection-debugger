export const APP_CONFIG = {
  name: "Smart Collection Debugger",
  shortName: "Collection Debugger",
  slug: "smart-collection-debugger",
  tagline: "Explain why a product matches or misses an automated collection.",
  problem: "Merchants struggle to understand smart collection rules, especially when variant-sensitive rules behave unexpectedly.",
  persona: "Catalog manager maintaining automated collections and launch collections.",
  value: "A simple explainability layer for collection rules that turns opaque matching into a readable checklist.",
  primaryFlow: "Pick a product and collection, inspect each rule, identify the first failing condition, then fix product data.",
  color: "#475569",
  mainObject: "Collection rule explanation",
  workspaceLabel: "Rule debugger",
  settingsLabel: "Collections",
  requiredScopes: ["read_products"],
  doNotRequestScopes: ["write_products","read_orders","read_customers"],
  integrations: [
  "Admin GraphQL product and collection reads for rule conditions.",
  "Collection rule data and product fields evaluated server-side.",
  "Future admin block can open debugger from product or collection pages."
],
  mvpFeatures: [
  "Dashboard with collections needing review.",
  "Rule debugger table with pass/fail/explain status.",
  "Filter by product, collection and failing rule type.",
  "Empty state for stores with no automated collections."
],
  outOfScope: [
  "Editing collection rules in v1.",
  "Bulk product fixes.",
  "Theme storefront validation."
],
  futureFeatures: [
  "Admin product and collection UI extensions.",
  "Bulk collection drift report.",
  "Suggested product data fixes."
],
  screens: [
  "Dashboard: collection health and top failing conditions.",
  "Rule debugger: pass/fail rule matrix.",
  "Collections: ignored collection settings.",
  "Help/QA: rule semantics and edge cases."
],
  sampleRows: [
  [
    "New Arrivals",
    "Product created_at in last 30 days",
    "High",
    "Failed"
  ],
  [
    "Sale",
    "Compare-at price exists",
    "Medium",
    "Passed"
  ],
  [
    "Vendor: Acme",
    "Vendor equals Acme",
    "Low",
    "Passed"
  ]
],
  metrics: [
  [
    "Collections checked",
    "28"
  ],
  [
    "Rule failures",
    "14"
  ],
  [
    "Products sampled",
    "90"
  ]
],
  settingsFields: {
  "workflowName": "Collection rule audit",
  "thresholdLabel": "Failure alert threshold",
  "thresholdDefault": "20",
  "ownerEmail": "catalog@example.com"
},
  risks: [
  "Some collection behavior may depend on Shopify internal evaluation timing.",
  "Rules must be mirrored carefully to avoid claiming Shopify is wrong."
],
} as const;

export type AppConfig = typeof APP_CONFIG;

export function requiredScopesText() {
  return APP_CONFIG.requiredScopes.join(",");
}

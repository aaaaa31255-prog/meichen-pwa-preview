# Meichen PWA Checkpoint: WB10 Review -> WB11 Flow Integration

Date: 2026-05-22
Project: Meichen Beauty AI PWA
Status type: project_hub checkpoint only
Public GitHub Pages release: NOT approved

## Decision

Do not publish WB10 as the live GitHub Pages app.
Store this checkpoint record in GitHub for traceability, while keeping local ZIP packages as working artifacts.

## Current version status

- Current package reviewed: WB10
- Overall result: not approved for live release
- Estimated completion: 68%
- Main blocker: modules are visually present but not fully connected through shared app state and workflow data.

## Version handling rule

- Passed/stable records may be stored in GitHub under project_hub.
- Candidate ZIP files may be kept locally and attached in chat for review.
- Only a phone-tested and explicitly approved final build should replace the live GitHub Pages app files.
- Do not use GitHub Pages as a live scratchpad for every small fix.

## What improved by WB10

- Login page has a cleaner public preview boundary.
- Bottom navigation is moving toward the correct structure: Home / Clients / + / Plan / Stock.
- Center + is positioned as the Workbench entry.
- Global i18n structure is more complete than WB7-WB9.
- PWA package includes manifest and 180/192/512 PNG icons.

## Remaining blockers

1. Workbench function cards are still mostly visual entry points rather than connected actions.
2. Customer -> diagnosis -> formula plan -> inventory check does not yet use one shared app state.
3. Demo appointment cards and workflow cards need stable data binding.
4. Each page must be isolated: Home, Clients, Workbench, Plan, Stock.
5. Current customer, permissions, and risk panels must not leak globally.
6. All visible text, including demo data and status chips, must be covered by i18n.
7. Buttons must be real actions, not static cards.

## Next target

Target version: WB11 Flow Integration Build
Goal: connect layout, navigation, workbench actions, customer state, diagnosis state, formula state, inventory state, global i18n, and privacy boundary in one integrated build.

## Required architecture for WB11

Use a central app state:

```js
const appState = {
  lang: localStorage.getItem("meichen_lang") || "zh",
  activePage: "home",
  currentCustomerId: "demoA",
  currentCustomer: {
    id: "demoA",
    nameKey: "demo_client_a",
    phoneMasked: "***-**34",
    memberTypeKey: "appt_type2"
  },
  selectedService: null,
  diagnosisResult: null,
  formulaPlan: null,
  inventoryCheck: null
};
```

Use one action path:

```js
function dispatch(action, payload) { /* update appState */ }
function render() { /* refresh active page and data */ }
```

Minimum dispatch actions:

- SET_LANG
- GO_PAGE
- SELECT_CUSTOMER
- START_DIAGNOSIS
- SAVE_DIAGNOSIS_RESULT
- GENERATE_PLAN
- CHECK_INVENTORY
- OPEN_WORKBENCH_ACTION

## Bottom navigation rule

Keep exactly:

- Home
- Clients
- +
- Plan
- Stock

The center + opens Workbench.
Diagnosis enters from Clients or Workbench, not as a permanent bottom tab.

## Workbench action mapping

- Online Booking -> Home appointment list
- Member Profile -> Clients
- Camera AI -> diagnosis demo flow
- Color Formula -> Plan
- Perm Recognition -> diagnosis demo panel
- Portfolio Gallery -> public preview placeholder
- Inventory Check -> Stock
- Client Showcase -> public preview placeholder
- Shop Recruiting -> public preview placeholder
- Education Training -> public preview placeholder

## Privacy boundary

Public preview must not store real customer data, real phone numbers, exact formula ratios, or uploaded photos.
No camera permission and no upload in preview build.

## GitHub release gate

Only submit live app files after:

1. Phone test passes.
2. All pages show the correct language.
3. Home/Clients/Workbench/Plan/Stock do not leak each other’s modules.
4. Workbench buttons trigger real page/action changes.
5. App state flows from customer to diagnosis to plan to stock.
6. User confirms: 通.


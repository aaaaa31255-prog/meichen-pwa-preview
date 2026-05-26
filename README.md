# Meichen WB17.6 RC8a — Safari Home Screen Test Shell

**Type:** PUBLIC SHELL — safe GitHub Pages preview  
**Version:** WB17.6 RC8a Safari Home Screen Test Shell 20260526  
**Scope:** iPhone Safari / Add to Home Screen preview only

## Security Boundary

This public repository contains only a sanitized shell.

Not included:

- private formula engine
- complete shade database
- CASE-001 internal data
- customer/member data
- inventory logic
- consultation release-gate logic
- private business rules

The full Meichen core remains private.

## Included

- `index.html` public shell UI
- `manifest.json` for Home Screen preview
- `service-worker.js` for shell-only caching
- existing `apple-touch-icon.png`
- public safety labels and policy/checklist placeholders
- AI Lab architecture labels only

## iPhone Safari Test

1. Open the GitHub Pages URL in iPhone Safari.
2. Tap the share button.
3. Choose **Add to Home Screen**.
4. Name it `美辰` or `Meichen`.
5. Open from the Home Screen icon.
6. Confirm standalone launch, navigation, AI Lab preview, policy pages, and checklist.

## Status

- Public shell review: pass
- Private core exposure: not found
- App Store / Mini Program formal release: not applicable yet

Formal release still requires a real App or Mini Program project, final privacy policy, final user agreement, permission prompts, data deletion workflow, support/contact channel, and platform-specific review materials.

# Shopify CLI Status
_Generated: 2026-06-04_

## Environment

| Key | Value |
|-----|-------|
| Working directory | `/Users/artem/Sites/_shopify_projects/sokole` |
| Shopify CLI version | 4.1.0 |

## Git Remote

| Remote | URL |
|--------|-----|
| origin (fetch) | `git@github.com:hollandlive/_shopify_projects.git` |
| origin (push) | `git@github.com:hollandlive/_shopify_projects.git` |

## Auth Status

`shopify auth whoami` does not exist in CLI v4.1.0 — available auth commands are `auth login` and `auth logout`.

**Session active**: confirmed — `shopify theme list` returned results without prompting for login.

## Themes

| Name | Status | ID |
|------|--------|----|
| Sense | live | 186688799101 |
| Drive | unpublished | 186686931325 |
| debut-vintage-theme | unpublished | 186686964093 |
| test-data | unpublished | 186686996861 |
| Development (e14213-Mac) | development / **current** | 186688962941 |

## Notes

- Active development theme: `Development (e14213-Mac)` — this is the theme pushed to when running `shopify theme dev` or `shopify theme push`.
- Live theme: `Sense` (ID 186688799101) — matches the brand work on this branch.
- The CLI does not expose a `whoami`-style command; store identity is inferred from the active session.

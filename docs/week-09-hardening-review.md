# Week 09 — Hardening Review

**Portfolio:** [portfolio-omar-babayev.vercel.app](https://portfolio-omar-babayev.vercel.app)

**Repository:** [github.com/etikhacker/portfolio](https://github.com/etikhacker/portfolio)

**Review date:** 2026-09-18

**Review type:** Structured peer review by an AI code and QA reviewer, followed by source-level fixes on branch `fix/week-09-hardening`.

## Test method

The live deployment was checked with HTTP requests, and the interaction cases were exercised in headless Chromium through the Chrome DevTools Protocol at a 780px viewport. The test covered the home, projects, and contact pages, empty form submission, invalid input, rapid duplicate submission, metadata, and horizontal overflow.

## Where it breaks: fixed findings

| Finding | Impact | Evidence before fix | Fix | Status |
|---|---|---|---|---|
| `projects` and `contact` pages did not define `og:image` or `twitter:image`. | Medium: link previews could be incomplete or inconsistent. | Metadata inspection returned no share image on those pages. | Added the existing portfolio logo as the Open Graph and Twitter preview image, with descriptive `og:image:alt`. | Fixed in branch |
| Form submissions relied only on disabling the submit button. | Medium: an Enter-key or programmatic submit could trigger a second request while the first request was still in flight. | Source review showed no in-flight submission guard. | Added `isSubmitting` state and an early return before the request starts. | Fixed in branch |
| Very long form values had no explicit client-side limits. | Low/Medium: oversized input could create poor UX and oversized requests. | Source review showed no `maxlength` attributes. | Added limits: name 120, email 254, subject 160, message 3000 characters. | Fixed in branch |

## Where it breaks: tested behavior that is working

| Test | Result |
|---|---|
| Empty form submission | Correctly blocked; `name`, `email`, and `message` are marked invalid and an error status is shown. |
| Garbage input (`@@@`, invalid email, whitespace message) | Correctly blocked; invalid email and empty-after-trim message are marked invalid. |
| Rapid duplicate submission | The form enters `sending` state and the submit button is disabled. The new in-flight guard also rejects a second submit event. |
| Clean routes `/`, `/projects`, `/contact` | All returned HTTP 200 and rendered the expected page title. |
| Responsive overflow baseline at 780px | `body.scrollWidth` did not exceed `window.innerWidth` in the Chromium test. |
| Internal project links and repository links | The live URL checks returned successful responses for the tested project and GitHub destinations. |
| HTTPS | The live Vercel deployment served over HTTPS. |

## Known limitations

| Limitation | Why it remains | Next action |
|---|---|---|
| The current live deployment is still the pre-fix production version until this branch is merged/deployed. | The changes are intentionally isolated on `fix/week-09-hardening`. | Merge the branch or deploy the commit, then repeat the live metadata and double-submit checks. |
| The contact form sends through Web3Forms. | It is a static portfolio and does not own a backend; the provider handles delivery. | Confirm delivery with a real non-sensitive test message after deployment. |
| The Web3Forms access key appears in the client HTML. | Web3Forms access keys are designed for browser-side forms, but the provider key should still be monitored and rotated if abused. | Review Web3Forms settings and add spam/rate controls if traffic increases. |
| Social platforms may return bot-protection responses during automated link checks. | LinkedIn and Instagram restrict automated requests; this does not prove the human-facing links are broken. | Open them manually in a normal browser during final launch review. |
| Custom domain, analytics screenshot, and FlyRank graduate badge were not changed in this repository. | They are deployment/account-level launch tasks rather than source-only fixes. | Add/verify them on the production domain before final launch submission. |
| Google findability was not treated as instant proof of indexing. | Search indexing can lag behind metadata changes. | Search the exact name and URL after deployment, then save the result as evidence. |

## SEO and launch-hygiene evidence

The source already contains page titles, descriptions, canonical URLs, `robots.txt`, and `sitemap.xml`. The fix adds complete social-share image metadata to all three pages. The live HTTP baseline recorded these results before deploying the branch:

| Page | Status | Download size | Total request time |
|---|---:|---:|---:|
| `/` | 200 | 18,076 bytes | 0.093 s |
| `/projects` | 200 | 22,597 bytes | 0.115 s |
| `/contact` | 200 | 12,520 bytes | 0.120 s |

These are HTTP transfer timings, not a substitute for Lighthouse/PageSpeed field data. A final PageSpeed check should be recorded after the branch is deployed.

## Structured peer-review decision

**Must-fix items:** complete in source on `fix/week-09-hardening` — social preview images, duplicate-submit guard, and input limits.

**Launch blockers still requiring account/deployment work:** deploy the branch, confirm a real form delivery, add or verify analytics, confirm the custom domain or clean fallback domain, install the FlyRank graduate badge, and capture final screenshots. These are explicitly named rather than hidden.

## Reproduction commands

```bash
node --check script.js
python3 docs/hardening_test.py
curl -I https://portfolio-omar-babayev.vercel.app/
```

## Review conclusion

The portfolio is not being presented as flawless. Its core form validation and current HTTPS/static delivery withstand the tested edge cases. The source-level fix-now items are addressed on the hardening branch; the remaining launch-account tasks are listed as known limitations and must be rechecked after deployment.

# Week 09 — Plant Your Flag Launch Evidence

**Production URL:** [https://portfolio-omar-babayev.vercel.app](https://portfolio-omar-babayev.vercel.app)

**Deployment:** Vercel production deployment `dpl_7eKSpxisu5TK5vndtpWUKAs2i4vY`, commit `b9b95384a9de48da286d92f52f1c889926887688`.

**Verified:** 2026-09-20

## Launch status

The portfolio is live over HTTPS on the clean Vercel fallback URL selected for this launch. The deployment state is `READY`, and the production alias is `portfolio-omar-babayev.vercel.app`.

| Check | Result | Evidence |
|---|---|---|
| Production deployment | Passed | Vercel deployment `dpl_7eKSpxisu5TK5vndtpWUKAs2i4vY` is `READY`. |
| HTTPS | Passed | `https://portfolio-omar-babayev.vercel.app` returns HTTP 200. |
| Home page | Passed | `/` returns HTTP 200. |
| Projects page | Passed | `/projects` returns HTTP 200. |
| Contact page | Passed | `/contact` returns HTTP 200. |
| Page titles | Passed | All three pages expose a page-specific `<title>`. |
| Share preview | Passed | All three pages expose `og:image` and `twitter:image` using the portfolio logo. |
| Favicon | Passed | All three pages expose the portfolio PNG favicon and Apple touch icon. |
| FlyRank badge | Passed | Footer badge links to the real credential verification URL. |
| Vercel Web Analytics script | Passed | `/_vercel/insights/script.js` returns HTTP 200. |
| Vercel analytics data connection | Active | Vercel analytics API accepts the project query; current count is 0 visitors and 0 pageviews because the deployment was just enabled. |

## Analytics evidence

The static HTML pages initialize Vercel Web Analytics with the official HTML integration:

```html
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments);};</script>
<script defer src="/_vercel/insights/script.js"></script>
```

The production script endpoint was checked directly and returned HTTP 200. The Vercel analytics query for the project also returned a valid response with the current data object:

```json
{
  "visitors": 0,
  "pageviews": 0
}
```

The zero count is expected immediately after deployment and is not being presented as visitor traction.

## FlyRank graduate badge

The badge uses the reference from Omar Babayev's official confirmation letter:

```text
FR-D1-3ACB9-5F7CD
```

Verification URL:

[Verify Omar Babayev's FlyRank credential](https://internship.flyrank.ai/verify?id=FR-D1-3ACB9-5F7CD&first_name=Omar)

The verification URL returned HTTP 200 during launch verification. The badge is installed in the footer of the home, projects, and contact pages.

## Screenshot evidence

The deployed homepage screenshot shows the footer badge:

![Deployed homepage with FlyRank verified badge](/home/ubuntu/launch-evidence-full.png)

## Remaining limitations

A personal custom domain was not supplied, so the clean Vercel fallback URL was used. This is allowed by the checkpoint when a custom domain is not available.

A phone-specific final check still needs to be performed by Omar on a physical phone. The sandbox verified desktop Chromium rendering and the responsive source behavior, but it cannot truthfully claim a physical-device check.

The Vercel dashboard screenshot itself was not exported because dashboard access is account-session-specific. The implementation and live endpoint were verified directly, and the Vercel analytics API returned a valid project response. For a strict submission packet, add one screenshot from the Vercel project's Analytics tab after the first pageview appears.

## Submission checklist

- [x] Live HTTPS fallback URL
- [x] Analytics script installed and reachable
- [x] Analytics project query verified
- [x] Share preview metadata verified on the real URL
- [x] Favicon verified on the real URL
- [x] Page titles verified on the real URL
- [x] FlyRank badge visible in the footer
- [x] Badge links to the real verification page
- [ ] Open final address on a physical phone
- [ ] Capture the Vercel Analytics dashboard screenshot after a pageview is recorded

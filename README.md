# Week 3 — Map It & Give It a Face
**Ömər Babayev — portfolio-omar-babayev.vercel.app**

---

## 1. One-line claim

**Chosen:**
> **I vibe code with AI and ship fast.**

Other variants considered:

| Variant | Why it wasn't chosen |
|---|---|
| "I turn ideas into prompts, and prompts into working products." | Good, but works better as a subtitle — already used that way |
| "I build production-ready platforms for real problems." | Solid, but loses "vibe coding" — your distinguishing brand word |
| "From universities to civic services — real systems, built with AI." | Shows project range, but loses the personal voice |

**Why this one stays:** It's short, memorable, and "vibe coding" sets you apart from generic "full-stack developer" taglines — it describes your actual way of working (fast iteration with AI), not a buzzword.

---

## 2. Content map

### Home (`/`)
| Order | Section | Content | CTA |
|---|---|---|---|
| 1 | Hero | Claim + role + stack | "View projects" (primary) / "Get in touch" (secondary) |
| 2 | Terminal simulation | `whoami`, `build --from-idea`, `stack --production` — visually shows "who you are" | — |
| 3 | Stats bar | 5 projects / 3 internships / 4+ technologies / ∞ learning | — |
| 4 | About | Short bio — student + freelance vibe coder | — |
| 5 | Tech stack | Frontend / Backend / AI / Infrastructure (4 groups) | — |
| 6 | Selected projects (3) | E-Cədvəl, EkoAI, RentHome — each with screenshot + status badge + tags | "View all projects →" |
| 7 | Footer CTA | "Got an idea? Let's build it together." | "Get in touch →" |

→ Every step leads toward the **main action**: **getting in touch / getting hired**.

### Projects (`/projects`)
| Order | Section | Content |
|---|---|---|
| 1 | Heading | "5 production platforms" |
| 2 | Project grid (5) | E-Cədvəl → CityAI → EkoAI → Promptr → RentHome, each with a status badge, description, tags, live link + GitHub |

**Still need to gather:**
- [ ] A per-project GitHub link (currently all link to the same `github.com/etikhacker` profile — a project-specific repo link is stronger proof)
- [ ] No testimonial/review — submissions to ABB Innovation and ASAN AI Hub are mentioned, but there's no proof of outcome (acceptance letter, mention, etc.)

### Contact (`/contact`)
| Order | Section | Content |
|---|---|---|
| 1 | Heading | "Let's build something together" |
| 2 | Email | Direct mailto link |
| 3 | Form | Name, email, subject (optional), message → Web3Forms |

This is the final step that leads directly to the main action (**getting hired / freelance contact**) — correctly set up.

---

## 3. Identity kit

### Fonts
| Role | Font | Why |
|---|---|---|
| Headings, nav, labels | **JetBrains Mono** | Code aesthetic, reinforces the "developer" identity |
| Body text | **Inter** | Sans-serif for readability, balances out the mono font |

*(Both free on Google Fonts.)*

### Palette (dark theme — default)
| Role | Hex | Note |
|---|---|---|
| Background | `#090c10` | Near-black |
| Surface (cards) | `#10151c` | One shade lighter than background |
| Text | `#e7edf4` | Near-white |
| Faint text | `#838d9c` | Secondary text |
| **Primary accent** | `#f0ac47` (amber) | Logo, CTA buttons, link hover |
| Functional — success | `#63dd97` (green) | Used in terminal simulation ("✓ deployed"), status badges |
| Functional — info | `#7cc6e8` (cyan) | Rarely used |
| Error | `#ff8080` | Form validation |

**Note:** The official rule says "at most one accent." Technically there are 3 colors here (amber+green+cyan), but two of them (green, cyan) are **functional, not decorative** — they're part of the terminal-simulation mechanic and status indicators, not scattered freely across the site. Amber alone is the **decorative/brand** accent. This fits the spirit of the rule, not the letter — worth documenting explicitly.

### Light theme (optional toggle)
| Role | Hex |
|---|---|
| Background | `#f7f6f2` |
| Text | `#191712` |
| Primary accent | `#b5711e` |

### Logo / Favicon
`</> omerAI-mühəndisi` — code-bracket icon + status dot (green, indicates "live" status) + text logo. Minimal, set in the mono font, simple. A PNG version is already used as the favicon.

### Style note (for future builds)
> Fonts: JetBrains Mono for headings/labels, Inter for body text. Colors: background `#090c10`, text `#e7edf4`, primary accent `#f0ac47` (only for CTAs and brand elements). Green/cyan are for functional status only, never decoration. Mood: calm, technical, "developer terminal" feel — no brightness, generous whitespace.

---

## 4. Image curation

### Current state
| Project | Image type | Assessment |
|---|---|---|
| E-Cədvəl | Real UI screenshot (schedule interface) | ✅ Keep — clean, legible, real proof |
| RentHome | Real UI screenshot (search interface) | ✅ Keep — same reason |
| EkoAI | Real UI screenshot (the app's own design) | ✅ Keep — it's real proof, even though its visual style differs from the others (each app has its own visual language) |
| CityAI | No image | Owner's call: not needed |
| Promptr | No image | Owner's call: not needed |

### Note (correcting an earlier misjudgment)
On first look, I flagged the EkoAI image as a marketing-style AI generation — that was wrong. Per your confirmation, it's a **real UI screenshot** of the app. The visual-style difference between the three cards (E-Cədvəl/RentHome show a plainer interface look, EkoAI leans more into a graphic dashboard style) doesn't change the fact that all three are real; each app simply has its own design, which is normal.

---

## Deliverable checklist (for portal submission)
- [x] One-line claim
- [x] Content map (pages, sections, CTAs) + gather-list
- [x] Identity kit (fonts, hex codes, logo, style note)
- [x] Image set (all real screenshots)
- [ ] Per-project GitHub links (currently all point to the same profile)

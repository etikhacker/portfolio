# Week 3 — Map It & Give It a Face
**Ömər Babayev — portfolio-omar-babayev.vercel.app**

---

## 1. One-line claim

**Seçilmiş:**
> **AI ilə vibe coding edirəm, sürətlə deploy edirəm.**

Digər variantlar (müqayisə üçün):

| Variant | Niyə saxlanmadı |
|---|---|
| "Fikri prompt-a, prompt-u işlək məhsula çevirirəm." | Yaxşı, amma alt-başlıq kimi daha uyğundur — hazırda elə də istifadə olunur |
| "Real problemlər üçün production-ready platformalar quraram." | Düzgündür, amma "vibe coding" — sənin fərqləndirici brend sözün — itir |
| "Universitetdən vətəndaş xidmətlərinə — AI ilə real sistemlər." | Layihə diapazonunu göstərir, amma şəxsi səs itir |

**Niyə bu qalır:** Qısadır, yadda qalır, və "vibe coding" termini səni digər "full-stack developer" elanlarından fərqləndirir — bu, sənin əsl iş üsulunu təsvir edir (AI ilə sürətli iterasiya), ümumi buzzword deyil.

---

## 2. Content map

### Ana səhifə (`/`)
| Sıra | Bölmə | Məzmun | CTA |
|---|---|---|---|
| 1 | Hero | Claim + rol + stack | "Layihələrə bax" (əsas) / "Əlaqə saxla" (ikinci) |
| 2 | Terminal-simulyasiya | `whoami`, `build --from-idea`, `stack --production` — vizual "kim olduğunu" göstərir | — |
| 3 | Statistika bar | 5 layihə / 3 internship / 4+ texnologiya / ∞ öyrənmə | — |
| 4 | Haqqımda | Qısa bio — tələbə + freelance vibe coder | — |
| 5 | Texnologiya stack-i | Frontend / Backend / AI / İnfrastruktur (4 qrup) | — |
| 6 | Seçilmiş layihələr (3) | E-Cədvəl, EkoAI, RentHome — hər biri screenshot + status badge + tag-lər | "Bütün layihələrə bax →" |
| 7 | Footer CTA | "İdeyanız var? Gəlin birlikdə quraq." | "Əlaqə saxla →" |

→ Hər addım **əsas hərəkətə** aparır: **əlaqə saxlamaq / işə götürülmək**.

### Layihələr (`/projects`)
| Sıra | Bölmə | Məzmun |
|---|---|---|
| 1 | Başlıq | "5 production platforma" |
| 2 | Layihə grid-i (5) | E-Cədvəl → CityAI → EkoAI → Promptr → RentHome, hər biri status badge, təsvir, tag-lər, canlı link + GitHub |

**Hələ toplanmalı olan sübutlar (gather-list):**
- [ ] Hər layihə üçün ayrı GitHub linki (hazırda hamısı eyni `github.com/etikhacker` profilinə gedir — layihəyə-özəl repo linki daha güclü sübutdur)
- [ ] Testimonial/rəy yoxdur — ABB Innovation və ASAN AI Hub-a təqdim olunmağın qeyd olunur, amma nəticə barədə sübut (qəbul məktubu, mention) yoxdur

### Əlaqə (`/contact`)
| Sıra | Bölmə | Məzmun |
|---|---|---|
| 1 | Başlıq | "Birlikdə nəsə quraq" |
| 2 | Email | Birbaşa mailto link |
| 3 | Form | Ad, email, mövzu (opsional), mesaj → Web3Forms |

Bu, əsas hərəkətə (**işə götürülmək / freelance əlaqə**) birbaşa aparan son addımdır — düzgün qurulub.

---

## 3. Identity kit

### Fontlar
| Rol | Font | Niyə |
|---|---|---|
| Başlıqlar, naviqasiya, label-lər | **JetBrains Mono** | Kod-estetikası, "developer" kimliyini vurğulayır |
| Əsas mətn | **Inter** | Oxunaqlılıq üçün sans-serif, mono ilə balans yaradır |

*(İkisi də Google Fonts-da pulsuz mövcuddur.)*

### Palet (dark tema — default)
| Rol | Hex | İzah |
|---|---|---|
| Fon | `#090c10` | Demək olar qara |
| Səth (kartlar) | `#10151c` | Fondan bir ton açıq |
| Mətn | `#e7edf4` | Demək olar ağ |
| Solğun mətn | `#838d9c` | İkinci dərəcəli mətn |
| **Əsas aksent** | `#f0ac47` (amber) | Loqo, CTA düymələri, link hover |
| Funksional — uğur | `#63dd97` (green) | Terminal simulyasiyasında "✓ deployed", status badge-lərdə |
| Funksional — məlumat | `#7cc6e8` (cyan) | Nadir istifadə olunur |
| Xəta | `#ff8080` | Form validasiyası |

**Qeyd:** Rəsmi qayda "ən çoxu 1 aksent" deyir. Burada texniki olaraq 3 rəng var (amber+green+cyan), amma bunların ikisi (green, cyan) **dekorativ deyil, funksionaldır** — terminal-simulyasiyası mexanikasının və status göstəricilərinin bir hissəsidir, sayt boyu sərbəst səpələnməyib. Amber tək **dekorativ/brend** aksentdir. Bu, qaydanın ruhuna uyğundur, hərfinə yox — sənədləşdirməyə dəyər.

### Light tema (istəyə görə keçid)
| Rol | Hex |
|---|---|
| Fon | `#f7f6f2` |
| Mətn | `#191712` |
| Əsas aksent | `#b5711e` |

### Loqo / Favicon
`</> omerAI-mühəndisi` — kod-braket ikonu + status-dot (yaşıl, "live" statusunu göstərir) + mətn loqo. Minimal, mono fontda, sadə. Favicon kimi işlədilən PNG mövcuddur.

### Style note (gələcək build-lər üçün)
> Fontlar: başlıqlar/label-lər üçün JetBrains Mono, gövdə mətni üçün Inter. Rənglər: fon `#090c10`, mətn `#e7edf4`, əsas aksent `#f0ac47` (yalnız CTA və brend elementləri üçün). Yaşıl/mavi yalnız funksional statuslar üçün, dekorasiya üçün yox. Əhval: sakit, texniki, "developer terminal" hissi — parlaqlıq yox, boşluq bol.

---

## 4. Image curation

### Hazırkı vəziyyət
| Layihə | Şəkil növü | Qiymətləndirmə |
|---|---|---|
| E-Cədvəl | Real UI screenshot (cədvəl interfeysi) | ✅ Saxla — təmiz, oxunaqlı, real sübut |
| RentHome | Real UI screenshot (axtarış interfeysi) | ✅ Saxla — eyni səbəb |
| EkoAI | Real UI screenshot (tətbiqin öz dizaynı) | ✅ Saxla — real sübutdur, dizayn üslubu digərlərindən fərqli olsa da (öz tətbiqinin öz vizual dili) |
| CityAI | Şəkil yoxdur | Layihə sahibinin qərarı: ehtiyac yoxdur |
| Promptr | Şəkil yoxdur | Layihə sahibinin qərarı: ehtiyac yoxdur |

### Qeyd (əvvəlki səhv qiymətləndirmə)
İlk baxışda EkoAI-nin şəklini marketinq-tərzi generasiya kimi qiymətləndirmişdim — bu, səhv idi. Sənin təsdiqinə görə bu, tətbiqin **real UI screenshot-udur**. Üç kart arasında vizual üslub fərqi (E-Cədvəl/RentHome — sadə interfeys görünüşü, EkoAI — daha qrafik-yönlü dashboard) hər üçünün real olması faktını dəyişmir; sadəcə hər tətbiqin öz dizaynı fərqlidir, bu da normaldır.

---

## Deliverable checklist (portala göndərmək üçün)
- [x] One-line claim
- [x] Content map (pages, sections, CTA-lar) + gather-list
- [x] Identity kit (fontlar, hex kodlar, loqo, style note)
- [x] Image set (hamısı real screenshot)
- [ ] Layihəyə-özəl GitHub linkləri (hazırda hamısı eyni profilə gedir)

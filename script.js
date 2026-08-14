/* ============================================================
   Ömər Babayev — Portfolio
   Shared script: AZ/EN language switching + accessible
   contact-form validation, submitted via Web3Forms (no backend
   of your own needed — see the access_key setup note in
   contact.html).
   Loaded on every page; each block only acts on elements
   that exist on the current page.
   ============================================================ */

const translations = {
  az: {
    pageTitle: {
      index: "Ömər Babayev — Full-stack Developer & AI Integrator",
      projects: "Layihələr — Ömər Babayev",
      contact: "Əlaqə — Ömər Babayev"
    },
    "skip": "Əsas məzmuna keç",
    "logo": "omerAI-mühəndisi",
    "nav.home": "Ana səhifə",
    "nav.projects": "Layihələr",
    "nav.contact": "Əlaqə",
    "nav.aria": "Əsas naviqasiya",
    "lang.aria": "Dil seçimi",
    "theme.aria": "Tema seçimi",
    "theme.dark.aria": "Qaranlıq tema",
    "theme.light.aria": "İşıqlı tema",
    "footer.html": "Hazırladı: <a href=\"https://github.com/etikhacker\" target=\"_blank\" rel=\"noopener noreferrer\">Ömər Babayev</a> · Mingəçevir, Azərbaycan · 2026",

    "hero.role": "Vibe Coder / AI-Assisted Full-stack Developer",
    "hero.title.html": "AI ilə <span class=\"amber\">vibe coding</span> edirəm, sürətlə deploy edirəm.",
    "hero.tagline.html": "Fikri prompt-a, prompt-u işlək məhsula çevirirəm. Next.js, FastAPI və <strong>Supabase</strong> üzərində, Claude/Gemini/OpenRouter kimi AI alətlərini iş axınımın mərkəzinə qoyaraq — ideyadan production-a qədər sürətli, təkrarlanan dövrələrlə inkişaf edirəm.",
    "cta.github.aria": "Ömərin GitHub profilinə keç (yeni pəncərədə açılır)",
    "cta.github": "GitHub → github.com/etikhacker",
    "cta.linkedin.aria": "Ömərin LinkedIn profilinə keç (yeni pəncərədə açılır)",
    "cta.linkedin": "LinkedIn profili",
    "hero.projects": "Layihələrə bax",
    "hero.contact": "Mənimlə əlaqə saxla",
    "hero.visual.aria": "AI ilə inkişaf workflow-u",
    "terminal.identity": "Ömər Babayev · AI inteqratoru",
    "terminal.deployed": "uğurla deploy edildi",
    "availability": "iş üçün açığam",
    "location": "Mingəçevir · Azərbaycan",

    "about.heading": "Haqqımda",
    "about.lead": "Texnologiyanı sadəcə yazmıram — real problemlər üçün işlək sistemlərə çevirirəm.",
    "about.note": "Sürətli prototip. Təmiz interfeys. Production düşüncəsi.",
    "about.body": "IT tələbəsiyəm — Mingəçevir Dövlət Universitetində (2024–2028) təhsil alıram — və paralel olaraq freelance əsaslı vibe coder kimi çalışıram. Mingəçevir, Azərbaycanda yerləşirəm. AI alətlərini (Claude, Cursor və oxşarları) iş prosesimin əsasına qoyaraq, sürətli prompt-əsaslı iterasiyalarla universitet və şəhər səviyyəli real problemləri (cədvəl planlaşdırma, vətəndaş şikayətləri, enerji monitorinqi) həll edən platformalar qururam.",

    "stack.heading": "Texnologiya Stack-i",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.ai": "AI",
    "stack.infra": "İnfrastruktur",

    "preview.heading": "Seçilmiş layihələr",
    "preview.body": "Üç seçilmiş production layihə — universitet platformasından enerji monitorinqinə və PropTech-ə qədər.",
    "preview.cta": "Bütün layihələrə bax →",
    "stats.projects": "production layihə",
    "stats.internships": "internship təcrübəsi",
    "stats.stack": "əsas texnologiya istiqaməti",
    "stats.learning": "öyrənmə və iterasiya",
    "proj.schedule.short": "Universitetlər üçün multi-tenant cədvəl planlaşdırma platforması.",
    "proj.ekoai.short": "Telegram və AI ilə enerji monitorinqi sistemi.",
    "proj.renthome.short": "Kirayə ev elanları üçün müasir axtarış və əlaqə platforması.",
    "project.schedule.meta": "01 / SaaS",
    "project.energy.meta": "02 / Enerji",
    "project.proptech.meta": "03 / PropTech",
    "project.live.concept": "canlı konsept",
    "project.ai.bot": "AI + BOT",
    "project.live": "canlı",

    "projects.heading": "Layihələr",
    "projects.tagline": "Beş production platforma — universitetlərdən vətəndaş xidmətlərinə qədər, AI API-ləri ilə gücləndirilmiş.",
    "projects.list.label": "Layihələrin siyahısı",

    "proj.schedule.desc.html": "Universitetlər üçün <strong>multi-tenant</strong> cədvəl planlaşdırma SaaS platforması. Superadmin və universitet admini üçün rol ayrımı, Row Level Security, real vaxtda konflikt aşkarlanması, CSV/PDF ixracı və Resend üzərindən email dəvət sistemi daxildir. Mingəçevir Dövlət Universitetinin Mühəndislik fakültəsi üçün hazırlanmış interaktiv cədvəl generatorundan böyüyüb. ABB Innovation inkubasiya proqramına təqdim olunub.",
    "proj.cityai.desc.html": "Vətəndaş şikayətləri üçün platforma — <strong>Claude Vision API</strong> ilə şikayət şəkillərini analiz edir. GPS lokasiya aşkarlanması, admin paneli və vətəndaş üçün izləmə funksiyası daxildir. ASAN AI Hub Challenge 2026 üçün hazırlanıb və ABB Innovation inkubasiya proqramına təqdim olunub.",
    "proj.ekoai.desc.html": "Telegram botu ilə inteqrasiya olunmuş <strong>AI dəstəkli enerji monitorinqi</strong> platforması. Bot Pipedream və OpenRouter üzərindən qurulub; söhbət yaddaşı və inline keyboard funksionallığı var. Frontend-də üzən dəstək düyməsi inteqrasiyası mövcuddur.",
    "proj.promptr.desc.html": "Qısa sorğuları optimallaşdırılmış AI promptlarına çevirən veb tətbiq. OpenRouter-in pulsuz modellərindən istifadə edir və bütün deployment lifecycle Vercel üzərindən idarə olunub.",
    "proj.renthome.desc.html": "Kirayə ev elanları üçün hazırlanmış platforma — son layihələrimdən biri.",

    "proj.tags.aria.schedule": "E-Cədvəl layihəsində istifadə olunan texnologiyalar",
    "proj.tags.aria.cityai": "CityAI layihəsində istifadə olunan texnologiyalar",
    "proj.tags.aria.ekoai": "EkoAI layihəsində istifadə olunan texnologiyalar",
    "proj.tags.aria.promptr": "Promptr layihəsində istifadə olunan texnologiyalar",
    "proj.tags.aria.renthome": "RentHome layihəsində istifadə olunan texnologiyalar",

    "link.live": "canlı sayt →",
    "link.github": "GitHub →",
    "link.live.aria.schedule": "E-Cədvəl layihəsinin canlı saytına keç (yeni pəncərədə açılır)",
    "link.github.aria.schedule": "E-Cədvəl layihəsinin GitHub profilinə keç (yeni pəncərədə açılır)",
    "link.live.aria.cityai": "CityAI layihəsinin canlı saytına keç (yeni pəncərədə açılır)",
    "link.github.aria.cityai": "CityAI layihəsinin GitHub profilinə keç (yeni pəncərədə açılır)",
    "link.live.aria.ekoai": "EkoAI layihəsinin canlı saytına keç (yeni pəncərədə açılır)",
    "link.github.aria.ekoai": "EkoAI layihəsinin GitHub profilinə keç (yeni pəncərədə açılır)",
    "link.github.aria.promptr": "Promptr layihəsinin GitHub profilinə keç (yeni pəncərədə açılır)",
    "link.live.aria.renthome": "RentHome layihəsinin canlı saytına keç (yeni pəncərədə açılır)",
    "link.github.aria.renthome": "RentHome layihəsinin GitHub profilinə keç (yeni pəncərədə açılır)",

    "contact.banner.title": "İdeyanız var? Gəlin birlikdə quraq.",
    "contact.banner.body": "Yeni layihələr, freelance iş və texniki əməkdaşlıq üçün açığam.",
    "contact.banner.cta": "Əlaqə saxla",
    "contact.heading": "Birlikdə nəsə quraq",
    "contact.tagline": "Yeni layihələr, freelance iş və əməkdaşlıq üçün açığam. Aşağıdakı formu doldurun və ya birbaşa email yazın.",
    "contact.email.label": "Email:",
    "contact.legend": "Mesaj formu",
    "contact.name.label": "Ad Soyad",
    "contact.email.field.label": "Email",
    "contact.subject.label": "Mövzu",
    "contact.subject.hint": "Məcburi deyil",
    "contact.message.label": "Mesaj",
    "contact.submit": "Göndər",

    "validation.name": "Zəhmət olmasa adınızı daxil edin.",
    "validation.email": "Zəhmət olmasa düzgün email ünvanı daxil edin.",
    "validation.message": "Zəhmət olmasa mesajınızı yazın.",
    "status.error": "Formda xətalar var — zəhmət olmasa işarələnmiş sahələri düzəldin.",
    "status.success": "Mesajınız göndərildi — tezliklə cavab verəcəyəm.",
    "status.sending": "Göndərilir…",
    "status.network-error": "Mesaj göndərilmədi — internet bağlantınızı yoxlayıb yenidən cəhd edin."
  },

  en: {
    pageTitle: {
      index: "Omar Babayev — Full-stack Developer & AI Integrator",
      projects: "Projects — Omar Babayev",
      contact: "Contact — Omar Babayev"
    },
    "skip": "Skip to main content",
    "logo": "omerAI-engineer",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.aria": "Main navigation",
    "lang.aria": "Language selection",
    "theme.aria": "Theme selection",
    "theme.dark.aria": "Dark theme",
    "theme.light.aria": "Light theme",
    "footer.html": "Built by <a href=\"https://github.com/etikhacker\" target=\"_blank\" rel=\"noopener noreferrer\">Omar Babayev</a> · Mingachevir, Azerbaijan · 2026",

    "hero.role": "Vibe Coder / AI-Assisted Full-stack Developer",
    "hero.title.html": "I <span class=\"amber\">vibe code</span> with AI and ship fast.",
    "hero.tagline.html": "I turn ideas into prompts, and prompts into working products. Built on Next.js, FastAPI and <strong>Supabase</strong>, with AI tools like Claude, Gemini and OpenRouter at the center of my workflow — fast, iterative cycles from concept to production.",
    "cta.github.aria": "Go to Omar's GitHub profile (opens in a new window)",
    "cta.github": "GitHub → github.com/etikhacker",
    "cta.linkedin.aria": "Go to Omar's LinkedIn profile (opens in a new window)",
    "cta.linkedin": "LinkedIn profile",
    "hero.projects": "View projects",
    "hero.contact": "Let's work together",
    "hero.visual.aria": "AI development workflow",
    "terminal.identity": "Omar Babayev · AI Integrator",
    "terminal.deployed": "deployed successfully",
    "availability": "available for work",
    "location": "Mingachevir · Azerbaijan",

    "about.heading": "About",
    "about.lead": "I don't just write technology — I turn it into working systems for real problems.",
    "about.note": "Fast prototypes. Clean interfaces. Production thinking.",
    "about.body": "I'm an IT student at Mingachevir State University (2024–2028), and I work in parallel as a freelance vibe coder based in Mingachevir, Azerbaijan. I put AI tools (Claude, Cursor, and similar) at the center of my workflow, building real university- and city-level solutions — timetable planning, citizen complaints, energy monitoring — through fast, prompt-driven iteration.",

    "stack.heading": "Tech Stack",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.ai": "AI",
    "stack.infra": "Infrastructure",

    "preview.heading": "Selected Projects",
    "preview.body": "Three selected production projects — from university platforms to energy monitoring and PropTech.",
    "preview.cta": "View all projects →",
    "stats.projects": "production projects",
    "stats.internships": "internship experiences",
    "stats.stack": "core technology areas",
    "stats.learning": "learning and iteration",
    "proj.schedule.short": "A multi-tenant timetable planning platform for universities.",
    "proj.ekoai.short": "An energy monitoring system powered by Telegram and AI.",
    "proj.renthome.short": "A modern search and contact platform for rental home listings.",
    "project.schedule.meta": "01 / SaaS",
    "project.energy.meta": "02 / Energy",
    "project.proptech.meta": "03 / PropTech",
    "project.live.concept": "live concept",
    "project.ai.bot": "AI + BOT",
    "project.live": "live",

    "projects.heading": "Projects",
    "projects.tagline": "Five production platforms — from universities to citizen services, powered by AI APIs.",
    "projects.list.label": "List of projects",

    "proj.schedule.desc.html": "A <strong>multi-tenant</strong> timetable planning SaaS platform for universities. It includes separate superadmin and university admin roles, Row Level Security, real-time conflict detection, CSV/PDF export and email invitations through Resend. The project grew out of an interactive timetable generator built for the Engineering Faculty at Mingachevir State University and was submitted to the ABB Innovation incubation program.",
    "proj.cityai.desc.html": "A citizen complaint platform that analyzes complaint photos with the <strong>Claude Vision API</strong>. It includes GPS location detection, an admin panel and tracking for citizens. Built for ASAN AI Hub Challenge 2026 and submitted to the ABB Innovation incubation program.",
    "proj.ekoai.desc.html": "An <strong>AI-assisted energy monitoring</strong> platform integrated with a Telegram bot. The bot is built on Pipedream and OpenRouter, with chat memory and inline keyboard functionality. The frontend includes a floating support button integration.",
    "proj.promptr.desc.html": "A web app that turns short requests into optimized AI prompts. It uses free models from OpenRouter, with the full deployment lifecycle managed on Vercel.",
    "proj.renthome.desc.html": "A platform for rental home listings — one of my latest projects.",

    "proj.tags.aria.schedule": "Technologies used in the E-Cədvəl project",
    "proj.tags.aria.cityai": "Technologies used in the CityAI project",
    "proj.tags.aria.ekoai": "Technologies used in the EkoAI project",
    "proj.tags.aria.promptr": "Technologies used in the Promptr project",
    "proj.tags.aria.renthome": "Technologies used in the RentHome project",

    "link.live": "live site →",
    "link.github": "GitHub →",
    "link.live.aria.schedule": "Go to the E-Cədvəl live site (opens in a new window)",
    "link.github.aria.schedule": "Go to the E-Cədvəl GitHub profile (opens in a new window)",
    "link.live.aria.cityai": "Go to the CityAI live site (opens in a new window)",
    "link.github.aria.cityai": "Go to the CityAI GitHub profile (opens in a new window)",
    "link.live.aria.ekoai": "Go to the EkoAI live site (opens in a new window)",
    "link.github.aria.ekoai": "Go to the EkoAI GitHub profile (opens in a new window)",
    "link.github.aria.promptr": "Go to the Promptr GitHub profile (opens in a new window)",
    "link.live.aria.renthome": "Go to the RentHome live site (opens in a new window)",
    "link.github.aria.renthome": "Go to the RentHome GitHub profile (opens in a new window)",

    "contact.banner.title": "Have an idea? Let's build it together.",
    "contact.banner.body": "I'm open to new projects, freelance work and technical collaboration.",
    "contact.banner.cta": "Get in touch",
    "contact.heading": "Let's build something together",
    "contact.tagline": "I'm open to new projects, freelance work and collaboration. Fill out the form below or email me directly.",
    "contact.email.label": "Email:",
    "contact.legend": "Message form",
    "contact.name.label": "Full name",
    "contact.email.field.label": "Email",
    "contact.subject.label": "Subject",
    "contact.subject.hint": "Optional",
    "contact.message.label": "Message",
    "contact.submit": "Send",

    "validation.name": "Please enter your name.",
    "validation.email": "Please enter a valid email address.",
    "validation.message": "Please write your message.",
    "status.error": "There are errors in the form — please fix the highlighted fields.",
    "status.success": "Your message has been sent — I'll get back to you soon.",
    "status.sending": "Sending…",
    "status.network-error": "Couldn't send your message — check your connection and try again."
  }
};

(function () {
  const body = document.body;
  const page = body.getAttribute("data-page") || "index";

  const textNodes = document.querySelectorAll("[data-i18n]");
  const htmlNodes = document.querySelectorAll("[data-i18n-html]");
  const ariaNodes = document.querySelectorAll("[data-i18n-aria]");
  const langButtons = document.querySelectorAll(".lang-btn");

  let currentLang = localStorage.getItem("portfolio-language") || "az";

  function dict() {
    return translations[currentLang] || translations.az;
  }

  function setLanguage(lang) {
    if (!translations[lang]) lang = "az";
    currentLang = lang;
    const d = dict();

    textNodes.forEach((node) => {
      const key = node.dataset.i18n;
      if (d[key] !== undefined) node.textContent = d[key];
    });

    htmlNodes.forEach((node) => {
      const key = node.dataset.i18nHtml;
      if (d[key] !== undefined) node.innerHTML = d[key];
    });

    ariaNodes.forEach((node) => {
      const key = node.dataset.i18nAria;
      if (d[key] !== undefined) node.setAttribute("aria-label", d[key]);
    });

    document.documentElement.lang = lang;
    if (d.pageTitle && d.pageTitle[page]) document.title = d.pageTitle[page];
    localStorage.setItem("portfolio-language", lang);

    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.setAttribute("aria-pressed", String(isActive));
    });

    if (typeof window.refreshVisibleErrors === "function") window.refreshVisibleErrors();
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  setLanguage(currentLang);

  /* ---------------------------------------------------------
     Light/dark theme toggle — persisted, falls back to the
     visitor's OS-level preference on first visit.
     --------------------------------------------------------- */
  const themeButtons = document.querySelectorAll(".theme-btn");
  const storedTheme = localStorage.getItem("portfolio-theme");
  const prefersLight =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  let currentTheme = storedTheme || (prefersLight ? "light" : "dark");

  function setTheme(theme) {
    if (theme !== "light" && theme !== "dark") theme = "dark";
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    themeButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.theme === theme));
    });
  }

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => setTheme(btn.dataset.theme));
  });

  setTheme(currentTheme);

  /* ---------------------------------------------------------
     Contact form: validation + mailto submission (contact.html)
     --------------------------------------------------------- */
  const form = document.getElementById("contact-form");
  if (form) {
    const status = document.getElementById("form-status");
    const fieldDefs = [
      { id: "name", errorId: "name-error", key: "validation.name" },
      {
        id: "email",
        errorId: "email-error",
        key: "validation.email",
        validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      },
      { id: "message", errorId: "message-error", key: "validation.message" },
    ];

    function validateField(field) {
      const input = document.getElementById(field.id);
      const errorEl = document.getElementById(field.errorId);
      const value = input.value.trim();
      const isValid = field.validate ? field.validate(value) : value.length > 0;

      if (!isValid) {
        input.setAttribute("aria-invalid", "true");
        input.closest(".form-group").classList.add("has-error");
        errorEl.textContent = dict()[field.key];
        return false;
      }

      input.removeAttribute("aria-invalid");
      input.closest(".form-group").classList.remove("has-error");
      errorEl.textContent = "";
      return true;
    }

    window.refreshVisibleErrors = function () {
      fieldDefs.forEach((field) => {
        const input = document.getElementById(field.id);
        const errorEl = document.getElementById(field.errorId);
        if (input.getAttribute("aria-invalid") === "true") {
          errorEl.textContent = dict()[field.key];
        }
      });
      if (status.dataset.state === "error") {
        status.textContent = dict()["status.error"];
      } else if (status.dataset.state === "success") {
        status.textContent = dict()["status.success"];
      }
    };

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Honeypot: real visitors never fill this hidden field.
      // Bots that auto-fill every input will — pretend success, send nothing.
      const botcheck = form.querySelector('[name="botcheck"]');
      if (botcheck && botcheck.checked) {
        status.textContent = dict()["status.success"];
        status.classList.remove("is-error");
        status.dataset.state = "success";
        form.reset();
        return;
      }

      let firstInvalid = null;
      let allValid = true;

      fieldDefs.forEach((field) => {
        if (!validateField(field)) {
          allValid = false;
          if (!firstInvalid) firstInvalid = document.getElementById(field.id);
        }
      });

      if (!allValid) {
        status.textContent = dict()["status.error"];
        status.classList.add("is-error");
        status.dataset.state = "error";
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const accessKey = document.getElementById("access-key").value;
      if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
        status.textContent = "Setup incomplete: paste your Web3Forms access key into contact.html.";
        status.classList.add("is-error");
        status.dataset.state = "error";
        return;
      }

      status.classList.remove("is-error");
      status.textContent = dict()["status.sending"];
      status.dataset.state = "sending";

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      const payload = {
        access_key: accessKey,
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject:
          document.getElementById("subject").value.trim() ||
          "Portfolio contact form",
        message: document.getElementById("message").value.trim(),
      };

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            status.textContent = dict()["status.success"];
            status.dataset.state = "success";
            form.reset();
          } else {
            status.textContent = dict()["status.network-error"];
            status.classList.add("is-error");
            status.dataset.state = "network-error";
          }
        })
        .catch(() => {
          status.textContent = dict()["status.network-error"];
          status.classList.add("is-error");
          status.dataset.state = "network-error";
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
        });
    });

    fieldDefs.forEach((field) => {
      const input = document.getElementById(field.id);
      input.addEventListener("input", () => {
        if (input.getAttribute("aria-invalid") === "true") validateField(field);
      });
    });
  }
})();

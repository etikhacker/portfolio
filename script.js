/* ============================================================
   Ömər Babayev — Portfolio
   Shared script: AZ/EN language switching + accessible
   contact-form validation (mailto fallback, no backend).
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
    "footer.html": "Hazırladı: <a href=\"https://github.com/etikhacker\" target=\"_blank\" rel=\"noopener noreferrer\">Ömər Babayev</a> · Mingəçevir, Azərbaycan · 2026",

    "hero.role": "Full-stack Developer / AI Integrator",
    "hero.title.html": "Kod yazıram, <span class=\"amber\">deploy edirəm</span>, real problemləri həll edirəm.",
    "hero.tagline.html": "Next.js, FastAPI və <strong>Supabase</strong> üzərində qurulan, AI API-lərlə (Claude, Gemini, OpenRouter) gücləndirilmiş məhsullar hazırlayıram — konsepsiyadan production-a qədər.",
    "cta.github.aria": "Ömərin GitHub profilinə keç (yeni pəncərədə açılır)",
    "cta.github": "GitHub → github.com/etikhacker",
    "cta.linkedin.aria": "Ömərin LinkedIn profilinə keç (yeni pəncərədə açılır)",
    "cta.linkedin": "LinkedIn profili",

    "about.heading": "Haqqımda",
    "about.body": "IT tələbəsiyəm — Mingəçevir Dövlət Universitetində (2024–2028) təhsil alıram — və paralel olaraq freelance əsaslı full-stack developer kimi çalışıram. Mingəçevir, Azərbaycanda yerləşirəm. Universitet və şəhər səviyyəli real problemləri (cədvəl planlaşdırma, vətəndaş şikayətləri, enerji monitorinqi) həll edən AI-gücləndirilmiş platformalar qururam.",

    "stack.heading": "Texnologiya Stack-i",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.ai": "AI",
    "stack.infra": "İnfrastruktur",

    "preview.heading": "Son Layihələr",
    "preview.body": "Beş production layihə — universitet cədvəl planlaşdırmasından tutmuş vətəndaş şikayət platformasına qədər.",
    "preview.cta": "Bütün layihələrə bax →",

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
    "status.success": "Email tətbiqiniz açılır — mesajınızı orada göndərə bilərsiniz.",
    "mailto.subjectDefault": "Portfoliodan mesaj",
    "mailto.bodyLabel": "Ad"
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
    "footer.html": "Built by <a href=\"https://github.com/etikhacker\" target=\"_blank\" rel=\"noopener noreferrer\">Omar Babayev</a> · Mingachevir, Azerbaijan · 2026",

    "hero.role": "Full-stack Developer / AI Integrator",
    "hero.title.html": "I build, <span class=\"amber\">deploy</span>, and solve real problems.",
    "hero.tagline.html": "I build products with Next.js, FastAPI and <strong>Supabase</strong>, powered by AI APIs such as Claude, Gemini and OpenRouter — from concept to production.",
    "cta.github.aria": "Go to Omar's GitHub profile (opens in a new window)",
    "cta.github": "GitHub → github.com/etikhacker",
    "cta.linkedin.aria": "Go to Omar's LinkedIn profile (opens in a new window)",
    "cta.linkedin": "LinkedIn profile",

    "about.heading": "About",
    "about.body": "I'm an IT student at Mingachevir State University (2024–2028), and I work in parallel as a freelance full-stack developer based in Mingachevir, Azerbaijan. I build AI-powered platforms that solve real university- and city-level problems — timetable planning, citizen complaints, energy monitoring.",

    "stack.heading": "Tech Stack",
    "stack.frontend": "Frontend",
    "stack.backend": "Backend",
    "stack.ai": "AI",
    "stack.infra": "Infrastructure",

    "preview.heading": "Recent Projects",
    "preview.body": "Five production projects — from university timetable planning to a citizen-complaint platform.",
    "preview.cta": "View all projects →",

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
    "status.success": "Your email app is opening — you can send the message from there.",
    "mailto.subjectDefault": "Message from portfolio",
    "mailto.bodyLabel": "Name"
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

      status.classList.remove("is-error");

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject =
        document.getElementById("subject").value.trim() || dict()["mailto.subjectDefault"];
      const message = document.getElementById("message").value.trim();
      const bodyLabel = dict()["mailto.bodyLabel"];

      const mailBody = `${bodyLabel}: ${name}\nEmail: ${email}\n\n${message}`;
      const mailtoUrl =
        "mailto:babayev.omr.23@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(mailBody);

      window.location.href = mailtoUrl;
      status.textContent = dict()["status.success"];
      status.dataset.state = "success";
    });

    fieldDefs.forEach((field) => {
      const input = document.getElementById(field.id);
      input.addEventListener("input", () => {
        if (input.getAttribute("aria-invalid") === "true") validateField(field);
      });
    });
  }
})();

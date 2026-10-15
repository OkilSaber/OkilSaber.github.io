import { i18n } from "./data/i18n.js";
import { profile } from "./data/profile.js";
import { projects } from "./data/projects.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const repoUrl = (p) => `${profile.github}/${p.repo}`;

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// ─── Langue : ?lang=, puis choix mémorisé, puis langue du navigateur ────────

function initialLang() {
  const forced = new URLSearchParams(location.search).get("lang");
  if (forced in i18n) return forced;
  const saved = localStorage.getItem("lang");
  if (saved in i18n) return saved;
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

let lang = initialLang();
let filter = "all";

// ─── Rendu ──────────────────────────────────────────────────────────────

const ICONS = {
  code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>',
  download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
};

function links(p, t) {
  const code = `<a class="link" href="${repoUrl(p)}" target="_blank" rel="noopener">${ICONS.code}${t.code}</a>`;
  const dl = p.download
    ? `<a class="link strong" href="${esc(p.download)}" target="_blank" rel="noopener">${ICONS.download}${t.download}</a>`
    : "";
  return code + dl;
}

function chips(p) {
  return p.stack.map((s) => `<li>${esc(s)}</li>`).join("");
}

function visual(p) {
  if (p.media?.type === "video") {
    // Chargée seulement à l'approche (data-src), lue muette en boucle.
    return `<video class="shot" muted loop playsinline preload="none" poster="${esc(p.media.poster)}" data-src="${esc(p.media.src)}"></video>`;
  }
  if (p.media?.type === "image") {
    return `<img class="shot" src="${esc(p.media.src)}" alt="" loading="lazy" />`;
  }
  // Sans capture : l'icône en grand, sur son halo et une grille en perspective.
  return `
    <div class="art">
      <div class="art-grid"></div>
      <div class="art-halo"></div>
      <img class="art-icon" src="${esc(p.icon)}" alt="" loading="lazy" width="200" height="200" />
    </div>`;
}

function featuredCard(p, t, i) {
  return `
    <article class="feature reveal ${i % 2 ? "flip" : ""}" style="--accent:${p.accent}">
      <div class="feature-visual">${visual(p)}</div>
      <div class="feature-body">
        <div class="feature-title">
          <img src="${esc(p.icon)}" alt="" width="48" height="48" loading="lazy" />
          <div>
            <h3>${esc(p.name)}</h3>
            <p class="tagline">${esc(p.tagline[lang])}</p>
          </div>
        </div>
        <p class="desc">${esc(p.description[lang])}</p>
        <ul class="highlights">${p.highlights[lang].map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
        <ul class="chips">${chips(p)}</ul>
        <div class="links">${links(p, t)}</div>
      </div>
    </article>`;
}

function gridCard(p, t) {
  return `
    <article class="card" style="--accent:${p.accent}" data-category="${p.category}">
      <div class="card-top">
        <img src="${esc(p.icon)}" alt="" width="44" height="44" loading="lazy" />
        <h3>${esc(p.name)}</h3>
      </div>
      <p>${esc(p.tagline[lang])}</p>
      <ul class="chips small">${chips(p)}</ul>
      <div class="links">${links(p, t)}</div>
      <a class="card-cover" href="${repoUrl(p)}" target="_blank" rel="noopener" aria-label="${esc(p.name)}"></a>
    </article>`;
}

function render() {
  const t = i18n[lang];
  document.documentElement.lang = lang;
  document.title = t.metaTitle;
  $('meta[name="description"]').setAttribute("content", t.metaDescription);

  for (const el of $$("[data-i18n]")) {
    const text = t[el.dataset.i18n];
    // Les retours à la ligne des titres deviennent des <br>.
    el.innerHTML = esc(text).replace(/\n/g, " <br />");
  }
  for (const el of $$("[data-name]")) el.textContent = profile.name;
  for (const el of $$("[data-avatar]")) el.src = profile.avatar;
  $("[data-year]").textContent = new Date().getFullYear();
  $("[data-github]").href = profile.github;
  const linkedin = $("[data-linkedin]");
  linkedin.hidden = !profile.linkedin;
  if (profile.linkedin) linkedin.href = profile.linkedin;
  $("[data-lang-switch]").textContent = t.switchTo;

  const count = (c) => projects.filter((p) => p.category === c).length;
  $("[data-stats]").innerHTML = [
    [projects.length, t.statProjects],
    [count("desktop"), t.statDesktop],
    [count("mobile"), t.statMobile],
  ]
    .map(([n, label]) => `<div><dt>${n}</dt><dd>${esc(label)}</dd></div>`)
    .join("");

  // Constellation d'icônes des projets phares, à droite du hero. Les positions sont écrites à la
  // main dans styles.css (.tile.t0 à .t5) : on n'en affiche pas plus qu'il n'y a de places.
  $("[data-hero-art]").innerHTML = projects
    .filter((p) => p.featured)
    .slice(0, 6)
    .map((p, i) => `<span class="tile reveal t${i}" style="--accent:${p.accent}"><img src="${esc(p.icon)}" alt="" width="96" height="96" /></span>`)
    .join("");

  $("[data-featured]").innerHTML = projects
    .filter((p) => p.featured)
    .map((p, i) => featuredCard(p, t, i))
    .join("");

  const others = projects.filter((p) => !p.featured);
  $("[data-filters]").innerHTML = [
    ["all", t.filterAll],
    ["desktop", t.filterDesktop],
    ["mobile", t.filterMobile],
    ["tools", t.filterTools],
  ]
    .filter(([id]) => id === "all" || others.some((p) => p.category === id))
    .map(([id, label]) => `<button type="button" role="tab" data-filter="${id}" aria-selected="${id === filter}">${esc(label)}</button>`)
    .join("");
  $("[data-grid]").innerHTML = others.map((p) => gridCard(p, t)).join("");
  applyFilter();

  const stack = [...new Set(projects.flatMap((p) => p.stack))];
  $("[data-stack]").innerHTML = stack.map((s) => `<li>${esc(s)}</li>`).join("");

  observe();
}

// Filtre instantané : action fréquente, donc aucune animation.
function applyFilter() {
  for (const card of $$("[data-grid] .card")) {
    card.hidden = filter !== "all" && card.dataset.category !== filter;
  }
  for (const b of $$("[data-filter]")) b.setAttribute("aria-selected", String(b.dataset.filter === filter));
}

// ─── Apparition au défilement et vidéo différée ─────────────────────────

let revealObserver;
let videoObserver;

function observe() {
  revealObserver?.disconnect();
  videoObserver?.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("in");
        revealObserver.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  // Les éléments d'un même groupe apparaissent en léger décalé.
  $$(".reveal").forEach((el, i) => {
    el.style.setProperty("--delay", `${(i % 4) * 60}ms`);
    revealObserver.observe(el);
  });

  videoObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const v = e.target;
        if (e.isIntersecting) {
          if (!v.src) v.src = v.dataset.src;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      }
    },
    { rootMargin: "200px" },
  );
  $$("video[data-src]").forEach((v) => videoObserver.observe(v));
}

// ─── Reflet qui suit la souris sur les cartes en verre ───────────────────

const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

document.addEventListener("pointermove", (e) => {
  if (!finePointer.matches || reducedMotion.matches) return;
  const card = e.target.closest?.(".feature, .card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
});

// ─── Interactions ───────────────────────────────────────────────────────

document.addEventListener("click", (e) => {
  const f = e.target.closest("[data-filter]");
  if (f) {
    filter = f.dataset.filter;
    applyFilter();
    return;
  }
  if (e.target.closest("[data-lang-switch]")) {
    lang = lang === "fr" ? "en" : "fr";
    localStorage.setItem("lang", lang);
    render();
    // Le contenu déjà vu ne rejoue pas son apparition.
    $$(".reveal").forEach((el) => el.classList.add("in"));
  }
});

render();

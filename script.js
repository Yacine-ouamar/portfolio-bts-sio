const $ = (s) => document.querySelector(s);
const esc = (t = "") => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const nomComplet = `${PROFIL.prenom} ${PROFIL.nom}`;

/* ---------- En-tête & accueil ---------- */
document.title = `${nomComplet} – Portfolio BTS SIO SISR`;
$("#nav-name").textContent = PROFIL.prenom.toLowerCase();
$("#hero-name").textContent = nomComplet;
$("#hero-tag").textContent = PROFIL.titre;
$("#hero-accroche").textContent = PROFIL.accroche;
if (PROFIL.cv) $("#btn-cv").href = PROFIL.cv; else $("#btn-cv").remove();
if (PROFIL.tableauSynthese) $("#btn-synthese").href = PROFIL.tableauSynthese; else $("#btn-synthese").remove();

const photo = $("#hero-photo");
if (PROFIL.photo) {
  photo.src = PROFIL.photo;
  photo.alt = `Photo de ${nomComplet}`;
  photo.onerror = () => photo.remove();
} else photo.remove();

/* ---------- À propos ---------- */
const ICONS = {
  formation: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  entreprise: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/>',
  lieu: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
};
const icon = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[k] || ICONS.lieu}</svg>`;

const fmt = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
$("#about-text").innerHTML = PROFIL.apropos
  .map((p, i, all) => `<p class="${i === 0 ? "lead" : i === all.length - 1 ? "goal" : ""}">${fmt(p)}</p>`)
  .join("");
$("#profile-name").textContent = nomComplet;
$("#profile-status").textContent = PROFIL.statut || "";
const avatar = $("#profile-avatar");
if (PROFIL.photo) { avatar.src = PROFIL.photo; avatar.onerror = () => avatar.remove(); } else avatar.remove();

$("#about-facts").innerHTML = PROFIL.infos
  .map(([k, label, val]) => `<li><span class="ico">${icon(k)}</span><span><small>${esc(label)}</small>${esc(val)}</span></li>`)
  .join("");

$("#roadmap").innerHTML = (PROFIL.objectif || [])
  .map((e) => `<li class="${esc(e.etat)}"><span class="step"></span><strong>${esc(e.titre)}</strong><small>${esc(e.detail)}</small></li>`)
  .join("");

$("#interests").innerHTML = (typeof INTERETS !== "undefined" ? INTERETS : [])
  .map((i) => `<div class="interest"><span class="emoji">${i.icone}</span><div><strong>${esc(i.titre)}</strong><p>${esc(i.desc)}</p></div></div>`)
  .join("");

/* ---------- Parcours ---------- */
const timeline = (items) =>
  items
    .map(
      (e) => `<li>
        <span class="mono accent small">${esc(e.date)}</span>
        <strong>${esc(e.titre)}</strong>
        <span class="muted">${esc(e.lieu)}</span>
        ${e.detail ? `<p>${esc(e.detail)}</p>` : ""}
      </li>`
    )
    .join("");
$("#formation").innerHTML = timeline(FORMATION);
$("#stages").innerHTML = timeline(STAGES);

/* ---------- Compétences ---------- */
$("#bloc1").innerHTML = BLOC1.map(
  (c) => `<article class="card">
    <span class="badge">${c.id}</span>
    <h4>${esc(c.titre)}</h4>
    <p class="muted">${esc(c.desc)}</p>
  </article>`
).join("");

$("#tech").innerHTML = Object.entries(TECH)
  .map(
    ([cat, list]) => `<div class="skill-group">
      <h4 class="mono">${esc(cat)}</h4>
      <div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    </div>`
  )
  .join("");

if (!CERTIFS.length) { $("#certifs").previousElementSibling.remove(); $("#certifs").remove(); }
else $("#certifs").innerHTML = CERTIFS.map(
  (c) => `<article class="card">
    <h4>${esc(c.titre)}</h4>
    <p class="muted">${esc(c.org)} · ${esc(c.annee)}</p>
    ${c.url ? `<a href="${esc(c.url)}" target="_blank" class="link">Voir l'attestation →</a>` : ""}
  </article>`
).join("");

/* ---------- Réalisations ---------- */
function renderProjets(filtre = "Tous") {
  const list = REALISATIONS.filter((r) => filtre === "Tous" || r.contexte === filtre);
  $("#projets").innerHTML = list
    .map(
      (r) => `<article class="card project" data-id="${r.id}" tabindex="0">
        <div class="card-top">
          <span class="pill ${r.contexte !== "Formation" ? "pill-stage" : ""}">${esc(r.contexte)}</span>
          <span class="mono small muted">${esc(r.periode)}</span>
        </div>
        <h4>${esc(r.titre)}</h4>
        <p class="muted">${esc(r.resume)}</p>
        <div class="tags">${r.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="comp-line">${r.competences.map((c) => `<span class="badge sm">${c}</span>`).join("")}</div>
        <span class="link">Voir le détail →</span>
      </article>`
    )
    .join("");
}
renderProjets();

$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter");
  if (!b) return;
  document.querySelectorAll(".filter").forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  renderProjets(b.dataset.f);
});

/* ---------- Fenêtre de détail ---------- */
const modal = $("#modal");
function openProjet(id) {
  const r = REALISATIONS.find((x) => x.id === id);
  if (!r) return;
  const d = r.details;
  const comps = BLOC1.filter((c) => r.competences.includes(c.id));
  $("#modal-content").innerHTML = `
    <span class="pill ${r.contexte !== "Formation" ? "pill-stage" : ""}">${esc(r.contexte)} · ${esc(r.periode)}</span>
    <h3>${esc(r.titre)}</h3>
    <div class="tags">${r.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    <h4>Contexte</h4><p>${esc(d.contexte)}</p>
    <h4>Objectifs</h4><ul>${d.objectifs.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
    <h4>Étapes de réalisation</h4><ol>${d.etapes.map((o) => `<li>${esc(o)}</li>`).join("")}</ol>
    <h4>Résultat</h4><p>${esc(d.resultat)}</p>
    <h4>Compétences mobilisées</h4>
    <ul class="comp-list">${comps.map((c) => `<li><span class="badge sm">${c.id}</span> ${esc(c.titre)}</li>`).join("")}</ul>
    ${r.docs.length ? `<h4>Documents</h4><div class="docs">${r.docs.map((x) => `<a class="btn btn-ghost sm" href="${esc(x.url)}" target="_blank">📄 ${esc(x.label)}</a>`).join("")}</div>` : ""}
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
$("#projets").addEventListener("click", (e) => {
  const c = e.target.closest(".project");
  if (c) openProjet(c.dataset.id);
});
$("#projets").addEventListener("keydown", (e) => {
  const c = e.target.closest(".project");
  if (c && e.key === "Enter") openProjet(c.dataset.id);
});
$("#modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => e.target === modal && closeModal());
document.addEventListener("keydown", (e) => e.key === "Escape" && closeModal());

/* ---------- Tableau de synthèse ---------- */
$("#matrix").innerHTML = `
  <thead><tr><th>Réalisation</th><th>Contexte</th>${BLOC1.map((c) => `<th title="${esc(c.titre)}">${c.id}</th>`).join("")}</tr></thead>
  <tbody>${REALISATIONS.map(
    (r) => `<tr data-id="${r.id}">
      <td>${esc(r.titre)}</td><td>${esc(r.contexte)}</td>
      ${BLOC1.map((c) => `<td class="center">${r.competences.includes(c.id) ? '<span class="check">✔</span>' : ""}</td>`).join("")}
    </tr>`
  ).join("")}</tbody>`;
$("#matrix").addEventListener("click", (e) => {
  const tr = e.target.closest("tbody tr");
  if (tr) openProjet(tr.dataset.id);
});

/* ---------- Veille ---------- */
if (!VEILLE.articles.length) { $("#veille").remove(); document.querySelector('#menu a[href="#veille"]').remove(); }
else $("#veille-content").innerHTML = `
  <div class="veille-top">
    <article class="card veille-card c-blue">
      <div class="vc-head"><span class="vc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></span>
      <h3>Qu'est-ce qu'une veille technologique ?</h3></div>
      <p>${esc(VEILLE.definition)}</p>
    </article>
    <article class="card veille-card c-violet">
      <div class="vc-head"><span class="vc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg></span>
      <h3>Qu'est-ce que j'utilise pour ma veille ?</h3></div>
      <p>${esc(VEILLE.methode)}</p>
      <ul class="tools">${VEILLE.outils.map((o) => `<li><strong>${esc(o.nom)}</strong><span>${esc(o.role)}</span></li>`).join("")}</ul>
    </article>
  </div>
  <article class="card sujet-card">
    <span class="mono accent small">Mon sujet</span>
    <h3>${esc(VEILLE.sujet)}</h3>
    <p>${esc(VEILLE.intro)}</p>
    ${VEILLE.apport ? `<p class="apport">💡 ${esc(VEILLE.apport)}</p>` : ""}
  </article>
  <h3 class="mt">Mes derniers articles</h3>
  <div class="articles">${VEILLE.articles
    .map((a) => `<a class="card article" href="${esc(a.url)}" target="_blank" rel="noopener">
        <span class="mono small accent">${esc(a.date)} · ${esc(a.source)}</span>
        <h4>${esc(a.titre)}</h4>
        <p class="muted">${esc(a.resume)}</p>
        <span class="link">Lire l'article →</span>
      </a>`)
    .join("")}</div>`;

/* ---------- Contact & pied de page ---------- */
$("#contact-links").innerHTML = `
  <a class="btn" href="mailto:${esc(PROFIL.email)}">✉️ ${esc(PROFIL.email)}</a>
  ${PROFIL.linkedin ? `<a class="btn btn-ghost" href="${esc(PROFIL.linkedin)}" target="_blank">LinkedIn</a>` : ""}
  ${PROFIL.github ? `<a class="btn btn-ghost" href="${esc(PROFIL.github)}" target="_blank">GitHub</a>` : ""}`;
$("#footer").textContent = `© ${new Date().getFullYear()} ${nomComplet} · BTS SIO SISR`;

/* ---------- Menu mobile ---------- */
$("#burger").addEventListener("click", () => $("#menu").classList.toggle("open"));
document.querySelectorAll("#menu a").forEach((a) => a.addEventListener("click", () => $("#menu").classList.remove("open")));
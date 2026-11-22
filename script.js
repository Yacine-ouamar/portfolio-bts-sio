const $ = (s) => document.querySelector(s);
const esc = (t = "") => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const nomComplet = `${PROFIL.prenom} ${PROFIL.nom}`;

/* ---------- En-tête & accueil ---------- */
document.title = `${nomComplet} – Portfolio BTS SIO SISR`;
$("#nav-name").textContent = PROFIL.prenom.toLowerCase();
$("#hero-name").textContent = nomComplet;
$("#hero-tag").textContent = PROFIL.titre;
$("#hero-accroche").textContent = PROFIL.accroche;
$("#btn-cv").href = PROFIL.cv;
$("#btn-synthese").href = PROFIL.tableauSynthese;

/* ---------- À propos ---------- */
$("#about-text").innerHTML = PROFIL.apropos.map((p) => `<p>${esc(p)}</p>`).join("");
$("#about-facts").innerHTML = PROFIL.infos.map(([i, t]) => `<li><span>${i}</span>${esc(t)}</li>`).join("");

/* ---------- Parcours ---------- */
const timeline = (items) =>
  items
    .map(
      (e) => `<li>
        <span class="mono accent small">${esc(e.date)}</span>
        <strong>${esc(e.titre)}</strong>
        <span class="muted">${esc(e.lieu)}</span>
        <p>${esc(e.detail)}</p>
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

$("#certifs").innerHTML = CERTIFS.map(
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
          <span class="pill ${r.contexte === "Stage" ? "pill-stage" : ""}">${esc(r.contexte)}</span>
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
    <span class="pill ${r.contexte === "Stage" ? "pill-stage" : ""}">${esc(r.contexte)} · ${esc(r.periode)}</span>
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
$("#veille-content").innerHTML = `
  <div class="card veille-intro">
    <span class="mono accent small">Sujet</span>
    <h3>${esc(VEILLE.sujet)}</h3>
    <p>${esc(VEILLE.intro)}</p>
    <h4>Outils de veille</h4>
    <div class="tags">${VEILLE.outils.map((o) => `<span class="tag">${esc(o)}</span>`).join("")}</div>
  </div>
  <div class="veille-list">${VEILLE.articles
    .map(
      (a) => `<a class="card article" href="${esc(a.url)}" target="_blank">
        <span class="mono small muted">${esc(a.date)} · ${esc(a.source)}</span>
        <h4>${esc(a.titre)}</h4>
        <p class="muted">${esc(a.resume)}</p>
      </a>`
    )
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

/* PocheLab : remplit les prix, les liens et les dates à partir de config.js. Ne pas modifier. */
(function () {
  var C = window.POCHELAB || {};
  var L = C.liens || {};
  var mois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
  var fin = C.finLancement ? new Date(C.finLancement + "T23:59:59") : null;
  var enLancement = fin ? new Date() <= fin : false;
  var dateTexte = fin ? fin.getDate() + (fin.getDate() === 1 ? "er" : "") + " " + mois[fin.getMonth()] : "";

  document.documentElement.classList.add(enLancement ? "lancement" : "normal");

  function get(obj, chemin) {
    return chemin.split(".").reduce(function (o, k) { return o && o[k]; }, obj);
  }

  // Prix : data-prix="essentiel.cad" (prix actuel) ou data-prix-normal="essentiel.cad"
  document.querySelectorAll("[data-prix]").forEach(function (el) {
    var p = el.getAttribute("data-prix").split(".");
    var bloc = (C.prix || {})[p[0]] || {};
    var v = (enLancement ? bloc.lancement : bloc.normal) || {};
    if (v[p[1]]) el.textContent = v[p[1]];
  });
  document.querySelectorAll("[data-prix-normal]").forEach(function (el) {
    var v = get(C.prix || {}, el.getAttribute("data-prix-normal").replace(".", ".normal."));
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-fin]").forEach(function (el) { el.textContent = dateTexte; });

  // Liens : data-lien="essentielCarte"
  document.querySelectorAll("[data-lien]").forEach(function (el) {
    var cle = el.getAttribute("data-lien");
    var url = L[cle];
    if (cle === "courriel" && url) url = "mailto:" + url;
    if (!url) {
      if (el.hasAttribute("data-masquer-si-vide")) { el.style.display = "none"; return; }
      el.setAttribute("href", "#");
      el.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Ce lien n'est pas encore configuré. Ouvre config.js pour l'ajouter.");
      });
      return;
    }
    el.setAttribute("href", url);
    if (/^https?:/.test(url)) { el.target = "_blank"; el.rel = "noopener"; }
  });

  // Garantie
  if (C.garantie === false) document.querySelectorAll("[data-garantie]").forEach(function (el) { el.remove(); });

  // Formulaire d'inscription intégré
  var zone = document.getElementById("formulaire-inscription");
  if (zone) {
    if (C.formulaireSystemeIo) {
      zone.innerHTML = "";
      var s = document.createElement("script");
      s.src = C.formulaireSystemeIo;
      s.id = "form-script-tag-pochelab";
      zone.appendChild(s);
    } else if (L.inscription) {
      zone.innerHTML = '<a class="btn btn-terre" href="' + L.inscription + '">Recevoir le mini-guide</a>';
    }
  }

  var an = document.getElementById("annee");
  if (an) an.textContent = new Date().getFullYear();
})();

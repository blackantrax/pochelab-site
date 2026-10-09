/* =====================================================================
   POCHELAB : LE SEUL FICHIER À MODIFIER
   Tous les liens, les prix et la date de fin du lancement sont ici.
   Après chaque modification : "Commit changes" sur GitHub, attendre
   1 à 2 minutes, puis rafraîchir le site.
   ===================================================================== */
window.POCHELAB = {

  // Date de fin du prix de lancement (format AAAA-MM-JJ).
  // Après cette date, le site affiche automatiquement les prix normaux.
  // Pense à changer AUSSI les prix dans Systeme.io et Chariow ce jour-là.
  finLancement: "2026-11-30",

  // Afficher la garantie 7 jours (true = oui, false = non)
  garantie: true,

  prix: {
    essentiel: { lancement: { cad: "19 $", fcfa: "6 900 FCFA" },  normal: { cad: "29 $", fcfa: "9 900 FCFA" } },
    complete:  { lancement: { cad: "39 $", fcfa: "12 900 FCFA" }, normal: { cad: "59 $", fcfa: "19 900 FCFA" } },
    pack:      { lancement: { cad: "19 $", fcfa: "6 000 FCFA" },  normal: { cad: "29 $", fcfa: "9 900 FCFA" } }
  },

  liens: {
    // Paiement par carte (Systeme.io) : colle l'adresse de chaque bon de commande
    essentielCarte: "",
    completeCarte:  "",
    packCarte:      "",
    // Paiement Mobile Money (Chariow) : colle l'adresse de chaque produit
    essentielMobile: "",
    completeMobile:  "",
    packMobile:      "",
    // Inscription au mini-guide : adresse de ta page de capture Systeme.io
    // (laisse vide pour utiliser le formulaire intégré ci-dessous)
    inscription: "",
    // Contact et réseaux (laisse vide ce que tu n'utilises pas)
    courriel:  "bonjour@pochelab.com",
    tiktok:    "https://www.tiktok.com/@pochelab",
    instagram: "https://www.instagram.com/pochelab",
    youtube:   "",
    facebook:  ""
  },

  // Formulaire Systeme.io intégré (optionnel) : dans Systeme.io, ouvre ta
  // page de capture, copie le code d'intégration du formulaire, et colle ici
  // uniquement l'adresse qui se trouve dans src="..." du code.
  formulaireSystemeIo: ""
};

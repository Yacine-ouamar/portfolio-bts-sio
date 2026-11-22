/* =========================================================
   👉 C'EST ICI QUE TU MODIFIES TON CONTENU.
   Pas besoin de toucher au HTML : tout le site se remplit
   à partir de ce fichier.
   ========================================================= */

const PROFIL = {
  prenom: "Yacine",
  nom: "Ouamar",
  titre: "Étudiant en BTS SIO option SISR · en alternance",
  accroche:
    "Étudiant en 2ᵉ année de BTS SIO option SISR en alternance chez Harmonie Mutuelle. J'administre, sécurise et fais évoluer des infrastructures systèmes et réseaux.",
  apropos: [
    "Je suis en 2ᵉ année de BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) à l'Ensitech de Montigny-le-Bretonneux, en alternance chez Harmonie Mutuelle à Châtillon.",
    "En formation, je travaille sur l'administration Windows Server, les réseaux Cisco, la virtualisation, la sécurisation des infrastructures et la gestion de parc.",
    "En entreprise, je gère les droits d'accès des utilisateurs, j'automatise des contrôles et je participe à la recette d'applications.",
    "Après mon BTS, je souhaite poursuivre en licence.",
  ],
  infos: [
    ["🎓", "BTS SIO SISR – Ensitech"],
    ["🏢", "Alternance – Harmonie Mutuelle"],
    ["📍", "Île-de-France"],
    ["🎯", "Objectif : poursuite en licence"],
  ],
  email: "ouamar.yaccine@gmail.com",
  linkedin: "https://www.linkedin.com/in/yacine-ouamar-98b60a228/",
  github: "https://github.com/Yacine-ouamar",
  cv: "", // ex : "docs/cv.pdf" quand tu auras mis ton CV dans le dossier docs
  tableauSynthese: "", // ex : "docs/tableau-de-synthese.pdf"
};

const FORMATION = [
  { date: "2025 – 2027", titre: "BTS SIO option SISR (en alternance)", lieu: "Ensitech, Montigny-le-Bretonneux", detail: "Services informatiques aux organisations – Solutions d'infrastructure, systèmes et réseaux." },
  { date: "2021", titre: "Baccalauréat", lieu: "", detail: "" },
];

const STAGES = [
  {
    date: "Depuis septembre 2025",
    titre: "Alternant – BTS SIO SISR",
    lieu: "Harmonie Mutuelle, Châtillon",
    detail: "Gestion des droits d'accès des utilisateurs, appels d'API, automatisation de contrôles en VBA sous Excel, recette d'une interface.",
  },
];

/* Les 6 compétences du bloc 1 « Support et mise à disposition de services informatiques » */
const BLOC1 = [
  { id: "C1", titre: "Gérer le patrimoine informatique", desc: "Recenser et identifier les ressources, vérifier les conditions de continuité, gérer les sauvegardes, respecter les licences." },
  { id: "C2", titre: "Répondre aux incidents et aux demandes d'assistance et d'évolution", desc: "Collecter, suivre et orienter les demandes, traiter les incidents, traiter les demandes d'évolution." },
  { id: "C3", titre: "Développer la présence en ligne de l'organisation", desc: "Participer à la valorisation de l'image de l'organisation sur les médias numériques, référencement, e-réputation." },
  { id: "C4", titre: "Travailler en mode projet", desc: "Analyser les objectifs et l'organisation d'un projet, planifier les activités, évaluer les indicateurs de suivi." },
  { id: "C5", titre: "Mettre à disposition des utilisateurs un service informatique", desc: "Réaliser les tests d'intégration et d'acceptation, déployer un service, accompagner les utilisateurs." },
  { id: "C6", titre: "Organiser son développement professionnel", desc: "Mettre en place son environnement d'apprentissage, mettre en œuvre des outils et stratégies de veille, gérer son identité professionnelle." },
];

const TECH = {
  "Systèmes": ["Windows Server", "Active Directory", "DNS / DHCP", "GPO"],
  "Réseaux & sécurité": ["Cisco IOS", "VLAN", "Routage", "Pare-feu", "ACL"],
  "Virtualisation & services": ["VMware", "Haute disponibilité", "Serveurs web"],
  "Outils & automatisation": ["GLPI", "OCS Inventory", "Excel / VBA", "API REST", "Git / GitHub"],
};

const CERTIFS = [
  // Exemple : { titre: "SecNumacadémie", org: "ANSSI", annee: "2026", url: "docs/certif-secnum.pdf" },
];

/* RÉALISATIONS PROFESSIONNELLES
   - contexte : "Formation" ou "Alternance"
   - competences : id du bloc 1 couverts (C1 à C6)
   - docs : fichiers à mettre dans le dossier /docs */
const REALISATIONS = [
  /* ---------- EN FORMATION (Ensitech) ---------- */
  {
    id: "glpi",
    titre: "Gestion de parc et support avec GLPI & OCS Inventory",
    contexte: "Formation",
    periode: "BTS SIO",
    resume: "Inventaire automatisé du parc informatique et gestion des demandes d'assistance par tickets.",
    tags: ["GLPI", "OCS Inventory", "Helpdesk", "Inventaire"],
    competences: ["C1", "C2", "C5"],
    details: {
      contexte: "Une organisation doit connaître précisément son parc informatique et suivre les demandes de ses utilisateurs.",
      objectifs: ["Inventorier automatiquement les postes et équipements", "Mettre en place un outil de suivi des incidents et des demandes"],
      etapes: [
        "Installation et configuration de GLPI",
        "Installation d'OCS Inventory et déploiement des agents sur les postes",
        "Remontée de l'inventaire d'OCS vers GLPI",
        "Paramétrage du helpdesk : catégories, priorités, attribution des tickets",
        "Tests : création et traitement de tickets",
      ],
      resultat: "Parc inventorié automatiquement et demandes d'assistance suivies dans GLPI.",
    },
    docs: [],
  },
  {
    id: "windows",
    titre: "Administration Windows Server",
    contexte: "Formation",
    periode: "BTS SIO",
    resume: "Mise en place et administration d'un domaine Active Directory avec ses services réseau.",
    tags: ["Windows Server", "Active Directory", "DNS", "DHCP", "GPO"],
    competences: ["C1", "C5"],
    details: {
      contexte: "Centraliser la gestion des utilisateurs, des postes et des ressources d'une organisation.",
      objectifs: ["Créer un domaine Active Directory", "Gérer les utilisateurs, groupes et droits", "Appliquer des stratégies de groupe"],
      etapes: [
        "Installation de Windows Server et promotion en contrôleur de domaine",
        "Configuration des services DNS et DHCP",
        "Création des unités d'organisation, des groupes et des utilisateurs",
        "Mise en place de GPO et de partages avec droits NTFS",
        "Intégration de postes clients au domaine et tests",
      ],
      resultat: "Domaine fonctionnel avec une gestion centralisée des comptes et des postes.",
    },
    docs: [],
  },
  {
    id: "cisco",
    titre: "Architecture réseau sous Cisco IOS",
    contexte: "Formation",
    periode: "BTS SIO",
    resume: "Conception et configuration d'un réseau segmenté sur équipements Cisco.",
    tags: ["Cisco IOS", "VLAN", "Trunk", "Routage"],
    competences: ["C1", "C4", "C5"],
    details: {
      contexte: "Concevoir un réseau d'entreprise segmenté, fiable et documenté.",
      objectifs: ["Établir un plan d'adressage", "Configurer commutateurs et routeurs", "Segmenter le réseau par VLAN"],
      etapes: [
        "Réalisation du schéma réseau et du plan d'adressage IP",
        "Configuration des VLAN et des liaisons trunk sur les commutateurs",
        "Configuration du routage inter-VLAN",
        "Tests de connectivité et sauvegarde des configurations",
      ],
      resultat: "Réseau segmenté opérationnel, schéma et configurations documentés.",
    },
    docs: [],
  },
  {
    id: "securite",
    titre: "Sécurisation et pare-feu",
    contexte: "Formation",
    periode: "BTS SIO",
    resume: "Filtrage des flux et sécurisation des accès au réseau de l'organisation.",
    tags: ["Pare-feu", "ACL", "Filtrage", "Sécurité"],
    competences: ["C1", "C5"],
    details: {
      contexte: "Protéger le réseau de l'organisation contre les accès non autorisés.",
      objectifs: ["Contrôler les flux entrants et sortants", "Cloisonner les zones du réseau"],
      etapes: [
        "Analyse des flux nécessaires entre les zones du réseau",
        "Mise en place du pare-feu et des règles de filtrage",
        "Configuration des ACL",
        "Tests des règles : flux autorisés et flux bloqués",
      ],
      resultat: "Seuls les flux autorisés circulent entre les différentes zones du réseau.",
    },
    docs: [],
  },
  {
    id: "ha",
    titre: "Haute disponibilité et services web",
    contexte: "Formation",
    periode: "BTS SIO",
    resume: "Mise en place de services web redondants pour garantir la continuité de service.",
    tags: ["Serveur web", "Redondance", "Haute disponibilité"],
    competences: ["C1", "C3", "C5"],
    details: {
      contexte: "Le site web de l'organisation doit rester accessible même en cas de panne d'un serveur.",
      objectifs: ["Héberger un service web", "Assurer la continuité du service en cas de panne"],
      etapes: [
        "Installation et configuration des serveurs web",
        "Mise en place de la redondance entre les serveurs",
        "Simulation de panne d'un serveur",
        "Vérification de la continuité du service",
      ],
      resultat: "Le service web reste disponible même lorsqu'un serveur tombe.",
    },
    docs: [],
  },
  {
    id: "virtu",
    titre: "Virtualisation d'infrastructures",
    contexte: "Formation",
    periode: "BTS SIO",
    resume: "Déploiement des serveurs de l'infrastructure sous forme de machines virtuelles avec VMware.",
    tags: ["VMware", "Machines virtuelles", "Réseaux virtuels"],
    competences: ["C1", "C5"],
    details: {
      contexte: "Optimiser l'utilisation des ressources matérielles et faciliter le déploiement de serveurs.",
      objectifs: ["Mettre en place un hyperviseur", "Créer et gérer des machines virtuelles"],
      etapes: [
        "Installation et configuration de l'hyperviseur VMware",
        "Création des réseaux virtuels",
        "Déploiement des machines virtuelles (serveurs et clients)",
        "Gestion des snapshots et des ressources allouées",
      ],
      resultat: "Infrastructure virtualisée servant de base aux autres projets.",
    },
    docs: [],
  },

  /* ---------- EN ALTERNANCE (Harmonie Mutuelle) ---------- */
  {
    id: "droits",
    titre: "Gestion des droits d'accès des utilisateurs",
    contexte: "Alternance",
    periode: "Depuis sept. 2025",
    resume: "Attribution et contrôle des habilitations des utilisateurs sur les applications de l'entreprise.",
    tags: ["Habilitations", "Gestion des accès", "Support"],
    competences: ["C1", "C2"],
    details: {
      contexte: "Chez Harmonie Mutuelle, chaque utilisateur doit disposer uniquement des droits nécessaires à son poste.",
      objectifs: ["Traiter les demandes d'accès", "Appliquer le principe du moindre privilège"],
      etapes: [
        "Réception et analyse des demandes d'accès",
        "Vérification de la légitimité de la demande",
        "Attribution des droits sur les applications concernées",
        "Vérification auprès de l'utilisateur et clôture de la demande",
      ],
      resultat: "Les utilisateurs disposent des accès adaptés à leur poste, de façon contrôlée.",
    },
    docs: [],
  },
  {
    id: "vba",
    titre: "Automatisation de contrôles avec VBA sous Excel",
    contexte: "Alternance",
    periode: "Depuis sept. 2025",
    resume: "Développement de macros VBA pour automatiser des contrôles réalisés auparavant à la main.",
    tags: ["Excel", "VBA", "Automatisation"],
    competences: ["C2", "C4", "C5"],
    details: {
      contexte: "Des contrôles réguliers étaient faits manuellement dans Excel, ce qui prenait du temps et pouvait entraîner des erreurs.",
      objectifs: ["Gagner du temps sur les contrôles", "Fiabiliser les résultats"],
      etapes: [
        "Analyse du besoin et des contrôles existants",
        "Développement des macros VBA",
        "Tests sur des données réelles",
        "Mise à disposition de l'outil et explications aux utilisateurs",
      ],
      resultat: "Contrôles automatisés : moins de temps passé et moins d'erreurs.",
    },
    docs: [],
  },
  {
    id: "api",
    titre: "Appels d'API",
    contexte: "Alternance",
    periode: "Depuis sept. 2025",
    resume: "Interrogation d'API pour récupérer et exploiter des données entre applications.",
    tags: ["API REST", "JSON"],
    competences: ["C2", "C5"],
    details: {
      contexte: "Certaines données devaient être récupérées depuis d'autres applications de l'entreprise.",
      objectifs: ["Interroger une API", "Exploiter les données retournées"],
      etapes: [
        "Lecture de la documentation de l'API",
        "Construction et envoi des requêtes",
        "Analyse des réponses (format JSON)",
        "Exploitation des données obtenues",
      ],
      resultat: "Données récupérées automatiquement depuis l'API.",
    },
    docs: [],
  },
  {
    id: "recette",
    titre: "Recette d'une interface",
    contexte: "Alternance",
    periode: "Depuis sept. 2025",
    resume: "Tests de validation d'une interface avant sa mise en production.",
    tags: ["Recette", "Tests", "Cahier de tests"],
    competences: ["C4", "C5"],
    details: {
      contexte: "Une nouvelle interface devait être validée avant d'être mise à disposition des utilisateurs.",
      objectifs: ["Vérifier que l'interface répond au besoin", "Détecter les anomalies avant la mise en production"],
      etapes: [
        "Prise de connaissance du besoin et des fonctionnalités attendues",
        "Déroulement des scénarios de test",
        "Signalement et suivi des anomalies",
        "Validation finale",
      ],
      resultat: "Interface validée et anomalies corrigées avant la mise en production.",
    },
    docs: [],
  },

  /* ---------- PORTFOLIO ---------- */
  {
    id: "portfolio",
    titre: "Création et mise en ligne de mon portfolio",
    contexte: "Formation",
    periode: "Nov. 2026",
    resume: "Conception de ce site, versionné sur GitHub et déployé automatiquement sur Vercel.",
    tags: ["HTML/CSS/JS", "Git", "GitHub", "Vercel"],
    competences: ["C3", "C6"],
    details: {
      contexte: "Valoriser mon parcours et mes compétences auprès du jury et des recruteurs.",
      objectifs: ["Présenter mes réalisations", "Gérer mon identité professionnelle en ligne"],
      etapes: ["Conception de la structure du site", "Développement HTML/CSS/JS", "Versionnement avec Git et GitHub", "Déploiement continu sur Vercel"],
      resultat: "Portfolio en ligne, mis à jour automatiquement à chaque push.",
    },
    docs: [],
  },
];

const VEILLE = {
  sujet: "À compléter",
  intro: "",
  outils: [],
  articles: [
    // { date: "Nov. 2026", titre: "Titre", source: "Source", url: "https://...", resume: "Ce que j'en retiens." },
  ],
};
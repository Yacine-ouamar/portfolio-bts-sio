/* =========================================================
   👉 C'EST ICI QUE TU MODIFIES TON CONTENU.
   Pas besoin de toucher au HTML : tout le site se remplit
   à partir de ce fichier. Remplace les textes entre "..."
   ========================================================= */

const PROFIL = {
  prenom: "Prénom",
  nom: "Nom",
  titre: "Étudiant en BTS SIO – option SISR",
  accroche:
    "Passionné par les infrastructures réseaux et la cybersécurité, je conçois, administre et sécurise des systèmes d'information.",
  apropos: [
    "Actuellement en 2ᵉ année de BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) au lycée XXXX à XXXX.",
    "Je m'intéresse particulièrement à l'administration Windows Server / Linux, à la virtualisation et à la sécurité des réseaux.",
    "Après mon BTS, je souhaite poursuivre en licence pro / Bachelor ASR / alternance en administration systèmes et réseaux.",
  ],
  infos: [
    ["📍", "Ville, France"],
    ["🎓", "BTS SIO SISR – Session 2027"],
    ["🔍", "Recherche : alternance / poursuite d'études"],
  ],
  email: "prenom.nom@email.com",
  linkedin: "https://www.linkedin.com/in/ton-profil",
  github: "https://github.com/ton-pseudo",
  cv: "docs/cv.pdf",
  tableauSynthese: "docs/tableau-de-synthese.pdf",
};

const FORMATION = [
  { date: "2025 – 2027", titre: "BTS SIO option SISR", lieu: "Lycée XXXX, Ville", detail: "Services informatiques aux organisations." },
  { date: "2025", titre: "Baccalauréat XXXX", lieu: "Lycée XXXX, Ville", detail: "Mention XXXX" },
];

const STAGES = [
  {
    date: "Mai – Juin 2026 (1ʳᵉ année)",
    titre: "Stagiaire technicien systèmes et réseaux",
    lieu: "Entreprise XXXX, Ville",
    detail: "Support utilisateurs, gestion du parc avec GLPI, déploiement de postes.",
  },
  {
    date: "Janv. – Fév. 2027 (2ᵉ année)",
    titre: "Stagiaire administrateur systèmes",
    lieu: "Entreprise XXXX, Ville",
    detail: "Mise en place d'une solution de sauvegarde et supervision du réseau.",
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
  "Systèmes": ["Windows Server 2022", "Active Directory", "GPO", "Debian / Ubuntu", "PowerShell", "Bash"],
  "Réseaux": ["Cisco IOS", "VLAN", "Routage inter-VLAN", "DHCP / DNS", "pfSense", "VPN"],
  "Virtualisation": ["Proxmox VE", "VMware", "VirtualBox", "Docker"],
  "Services & outils": ["GLPI", "Zabbix", "Apache / Nginx", "Veeam / sauvegardes", "Wireshark"],
};

const CERTIFS = [
  { titre: "SecNumacadémie", org: "ANSSI", annee: "2025", url: "docs/certif-secnum.pdf" },
  { titre: "MOOC RGPD", org: "CNIL", annee: "2025", url: "docs/certif-cnil.pdf" },
  { titre: "Certification PIX", org: "Pix", annee: "2026", url: "" },
];

/* RÉALISATIONS PROFESSIONNELLES
   - contexte : "Formation" ou "Stage"
   - competences : liste des id du bloc 1 couverts (C1 à C6)
   - docs : fichiers à mettre dans le dossier /docs (procédures, captures, PDF…) */
const REALISATIONS = [
  {
    id: "ad",
    titre: "Mise en place d'un domaine Active Directory",
    contexte: "Formation",
    periode: "Oct. 2025",
    resume: "Installation d'un contrôleur de domaine Windows Server avec DNS, DHCP, OU, utilisateurs et GPO.",
    tags: ["Windows Server", "AD DS", "DNS", "DHCP", "GPO"],
    competences: ["C1", "C5"],
    details: {
      contexte: "L'organisation fictive XXXX (contexte M2L / GSB…) souhaite centraliser la gestion de ses utilisateurs et postes.",
      objectifs: ["Installer et configurer le rôle AD DS", "Créer l'arborescence d'OU et les comptes", "Déployer des stratégies de groupe"],
      etapes: [
        "Installation de Windows Server 2022 sur une VM Proxmox",
        "Promotion en contrôleur de domaine (domaine xxxx.local)",
        "Configuration du DNS et d'une étendue DHCP",
        "Création des OU, groupes et utilisateurs (script PowerShell)",
        "GPO : fond d'écran, mappage de lecteurs, restrictions",
        "Intégration d'un poste client Windows 11 au domaine et tests",
      ],
      resultat: "Domaine fonctionnel, postes intégrés, stratégies appliquées et documentées.",
    },
    docs: [{ label: "Procédure (PDF)", url: "docs/procedure-ad.pdf" }],
  },
  {
    id: "vlan",
    titre: "Segmentation réseau avec VLAN et routage inter-VLAN",
    contexte: "Formation",
    periode: "Nov. 2025",
    resume: "Conception et configuration d'une architecture réseau segmentée sur matériel Cisco / Packet Tracer.",
    tags: ["Cisco", "VLAN", "Trunk", "Inter-VLAN"],
    competences: ["C1", "C4", "C5"],
    details: {
      contexte: "Séparer les flux des différents services de l'entreprise pour améliorer la sécurité et les performances.",
      objectifs: ["Créer un plan d'adressage", "Configurer les VLAN et trunks", "Mettre en place le routage inter-VLAN"],
      etapes: ["Réalisation du schéma réseau et du plan d'adressage", "Configuration des switchs (VLAN, ports access / trunk)", "Configuration du routeur (router-on-a-stick)", "Tests de connectivité et ACL"],
      resultat: "Réseau segmenté et opérationnel, schéma et configurations sauvegardés.",
    },
    docs: [{ label: "Schéma réseau", url: "docs/schema-vlan.pdf" }],
  },
  {
    id: "glpi",
    titre: "Déploiement de GLPI pour la gestion de parc",
    contexte: "Stage",
    periode: "Juin 2026",
    resume: "Installation de GLPI sur Debian, inventaire automatique des postes et gestion des tickets.",
    tags: ["Debian", "GLPI", "LAMP", "Agent GLPI"],
    competences: ["C1", "C2", "C5"],
    details: {
      contexte: "L'entreprise XXXX n'avait pas d'outil pour suivre son parc ni les demandes des utilisateurs.",
      objectifs: ["Inventorier automatiquement le parc", "Mettre en place un système de tickets"],
      etapes: ["Installation d'un serveur LAMP sur Debian 12", "Installation et sécurisation de GLPI", "Déploiement de l'agent GLPI sur les postes", "Paramétrage des catégories de tickets et formation des utilisateurs"],
      resultat: "XX postes inventoriés, tickets utilisés par l'équipe au quotidien.",
    },
    docs: [],
  },
  {
    id: "supervision",
    titre: "Supervision de l'infrastructure avec Zabbix",
    contexte: "Stage",
    periode: "Janv. 2027",
    resume: "Mise en place d'une supervision des serveurs et équipements réseau avec alertes par e-mail.",
    tags: ["Zabbix", "SNMP", "Linux", "Alertes"],
    competences: ["C1", "C2", "C4", "C5"],
    details: {
      contexte: "Les pannes étaient détectées tardivement, souvent signalées par les utilisateurs.",
      objectifs: ["Superviser les serveurs et équipements critiques", "Être alerté en cas d'incident"],
      etapes: ["Étude comparative Zabbix / Nagios / Centreon", "Installation du serveur Zabbix", "Ajout des hôtes (agent + SNMP)", "Configuration des déclencheurs et notifications"],
      resultat: "Tableau de bord opérationnel, temps de détection des incidents réduit.",
    },
    docs: [],
  },
  {
    id: "portfolio",
    titre: "Création et mise en ligne de mon portfolio",
    contexte: "Formation",
    periode: "Nov. 2026",
    resume: "Conception de ce site, versionné sur GitHub et déployé sur Vercel.",
    tags: ["HTML/CSS/JS", "Git", "GitHub", "Vercel"],
    competences: ["C3", "C6"],
    details: {
      contexte: "Valoriser mon parcours et mes compétences auprès du jury et des recruteurs.",
      objectifs: ["Présenter mes réalisations", "Gérer mon identité professionnelle en ligne"],
      etapes: ["Maquettage", "Développement HTML/CSS/JS", "Versionnement Git", "Déploiement continu sur Vercel"],
      resultat: "Portfolio accessible en ligne et mis à jour à chaque push.",
    },
    docs: [],
  },
];

const VEILLE = {
  sujet: "La cybersécurité face aux ransomwares",
  intro:
    "J'ai choisi de suivre l'évolution des attaques par rançongiciel et des moyens de s'en protéger, un enjeu majeur pour les organisations de toute taille.",
  outils: ["Flux RSS (Feedly)", "CERT-FR / ANSSI", "Google Alertes", "LinkedIn", "Newsletter Zataz / LeMagIT"],
  articles: [
    { date: "Oct. 2026", titre: "Titre de l'article 1", source: "CERT-FR", url: "#", resume: "Résumé en 2–3 lignes de ce que tu as retenu." },
    { date: "Sept. 2026", titre: "Titre de l'article 2", source: "LeMagIT", url: "#", resume: "Résumé en 2–3 lignes de ce que tu as retenu." },
  ],
};

// Tes projets. Pour en ajouter un, copie un bloc et adapte-le :
//   repo      nom du dépôt sur github.com/OkilSaber
//   name      nom affiché
//   featured  true = grande carte dans « Projets phares »
//   category  "desktop" | "mobile" | "tools"
//   accent    couleur du halo et des détails
//   icon      chemin de l'icône (assets/projects/<repo>/icon.png)
//   media     facultatif : { type: "video" | "image", src, poster }
//   download  facultatif : lien de la release à télécharger
//   stack     technologies affichées en pastilles
//   tagline / description / highlights : textes { fr, en }
export const projects = [
  {
    repo: "magisterium",
    name: "Magisterium",
    featured: true,
    category: "desktop",
    accent: "#a48bff",
    icon: "assets/projects/magisterium/icon.png",
    media: {
      type: "video",
      src: "assets/projects/magisterium/promo.mp4",
      poster: "assets/projects/magisterium/poster.jpg",
    },
    download: "https://github.com/OkilSaber/magisterium/releases/latest",
    stack: ["Rust", "Tauri 2", "React", "TypeScript"],
    tagline: {
      fr: "Un conseil d'IA qui débattent et rendent un verdict",
      en: "A council of AIs that debate and hand you one verdict",
    },
    description: {
      fr: "Pose une question : Claude, Gemini, tes modèles locaux et n'importe quelle API répondent en parallèle, se relisent entre eux sur plusieurs tours, puis l'un d'eux rédige la synthèse.",
      en: "Ask one question: Claude, Gemini, your local models and any API answer in parallel, review each other over several rounds, then one of them writes the synthesis.",
    },
    highlights: {
      fr: [
        "Claude Code et Antigravity en CLI, LM Studio, Ollama et 10 fournisseurs cloud",
        "Recherche web pour tous les modèles, avec SearXNG intégré",
        "Limites d'usage en direct, interface en 4 langues",
      ],
      en: [
        "Claude Code and Antigravity CLIs, LM Studio, Ollama and 10 cloud providers",
        "Web search for every model, with a built-in SearXNG",
        "Live usage limits, UI in 4 languages",
      ],
    },
  },
  {
    repo: "glass-stats",
    name: "Glass Stats",
    featured: true,
    category: "desktop",
    accent: "#7a93f5",
    icon: "assets/projects/glass-stats/icon.png",
    stack: ["Rust", "Tauri 2", "macOS"],
    tagline: {
      fr: "Moniteur système macOS en verre dépoli",
      en: "A macOS system monitor made of frosted glass",
    },
    description: {
      fr: "CPU, GPU, mémoire, réseau et températures en temps réel, dans une interface translucide posée sur le matériau natif de macOS, sans Node.js.",
      en: "Real-time CPU, GPU, memory, network and temperatures in a translucent UI over macOS's native vibrancy, with zero Node.js.",
    },
    highlights: {
      fr: [
        "Températures CPU et GPU lues via les capteurs HID et AppleSMC (M3/M4)",
        "Gestionnaire de processus avec débit réseau par application",
        "Courbes néon, reflets spéculaires et halos par métrique",
      ],
      en: [
        "CPU and GPU temperatures read from HID sensors and AppleSMC (M3/M4)",
        "Process manager with per-app network throughput",
        "Neon sparklines, specular reflections and per-metric glows",
      ],
    },
  },
  {
    repo: "litefin",
    name: "LiteFin",
    featured: true,
    category: "mobile",
    accent: "#00a4dc",
    icon: "assets/projects/litefin/icon.png",
    media: { type: "image", src: "assets/projects/litefin/shot.jpg" },
    stack: ["Kotlin", "Android TV", "Media3", "OkHttp"],
    tagline: {
      fr: "Un client Jellyfin léger pour Android TV",
      en: "A lightweight Jellyfin client for Android TV",
    },
    description: {
      fr: "Pensé pour les petites box qui rament : vues Android natives, APK d'environ 1,5 Mo, environ 40 Mo de RAM sur l'accueil, et l'option qui manquait au client officiel : toujours graver les sous-titres.",
      en: "Built for low-end TV boxes: native Android views, a ~1.5 MB APK, about 40 MB of RAM on the home screen, and the option the official client lacks: always burn in subtitles.",
    },
    highlights: {
      fr: [
        "Sous-titres gravés par le serveur, Intro Skipper, chapitres et aperçus trickplay",
        "Profils multiples, Connexion rapide, tri et filtres des bibliothèques",
        "Navigation au D-pad pensée de bout en bout, sans animation superflue",
      ],
      en: [
        "Server-side burned-in subtitles, Intro Skipper, chapters and trickplay previews",
        "Multiple profiles, Quick Connect, library sorting and filters",
        "D-pad navigation designed end to end, with no needless animation",
      ],
    },
  },
  {
    repo: "gt7-companion",
    name: "GT7 Companion",
    featured: true,
    category: "mobile",
    accent: "#e5383b",
    icon: "assets/projects/gt7-companion/icon.png",
    download: "https://github.com/OkilSaber/gt7-companion/releases/latest",
    stack: ["Flutter", "Dart"],
    tagline: {
      fr: "L'appli compagnon de Gran Turismo 7",
      en: "The companion app for Gran Turismo 7",
    },
    description: {
      fr: "Suis ta collection de voitures, les courses du jour et les arrivages chez les concessionnaires d'occasion et de légende, sur mobile comme sur desktop.",
      en: "Track your car collection, the daily races and what's in stock at the used and legend car dealerships, on mobile and desktop.",
    },
    highlights: {
      fr: [
        "Collection, courses du jour, voitures d'occasion et de légende",
        "Données à jour via API, stockage local de ta progression",
        "Une seule base Flutter : Android, iOS, web et desktop",
      ],
      en: [
        "Collection, daily races, used and legend cars",
        "Fresh data from an API, your progress stored locally",
        "One Flutter codebase: Android, iOS, web and desktop",
      ],
    },
  },
  {
    repo: "dark-souls-wiki",
    name: "Dark Souls Wiki",
    featured: true,
    category: "mobile",
    accent: "#f0a437",
    icon: "assets/projects/dark-souls-wiki/icon.png",
    download: "https://github.com/OkilSaber/dark-souls-wiki/releases/latest",
    stack: ["Flutter", "Dart", "Python"],
    tagline: {
      fr: "Tout le wiki de Dark Souls, hors ligne",
      en: "The whole Dark Souls wiki, offline",
    },
    description: {
      fr: "Une copie complète du wiki Fextralife dans l'APK : 1 696 pages et 1 887 images, rendues nativement, sans aucune connexion. Parfait pour jouer sans pub ni réseau.",
      en: "A complete copy of the Fextralife wiki inside the APK: 1,696 pages and 1,887 images rendered natively, with no network at all. No ads, no signal needed.",
    },
    highlights: {
      fr: [
        "Pipeline de scraping Python en 7 étapes, chacune mise en cache",
        "Recherche instantanée et classée sur toutes les pages",
        "Infobox, tableaux de stats et visionneuse d'images fidèles",
      ],
      en: [
        "7-stage Python scraping pipeline, each stage cached",
        "Instant ranked search across every page",
        "Faithful infoboxes, stat tables and image viewer",
      ],
    },
  },
  {
    repo: "dark-souls-3-wiki",
    name: "Dark Souls III Wiki",
    featured: true,
    category: "mobile",
    accent: "#e2703a",
    icon: "assets/projects/dark-souls-3-wiki/icon.png",
    download: "https://github.com/OkilSaber/dark-souls-3-wiki/releases/latest",
    stack: ["Flutter", "Dart", "Python"],
    tagline: {
      fr: "Le wiki de Dark Souls III, dans ta poche",
      en: "The Dark Souls III wiki, in your pocket",
    },
    description: {
      fr: "Le grand frère du précédent : 2 133 pages et 3 329 images hors ligne, extraites via l'API MediaWiki et organisées selon les vraies catégories du wiki.",
      en: "The big sibling: 2,133 pages and 3,329 images offline, pulled from the MediaWiki API and organised by the wiki's real categories.",
    },
    highlights: {
      fr: [
        "Les 2 526 chemins d'infusion d'armes résolus et intégrés",
        "10 sections et ~70 catégories tirées du wiki lui-même",
        "Même design system que Dark Souls Wiki",
      ],
      en: [
        "All 2,526 weapon infusion paths resolved and inlined",
        "10 sections and ~70 categories read from the wiki itself",
        "Same design system as Dark Souls Wiki",
      ],
    },
  },
  {
    repo: "maztree",
    name: "MazTree",
    category: "desktop",
    accent: "#c779f0",
    icon: "assets/projects/maztree/icon.png",
    stack: ["Rust", "Tauri 2", "React"],
    tagline: {
      fr: "Analyse de disque en treemap, façon WizTree",
      en: "Disk usage as a treemap, WizTree-style",
    },
  },
  {
    repo: "riak_explorer",
    name: "Riak Explorer",
    category: "tools",
    accent: "#f0643c",
    icon: "assets/projects/riak_explorer/icon.png",
    stack: ["Rust", "Tauri 2"],
    tagline: {
      fr: "Explorateur de clusters Riak KV, avec décodage des termes Erlang",
      en: "A Riak KV cluster browser that decodes Erlang terms",
    },
  },
  {
    repo: "task_reporter",
    name: "Task Reporter",
    category: "tools",
    accent: "#8b6cf5",
    icon: "assets/projects/task_reporter/icon.png",
    download: "https://github.com/OkilSaber/task_reporter/releases/latest",
    stack: ["Flutter", "Dart"],
    tagline: {
      fr: "Saisie des feuilles de temps Napta, en quelques curseurs",
      en: "Napta timesheets filled in with a few sliders",
    },
  },
  {
    repo: "xiaomi-router-network-usage",
    name: "Xiaomi Wi-Fi Dashboard",
    category: "tools",
    accent: "#ff7a1a",
    icon: "assets/projects/xiaomi-router-network-usage/icon.png",
    download: "https://github.com/OkilSaber/xiaomi-router-network-usage/releases/latest",
    stack: ["Python", "Chart.js"],
    tagline: {
      fr: "Débit en direct et appareils connectés à ton routeur Xiaomi",
      en: "Live bandwidth and connected devices on your Xiaomi router",
    },
  },
  {
    repo: "ftp_manager",
    name: "FTP Manager",
    category: "mobile",
    accent: "#f5c451",
    icon: "assets/projects/ftp_manager/icon.png",
    download: "https://github.com/OkilSaber/ftp_manager/releases/latest",
    stack: ["Flutter", "Dart"],
    tagline: {
      fr: "Client FTP avec aperçu des images et vidéos intégré",
      en: "An FTP client with built-in image and video preview",
    },
  },
];

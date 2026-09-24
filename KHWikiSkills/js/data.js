// ============================================================
//  KHWikiSkills - Base de données des compétences
//  Les champs "gif" sont des chemins vers assets/gifs/
//  (null = pas encore de GIF, à ajouter manuellement)
// ============================================================

const SKILL_TYPES = {
  COMBAT:    { id: "combat",    label: "Combat",     color: "#e05252", icon: "⚔️" },
  SUPPORT:   { id: "support",   label: "Support",    color: "#52a8e0", icon: "🛡️" },
  SPECIAL:   { id: "special",   label: "Spécial",    color: "#9b52e0", icon: "✨" },
  GROWTH:    { id: "growth",    label: "Croissance",  color: "#52e08a", icon: "📈" },
  SUMMON:    { id: "summon",    label: "Invocation",  color: "#e0c452", icon: "🌟" },
  MAGIC:     { id: "magic",     label: "Magie",       color: "#52d4e0", icon: "🔮" },
  SHARED:    { id: "shared",    label: "Partagée",    color: "#e08752", icon: "🤝" },
  DRIVE:     { id: "drive",     label: "Drive",       color: "#c0e052", icon: "🔥" },
  REACTION:  { id: "reaction",  label: "Réaction",    color: "#e05299", icon: "⚡" },
  SHOTLOCK:  { id: "shotlock",  label: "Tir verrouillé", color: "#52e0c4", icon: "🎯" },
  COMMAND:   { id: "command",   label: "Commande",    color: "#e09952", icon: "📜" },
  LINK:      { id: "link",      label: "Lien",        color: "#d4e052", icon: "🔗" },
  FORMCHANGE:{ id: "formchange",label: "Changement de forme", color: "#e052c4", icon: "🔄" },
};

const GAMES = [
  { id: "kh1",  label: "Kingdom Hearts",                    short: "KH1"  },
  { id: "com",  label: "Chain of Memories",                 short: "CoM"  },
  { id: "kh2",  label: "Kingdom Hearts II",                 short: "KH2"  },
  { id: "bbs",  label: "Birth by Sleep",                    short: "BBS"  },
  { id: "days", label: "358/2 Days",                        short: "Days" },
  { id: "kh3d", label: "Dream Drop Distance",               short: "3D"   },
  { id: "kh3",  label: "Kingdom Hearts III",                short: "KH3"  },
];

// ============================================================
//  FORMAT D'UNE COMPÉTENCE :
//  {
//    id:          string unique (snake_case)
//    name:        string (nom en français / nom du jeu)
//    nameAlt:     string? (nom alternatif / anglais)
//    game:        string (id du jeu)
//    type:        string (id du type dans SKILL_TYPES)
//    ap:          number? (coût en PA, null si sans coût)
//    description: string (description in-game)
//    notes:       string? (notes supplémentaires)
//    gif:         string? (chemin vers assets/gifs/XXX.gif, null = placeholder)
//  }
// ============================================================

const SKILLS = [

  // ──────────────────────────────────────────────────────────
  //  KINGDOM HEARTS 1
  // ──────────────────────────────────────────────────────────

  // Combat
  {
    id: "kh1_dodge_roll",
    name: "Roulade",
    nameAlt: "Dodge Roll",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Effectue une roulade pour esquiver les attaques ennemies. Permet d'éviter les projectiles et de franchir rapidement une courte distance.",
    notes: "Apprenez en équipant l'arme Bouclier au début du jeu, ou au niveau 9 (Épée/Bâton).",
    gif: null
  },
  {
    id: "kh1_guard",
    name: "Parade",
    nameAlt: "Guard",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Pare les attaques ennemies avec votre Keyblade. Appuyez sur ● au bon moment pour bloquer et contre-attaquer.",
    notes: "Essentielle contre les boss. Disponible au niveau 6 (Bouclier) ou 12 (Épée).",
    gif: null
  },
  {
    id: "kh1_counterattack",
    name: "Contre-attaque",
    nameAlt: "Counterattack",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Frappe automatiquement l'ennemi après une Parade réussie et restaure des PM.",
    notes: "Nécessite d'avoir Parade équipée.",
    gif: null
  },
  {
    id: "kh1_combo_plus",
    name: "Combo+",
    nameAlt: "Combo Plus",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Augmente de 1 le nombre de frappes dans un combo au sol.",
    notes: "Peut être équipée plusieurs fois pour allonger davantage.",
    gif: null
  },
  {
    id: "kh1_air_combo_plus",
    name: "Combo aérien+",
    nameAlt: "Air Combo Plus",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Augmente de 1 le nombre de frappes dans un combo aérien.",
    gif: null
  },
  {
    id: "kh1_slapshot",
    name: "Aquilon",
    nameAlt: "Slapshot",
    game: "kh1",
    type: "combat",
    ap: 1,
    description: "Remplace la frappe de fin de combo au sol par une attaque tourbillonnante qui propulse les ennemis en l'air.",
    gif: null
  },
  {
    id: "kh1_sliding_dash",
    name: "Rapprocheur",
    nameAlt: "Sliding Dash",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Fonce rapidement vers l'ennemi ciblé pour l'attaquer. Remplace la frappe finale du combo au sol.",
    gif: null
  },
  {
    id: "kh1_blitz",
    name: "Blitz",
    nameAlt: "Blitz",
    game: "kh1",
    type: "combat",
    ap: 4,
    description: "Remplace la frappe finale du combo au sol par une attaque tourbillonnante puissante qui touche plusieurs ennemis.",
    gif: null
  },
  {
    id: "kh1_aerial_sweep",
    name: "Balayage aérien",
    nameAlt: "Aerial Sweep",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Remplace la frappe finale du combo aérien par une attaque circulaire qui repousse les ennemis environnants.",
    gif: null
  },
  {
    id: "kh1_hurricane_blast",
    name: "Tourbillon",
    nameAlt: "Hurricane Blast",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Remplace la frappe finale du combo aérien par une série de rotations qui inflige des dégâts multiples.",
    gif: null
  },
  {
    id: "kh1_ripple_drive",
    name: "Flux",
    nameAlt: "Ripple Drive",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Remplace la frappe finale du combo au sol par une onde d'énergie qui touche tous les ennemis proches.",
    gif: null
  },
  {
    id: "kh1_round_break",
    name: "Frappe en rond",
    nameAlt: "Round Break",
    game: "kh1",
    type: "combat",
    ap: 4,
    description: "Remplace la frappe finale du combo aérien par une attaque circulaire puissante touchant tous les ennemis à portée.",
    gif: null
  },

  // Support
  {
    id: "kh1_scan",
    name: "Analyse",
    nameAlt: "Scan",
    game: "kh1",
    type: "support",
    ap: 1,
    description: "Permet de voir la jauge de PV des ennemis lors des combats.",
    gif: null
  },
  {
    id: "kh1_treasure_magnet",
    name: "Aimant",
    nameAlt: "Treasure Magnet",
    game: "kh1",
    type: "support",
    ap: 1,
    description: "Attire automatiquement les objets, les boules de PV et de PM à proximité.",
    gif: null
  },
  {
    id: "kh1_lucky_strike",
    name: "Fortune",
    nameAlt: "Lucky Strike",
    game: "kh1",
    type: "support",
    ap: 2,
    description: "Augmente le taux d'apparition des objets rares lorsque des ennemis sont vaincus.",
    gif: null
  },
  {
    id: "kh1_mp_rage",
    name: "Rage PM",
    nameAlt: "MP Rage",
    game: "kh1",
    type: "support",
    ap: 1,
    description: "Restaure des PM proportionnellement aux dégâts reçus.",
    gif: null
  },
  {
    id: "kh1_mp_haste",
    name: "Vélocité PM",
    nameAlt: "MP Haste",
    game: "kh1",
    type: "support",
    ap: 2,
    description: "Réduit la durée de la phase de récupération PM après avoir lancé des sorts.",
    gif: null
  },
  {
    id: "kh1_mp_hastera",
    name: "Vélocité PM+",
    nameAlt: "MP Hastera",
    game: "kh1",
    type: "support",
    ap: 4,
    description: "Réduit davantage la durée de la phase de récupération PM après avoir lancé des sorts.",
    gif: null
  },
  {
    id: "kh1_mp_hastega",
    name: "Vélocité PM++",
    nameAlt: "MP Hastega",
    game: "kh1",
    type: "support",
    ap: 6,
    description: "Réduit au maximum la durée de la phase de récupération PM après avoir lancé des sorts.",
    gif: null
  },
  {
    id: "kh1_leaf_bracer",
    name: "Garde-feuille",
    nameAlt: "Leaf Bracer",
    game: "kh1",
    type: "support",
    ap: 3,
    description: "Protège Sora des interruptions pendant qu'il lance le sort Soin/Soinga/Soingara.",
    gif: null
  },
  {
    id: "kh1_second_chance",
    name: "Ultime chance",
    nameAlt: "Second Chance",
    game: "kh1",
    type: "support",
    ap: 4,
    description: "Permet à Sora de survivre à tout coup fatal avec au minimum 1 PV, tant que sa santé est supérieure à 1 PV au moment de l'impact.",
    gif: null
  },
  {
    id: "kh1_berserk",
    name: "Berserk",
    nameAlt: "Berserk",
    game: "kh1",
    type: "support",
    ap: 4,
    description: "Augmente la puissance d'attaque lorsque les PM sont à zéro (phase de récupération active).",
    gif: null
  },
  {
    id: "kh1_explosion",
    name: "Explosion",
    nameAlt: "Explosion",
    game: "kh1",
    type: "support",
    ap: 4,
    description: "Augmente la puissance du dernier coup d'un combo en fonction de la jauge de PM actuelle.",
    gif: null
  },

  // Spéciales (nécessitent des PM)
  {
    id: "kh1_ars_arcanum",
    name: "Ars Arcanum",
    nameAlt: "Ars Arcanum",
    game: "kh1",
    type: "special",
    ap: 3,
    description: "Déclenche une série rapide de 9 coups puissants sur les ennemis proches. Consomme 2 PM.",
    notes: "Apprenez en vainquant Ansem au Navire Gitan.",
    gif: null
  },
  {
    id: "kh1_sonic_blade",
    name: "Lame sonique",
    nameAlt: "Sonic Blade",
    game: "kh1",
    type: "special",
    ap: 3,
    description: "Fonce 7 fois à grande vitesse sur l'ennemi ciblé. Consomme 2 PM.",
    notes: "Apprenez en vainquant Captain Hook.",
    gif: null
  },
  {
    id: "kh1_strike_raid",
    name: "Lancer tourbillon",
    nameAlt: "Strike Raid",
    game: "kh1",
    type: "special",
    ap: 3,
    description: "Lance le Keyblade 4 fois sur tous les ennemis à portée. Consomme 2 PM.",
    notes: "Apprenez en vainquant Jafar Génie.",
    gif: null
  },
  {
    id: "kh1_ragnarok",
    name: "Ragnarok",
    nameAlt: "Ragnarok",
    game: "kh1",
    type: "special",
    ap: 5,
    description: "Lance une pluie de projectiles lumineux sur tous les ennemis. Consomme 2 PM.",
    notes: "Apprenez en scellant le Trou de Ver de l'Atlantique.",
    gif: null
  },

  // Partagées
  {
    id: "kh1_high_jump",
    name: "Super saut",
    nameAlt: "High Jump",
    game: "kh1",
    type: "shared",
    ap: 0,
    description: "Permet d'effectuer un saut plus haut que la normale. Déblocable après l'arrivée au Château de la Bête.",
    gif: null
  },
  {
    id: "kh1_glide",
    name: "Planeur",
    nameAlt: "Glide",
    game: "kh1",
    type: "shared",
    ap: 0,
    description: "Permet de planer dans les airs en maintenant la touche de saut. Déblocable après l'arrivée au Creux de la Terre.",
    gif: null
  },
  {
    id: "kh1_superglide",
    name: "Super planeur",
    nameAlt: "Superglide",
    game: "kh1",
    type: "shared",
    ap: 0,
    description: "Version améliorée de Planeur offrant une plus grande vitesse de glissement.",
    gif: null
  },

  // ──────────────────────────────────────────────────────────
  //  KINGDOM HEARTS II
  // ──────────────────────────────────────────────────────────

  // Combat
  {
    id: "kh2_dodge_roll",
    name: "Roulade",
    nameAlt: "Dodge Roll",
    game: "kh2",
    type: "combat",
    ap: 1,
    description: "Effectue une roulade pour esquiver les attaques. Exclusif à la Forme Limite.",
    gif: null
  },
  {
    id: "kh2_guard",
    name: "Parade",
    nameAlt: "Guard",
    game: "kh2",
    type: "combat",
    ap: 2,
    description: "Permet de parer les attaques ennemies avec précision. Exclusif à la Forme Limite.",
    gif: null
  },
  {
    id: "kh2_combo_plus",
    name: "Combo+",
    nameAlt: "Combo Plus",
    game: "kh2",
    type: "combat",
    ap: 2,
    description: "Ajoute une frappe supplémentaire au combo au sol.",
    gif: null
  },
  {
    id: "kh2_air_combo_plus",
    name: "Combo aérien+",
    nameAlt: "Air Combo Plus",
    game: "kh2",
    type: "combat",
    ap: 2,
    description: "Ajoute une frappe supplémentaire au combo aérien.",
    gif: null
  },
  {
    id: "kh2_finishing_leap",
    name: "Bond final",
    nameAlt: "Finishing Leap",
    game: "kh2",
    type: "combat",
    ap: 2,
    description: "Remplace la frappe finale du combo au sol par un saut puissant propulsant les ennemis en l'air.",
    gif: null
  },
  {
    id: "kh2_magnet_burst",
    name: "Déflagration magnétique",
    nameAlt: "Magnet Burst",
    game: "kh2",
    type: "combat",
    ap: 3,
    description: "Remplace la frappe finale du combo au sol par une explosion magnétique attirant et blessant les ennemis proches.",
    gif: null
  },
  {
    id: "kh2_aerial_spiral",
    name: "Spirale aérienne",
    nameAlt: "Aerial Spiral",
    game: "kh2",
    type: "combat",
    ap: 2,
    description: "Remplace la frappe finale du combo aérien par une rotation en spirale dévastant les ennemis environnants.",
    gif: null
  },
  {
    id: "kh2_explosion",
    name: "Explosion",
    nameAlt: "Explosion",
    game: "kh2",
    type: "combat",
    ap: 3,
    description: "Remplace la frappe finale du combo aérien par une explosion d'énergie repoussant les ennemis.",
    gif: null
  },
  {
    id: "kh2_horizontal_slash",
    name: "Slash horizontal",
    nameAlt: "Horizontal Slash",
    game: "kh2",
    type: "combat",
    ap: 3,
    description: "Remplace la frappe finale du combo au sol par une large balayade horizontale.",
    gif: null
  },
  {
    id: "kh2_retaliating_slash",
    name: "Slash de représailles",
    nameAlt: "Retaliating Slash",
    game: "kh2",
    type: "combat",
    ap: 4,
    description: "Réplique automatiquement avec une attaque puissante après avoir subi un choc.",
    gif: null
  },
  {
    id: "kh2_vicinity_break",
    name: "Coup de zone",
    nameAlt: "Vicinity Break",
    game: "kh2",
    type: "combat",
    ap: 2,
    description: "Remplace la frappe finale du combo au sol par une attaque touchant tous les ennemis proches.",
    gif: null
  },
  {
    id: "kh2_flash_step",
    name: "Pas-éclair",
    nameAlt: "Flash Step",
    game: "kh2",
    type: "combat",
    ap: 3,
    description: "Fonce instantanément vers l'ennemi ciblé pour le frapper, remplace la frappe finale du combo au sol.",
    gif: null
  },
  {
    id: "kh2_upper_slash",
    name: "Slash ascendant",
    nameAlt: "Upper Slash",
    game: "kh2",
    type: "combat",
    ap: 2,
    description: "Remplace la frappe finale du combo au sol par une attaque projetant l'ennemi dans les airs.",
    gif: null
  },
  {
    id: "kh2_air_rush",
    name: "Ruée aérienne",
    nameAlt: "Air Rush",
    game: "kh2",
    type: "combat",
    ap: 3,
    description: "Dash rapide vers l'ennemi ciblé lors d'un combo aérien.",
    gif: null
  },
  {
    id: "kh2_aerial_finish",
    name: "Finition aérienne",
    nameAlt: "Aerial Finish",
    game: "kh2",
    type: "combat",
    ap: 3,
    description: "Remplace la frappe finale du combo aérien par un coup vertical dévastateur sur l'ennemi.",
    gif: null
  },

  // Support KH2
  {
    id: "kh2_scan",
    name: "Analyse",
    nameAlt: "Scan",
    game: "kh2",
    type: "support",
    ap: 1,
    description: "Affiche la jauge de PV des ennemis pendant les combats.",
    gif: null
  },
  {
    id: "kh2_second_chance",
    name: "Ultime chance",
    nameAlt: "Second Chance",
    game: "kh2",
    type: "support",
    ap: 4,
    description: "Survie garantie à 1 PV lors d'un coup fatal, tant que la santé était supérieure à 1 PV.",
    gif: null
  },
  {
    id: "kh2_once_more",
    name: "Encore une fois",
    nameAlt: "Once More",
    game: "kh2",
    type: "support",
    ap: 4,
    description: "Survie à 1 PV lors d'un enchaînement de coups consécutifs (sans interruption), tant que les PV étaient supérieurs à 1.",
    notes: "Fonctionne différemment de Ultime chance : s'applique aux combos ennemis.",
    gif: null
  },
  {
    id: "kh2_leaf_bracer",
    name: "Garde-feuille",
    nameAlt: "Leaf Bracer",
    game: "kh2",
    type: "support",
    ap: 3,
    description: "Soin, Soinga et Soingara ne peuvent pas être interrompus par les ennemis.",
    gif: null
  },
  {
    id: "kh2_lucky_lucky",
    name: "Bonne étoile",
    nameAlt: "Lucky Lucky",
    game: "kh2",
    type: "support",
    ap: 2,
    description: "Augmente le taux d'apparition des objets rares (anciennement Fortune dans KH1).",
    gif: null
  },
  {
    id: "kh2_mp_rage",
    name: "Rage PM",
    nameAlt: "MP Rage",
    game: "kh2",
    type: "support",
    ap: 2,
    description: "Restaure des PM proportionnellement aux dégâts reçus.",
    gif: null
  },
  {
    id: "kh2_mp_haste",
    name: "Vélocité PM",
    nameAlt: "MP Haste",
    game: "kh2",
    type: "support",
    ap: 3,
    description: "Réduit la durée de la phase de récupération PM.",
    gif: null
  },
  {
    id: "kh2_mp_hastera",
    name: "Vélocité PM+",
    nameAlt: "MP Hastera",
    game: "kh2",
    type: "support",
    ap: 5,
    description: "Réduit davantage la durée de la phase de récupération PM.",
    gif: null
  },
  {
    id: "kh2_mp_hastega",
    name: "Vélocité PM++",
    nameAlt: "MP Hastega",
    game: "kh2",
    type: "support",
    ap: 7,
    description: "Réduit au maximum la durée de la phase de récupération PM.",
    gif: null
  },
  {
    id: "kh2_damage_drive",
    name: "Drive blessure",
    nameAlt: "Damage Drive",
    game: "kh2",
    type: "support",
    ap: 3,
    description: "Restaure de la jauge Drive proportionnellement aux dégâts reçus.",
    gif: null
  },
  {
    id: "kh2_drive_converter",
    name: "Convertisseur Drive",
    nameAlt: "Drive Converter",
    game: "kh2",
    type: "support",
    ap: 3,
    description: "Les boules d'HP ramassées restaurent de la jauge Drive lorsqu'elle est vide.",
    gif: null
  },
  {
    id: "kh2_berserk_charge",
    name: "Charge berserk",
    nameAlt: "Berserk Charge",
    game: "kh2",
    type: "support",
    ap: 4,
    description: "Augmente la puissance d'attaque et permet de lancer des sorts avec les PM à zéro.",
    gif: null
  },

  // Croissance KH2
  {
    id: "kh2_high_jump",
    name: "Super saut",
    nameAlt: "High Jump",
    game: "kh2",
    type: "growth",
    ap: 3,
    description: "Permet d'effectuer un saut plus haut. Possède 4 niveaux (Lv1 à Lv4). Obtenu via la Forme Vaillance.",
    gif: null
  },
  {
    id: "kh2_quick_run",
    name: "Sprint",
    nameAlt: "Quick Run",
    game: "kh2",
    type: "growth",
    ap: 3,
    description: "Fonce rapidement dans la direction du joystick. Possède 4 niveaux. Obtenu via la Forme Vaillance.",
    gif: null
  },
  {
    id: "kh2_aerial_dodge",
    name: "Esquive aérienne",
    nameAlt: "Aerial Dodge",
    game: "kh2",
    type: "growth",
    ap: 3,
    description: "Effectue un bond rapide dans les airs pour esquiver. Possède 4 niveaux. Obtenu via la Forme Sagesse.",
    gif: null
  },
  {
    id: "kh2_glide",
    name: "Planeur",
    nameAlt: "Glide",
    game: "kh2",
    type: "growth",
    ap: 3,
    description: "Plane dans les airs en maintenant la touche de saut. Possède 4 niveaux. Obtenu via la Forme Finale.",
    gif: null
  },
  {
    id: "kh2_auto_valor",
    name: "Auto-Vaillance",
    nameAlt: "Auto Valor",
    game: "kh2",
    type: "drive",
    ap: 3,
    description: "Activate automatiquement la Forme Vaillance dans certaines situations de combat.",
    gif: null
  },
  {
    id: "kh2_auto_wisdom",
    name: "Auto-Sagesse",
    nameAlt: "Auto Wisdom",
    game: "kh2",
    type: "drive",
    ap: 3,
    description: "Active automatiquement la Forme Sagesse dans certaines situations de combat.",
    gif: null
  },
  {
    id: "kh2_auto_master",
    name: "Auto-Maître",
    nameAlt: "Auto Master",
    game: "kh2",
    type: "drive",
    ap: 3,
    description: "Active automatiquement la Forme Maître dans certaines situations de combat.",
    gif: null
  },
  {
    id: "kh2_auto_final",
    name: "Auto-Finale",
    nameAlt: "Auto Final",
    game: "kh2",
    type: "drive",
    ap: 3,
    description: "Possibilité d'activer aléatoirement la Forme Finale lors d'une transformation Drive.",
    gif: null
  },

  // ──────────────────────────────────────────────────────────
  //  BIRTH BY SLEEP
  // ──────────────────────────────────────────────────────────

  {
    id: "bbs_superslide",
    name: "Superglissade",
    nameAlt: "Superslide",
    game: "bbs",
    type: "combat",
    ap: 2,
    description: "Fonce rapidement vers l'ennemi ciblé tout en restant proche du sol.",
    gif: null
  },
  {
    id: "bbs_dodge_roll",
    name: "Roulade",
    nameAlt: "Dodge Roll",
    game: "bbs",
    type: "combat",
    ap: 1,
    description: "Effectue une roulade pour esquiver les attaques ennemies.",
    gif: null
  },
  {
    id: "bbs_cartwheel",
    name: "Galipette",
    nameAlt: "Cartwheel",
    game: "bbs",
    type: "combat",
    ap: 1,
    description: "Effectue une roue latérale pour éviter les attaques. Exclusif à Aqua.",
    gif: null
  },
  {
    id: "bbs_roll",
    name: "Rouleau",
    nameAlt: "Roll",
    game: "bbs",
    type: "combat",
    ap: 1,
    description: "Plonge en avant pour esquiver, en roulant sur soi-même. Exclusif à Terra.",
    gif: null
  },
  {
    id: "bbs_second_chance",
    name: "Ultime chance",
    nameAlt: "Second Chance",
    game: "bbs",
    type: "support",
    ap: 4,
    description: "Permet de survivre avec 1 PV à un coup fatal tant que les PV étaient supérieurs à 1.",
    gif: null
  },
  {
    id: "bbs_once_more",
    name: "Encore une fois",
    nameAlt: "Once More",
    game: "bbs",
    type: "support",
    ap: 4,
    description: "Survie à 1 PV lors d'un enchaînement de coups, tant que les PV étaient supérieurs à 1.",
    gif: null
  },
  {
    id: "bbs_scan",
    name: "Analyse",
    nameAlt: "Scan",
    game: "bbs",
    type: "support",
    ap: 1,
    description: "Affiche la jauge de PV des ennemis pendant le combat.",
    gif: null
  },
  {
    id: "bbs_combo_plus",
    name: "Combo+",
    nameAlt: "Combo Plus",
    game: "bbs",
    type: "support",
    ap: 2,
    description: "Ajoute une frappe au combo au sol.",
    gif: null
  },
  {
    id: "bbs_air_combo_plus",
    name: "Combo aérien+",
    nameAlt: "Air Combo Plus",
    game: "bbs",
    type: "support",
    ap: 2,
    description: "Ajoute une frappe au combo aérien.",
    gif: null
  },
  {
    id: "bbs_leaf_bracer",
    name: "Garde-feuille",
    nameAlt: "Leaf Bracer",
    game: "bbs",
    type: "support",
    ap: 3,
    description: "Protège de l'interruption lors du lancement de Soin/Soinga/Soingara.",
    gif: null
  },
  {
    id: "bbs_lucky_strike",
    name: "Fortune",
    nameAlt: "Lucky Strike",
    game: "bbs",
    type: "support",
    ap: 2,
    description: "Augmente le taux d'apparition des objets rares.",
    gif: null
  },
  {
    id: "bbs_hp_boost",
    name: "Boost PV",
    nameAlt: "HP Boost",
    game: "bbs",
    type: "support",
    ap: 0,
    description: "Augmente les PV maximum de 5.",
    gif: null
  },
  {
    id: "bbs_magic_boost",
    name: "Boost Magie",
    nameAlt: "Magic Boost",
    game: "bbs",
    type: "support",
    ap: 0,
    description: "Augmente la puissance magique de 1.",
    gif: null
  },
  {
    id: "bbs_str_boost",
    name: "Boost Force",
    nameAlt: "Strength Boost",
    game: "bbs",
    type: "support",
    ap: 0,
    description: "Augmente la Force de 1.",
    gif: null
  },
  {
    id: "bbs_def_boost",
    name: "Boost Défense",
    nameAlt: "Defense Boost",
    game: "bbs",
    type: "support",
    ap: 0,
    description: "Augmente la Défense de 1.",
    gif: null
  },
  // Command Styles BBS
  {
    id: "bbs_firestorm",
    name: "Tempête de feu",
    nameAlt: "Firestorm",
    game: "bbs",
    type: "command",
    ap: null,
    description: "Style de commande déclenché par les attaques de Feu. Transforme les coups en attaques de flammes tournoyantes. Finisher : éruption de feu dévastatrice.",
    notes: "Disponible pour Terra, Ventus et Aqua.",
    gif: null
  },
  {
    id: "bbs_blizzard_edge",
    name: "Tranchant de glace",
    nameAlt: "Blizzard Edge",
    game: "bbs",
    type: "command",
    ap: null,
    description: "Style de commande déclenché par les attaques de Glace. Inflige des dégâts de glace via des lances de cristal.",
    notes: "Disponible pour Terra, Ventus et Aqua.",
    gif: null
  },
  {
    id: "bbs_thunder_roll",
    name: "Rouleau de tonnerre",
    nameAlt: "Thunder Roll",
    game: "bbs",
    type: "command",
    ap: null,
    description: "Style de commande déclenché par les attaques de Foudre. Provoque des explosions électriques à chaque déplacement.",
    notes: "Disponible pour Terra, Ventus et Aqua.",
    gif: null
  },
  {
    id: "bbs_dark_haze",
    name: "Brume sombre",
    nameAlt: "Dark Haze",
    game: "bbs",
    type: "command",
    ap: null,
    description: "Style de commande exclusif à Terra, déclenché par les attaques des ténèbres. Ses coups génèrent des projectiles d'obscurité.",
    notes: "Exclusif à Terra.",
    gif: null
  },
  {
    id: "bbs_wingblade",
    name: "Aile-lame",
    nameAlt: "Wingblade",
    game: "bbs",
    type: "command",
    ap: null,
    description: "Style de commande exclusif à Ventus. Des ailes d'énergie surgissent et tranchent les ennemis.",
    notes: "Exclusif à Ventus.",
    gif: null
  },
  {
    id: "bbs_spellweaver",
    name: "Tisseuse de sorts",
    nameAlt: "Spellweaver",
    game: "bbs",
    type: "command",
    ap: null,
    description: "Style de commande exclusif à Aqua. Elle lévite et frappe avec des flammes magiques tourbillonnantes.",
    notes: "Exclusif à Aqua.",
    gif: null
  },

  // ──────────────────────────────────────────────────────────
  //  DREAM DROP DISTANCE (KH3D)
  // ──────────────────────────────────────────────────────────

  {
    id: "kh3d_second_chance",
    name: "Ultime chance",
    nameAlt: "Second Chance",
    game: "kh3d",
    type: "support",
    ap: 4,
    description: "Survie garantie à 1 PV lors d'un coup fatal tant que les PV étaient supérieurs à 1.",
    gif: null
  },
  {
    id: "kh3d_once_more",
    name: "Encore une fois",
    nameAlt: "Once More",
    game: "kh3d",
    type: "support",
    ap: 4,
    description: "Survie à 1 PV lors d'un enchaînement de coups, tant que les PV étaient supérieurs à 1.",
    gif: null
  },
  {
    id: "kh3d_scan",
    name: "Analyse",
    nameAlt: "Scan",
    game: "kh3d",
    type: "support",
    ap: 1,
    description: "Affiche la jauge de PV des ennemis.",
    gif: null
  },
  {
    id: "kh3d_combo_plus",
    name: "Combo+",
    nameAlt: "Combo Plus",
    game: "kh3d",
    type: "support",
    ap: 2,
    description: "Ajoute une frappe au combo au sol.",
    gif: null
  },
  {
    id: "kh3d_leaf_bracer",
    name: "Garde-feuille",
    nameAlt: "Leaf Bracer",
    game: "kh3d",
    type: "support",
    ap: 3,
    description: "Les sorts de Soin ne peuvent pas être interrompus.",
    gif: null
  },
  {
    id: "kh3d_flowmotion_boost",
    name: "Boost Fluxion",
    nameAlt: "Flowmotion Boost",
    game: "kh3d",
    type: "support",
    ap: 4,
    description: "Augmente la puissance des attaques Fluxion (Flowmotion).",
    gif: null
  },
  {
    id: "kh3d_reality_shift_up",
    name: "Amélio. Réalité-décalée",
    nameAlt: "Reality Shift Up",
    game: "kh3d",
    type: "support",
    ap: 2,
    description: "Augmente les dégâts infligés lors d'une Réalité-décalée.",
    gif: null
  },
  // Link KH3D (Spirit Links)
  {
    id: "kh3d_meow_wow_link",
    name: "Lien Meow Wow",
    nameAlt: "Meow Wow Link",
    game: "kh3d",
    type: "link",
    ap: null,
    description: "Invoque Meow Wow. La boule de fourrure roule sur les ennemis, puis Sora peut effectuer un plongeon aérien dévastateur.",
    gif: null
  },
  {
    id: "kh3d_komory_bat_link",
    name: "Lien Chauve-souris",
    nameAlt: "Komory Bat Link",
    game: "kh3d",
    type: "link",
    ap: null,
    description: "Invoque la Komory Bat. Sora et l'esprit attaquent ensemble avec des ondes soniques.",
    gif: null
  },

  // ──────────────────────────────────────────────────────────
  //  KINGDOM HEARTS III
  // ──────────────────────────────────────────────────────────

  {
    id: "kh3_second_chance",
    name: "Ultime chance",
    nameAlt: "Second Chance",
    game: "kh3",
    type: "support",
    ap: 4,
    description: "Survie garantie à 1 PV lors d'un coup fatal tant que les PV étaient supérieurs à 1.",
    gif: null
  },
  {
    id: "kh3_once_more",
    name: "Encore une fois",
    nameAlt: "Once More",
    game: "kh3",
    type: "support",
    ap: 4,
    description: "Survie à 1 PV lors d'un enchaînement de coups, tant que les PV étaient supérieurs à 1.",
    gif: null
  },
  {
    id: "kh3_scan",
    name: "Analyse",
    nameAlt: "Scan",
    game: "kh3",
    type: "support",
    ap: 1,
    description: "Affiche la jauge de PV des ennemis.",
    gif: null
  },
  {
    id: "kh3_leaf_bracer",
    name: "Garde-feuille",
    nameAlt: "Leaf Bracer",
    game: "kh3",
    type: "support",
    ap: 3,
    description: "Les sorts de Soin, Soinga et Soingara ne peuvent pas être interrompus.",
    gif: null
  },
  {
    id: "kh3_combo_plus",
    name: "Combo+",
    nameAlt: "Combo Plus",
    game: "kh3",
    type: "support",
    ap: 2,
    description: "Ajoute une frappe supplémentaire au combo au sol.",
    gif: null
  },
  {
    id: "kh3_air_combo_plus",
    name: "Combo aérien+",
    nameAlt: "Air Combo Plus",
    game: "kh3",
    type: "support",
    ap: 2,
    description: "Ajoute une frappe supplémentaire au combo aérien.",
    gif: null
  },
  {
    id: "kh3_lucky_strike",
    name: "Fortune",
    nameAlt: "Lucky Strike",
    game: "kh3",
    type: "support",
    ap: 2,
    description: "Augmente le taux d'apparition des objets rares.",
    gif: null
  },
  {
    id: "kh3_situation_boost",
    name: "Boost Situation",
    nameAlt: "Situation Boost",
    game: "kh3",
    type: "support",
    ap: 3,
    description: "Accélère la vitesse à laquelle la jauge de Commande de Situation se remplit.",
    gif: null
  },
  {
    id: "kh3_formchange_extender",
    name: "Prolongateur de forme",
    nameAlt: "Formchange Extender",
    game: "kh3",
    type: "support",
    ap: 3,
    description: "Allonge la durée d'activation des Changements de forme.",
    gif: null
  },
  // Changements de forme (Form Changes) KH3
  {
    id: "kh3_second_form",
    name: "Deuxième forme",
    nameAlt: "Second Form",
    game: "kh3",
    type: "formchange",
    ap: null,
    description: "Changement de forme déclenché avec le Keyblade Royaume d'Or. Sora combat avec deux Keyblades et des mouvements rapides inspirés de KH2.",
    gif: null
  },
  {
    id: "kh3_noble_form",
    name: "Forme noblesse",
    nameAlt: "Noble Form",
    game: "kh3",
    type: "formchange",
    ap: null,
    description: "Changement de forme du Keyblade Héritage d'Hercule. Sora combat avec des techniques puissantes et des combos élaborés.",
    gif: null
  },
  {
    id: "kh3_blizzard_claws",
    name: "Griffes de glace",
    nameAlt: "Blizzard Claws",
    game: "kh3",
    type: "formchange",
    ap: null,
    description: "Changement de forme du Keyblade Forêt de Cristal. Sora manie deux griffes de glace dans un combat rapide et perçant.",
    gif: null
  },
  {
    id: "kh3_blizzard_blade",
    name: "Lame de glace",
    nameAlt: "Blizzard Blade",
    game: "kh3",
    type: "formchange",
    ap: null,
    description: "Second changement de forme du Keyblade Forêt de Cristal. Sora utilise sa lame de glace pour des attaques de zone puissantes.",
    gif: null
  },
  {
    id: "kh3_hyper_hammer",
    name: "Super marteau",
    nameAlt: "Hyper Hammer",
    game: "kh3",
    type: "formchange",
    ap: null,
    description: "Changement de forme du Keyblade Griffe de feu. Sora manie un marteau géant infligeant des dégâts massifs en zone.",
    gif: null
  },
  {
    id: "kh3_drill_punch",
    name: "Perforation",
    nameAlt: "Drill Punch",
    game: "kh3",
    type: "formchange",
    ap: null,
    description: "Second changement de forme du Keyblade Griffe de feu. Sora attaque avec des coups de poing perforants enflammés.",
    gif: null
  },
  {
    id: "kh3_waterza",
    name: "Aqualaga",
    nameAlt: "Waterza",
    game: "kh3",
    type: "magic",
    ap: null,
    description: "Sort d'Eau de niveau 3. Génère un gigantesque vortex d'eau qui aspire les ennemis proches avant de les projeter.",
    gif: null
  },

];

// ============================================================
//  Fonctions utilitaires
// ============================================================

/**
 * Retourne toutes les compétences d'un jeu donné.
 * @param {string} gameId
 * @returns {Array}
 */
function getSkillsByGame(gameId) {
  return SKILLS.filter(s => s.game === gameId);
}

/**
 * Retourne un skill par son id.
 * @param {string} skillId
 * @returns {Object|undefined}
 */
function getSkillById(skillId) {
  return SKILLS.find(s => s.id === skillId);
}

/**
 * Retourne les infos d'un jeu par son id.
 * @param {string} gameId
 * @returns {Object|undefined}
 */
function getGameById(gameId) {
  return GAMES.find(g => g.id === gameId);
}

/**
 * Retourne les infos d'un type de compétence par son id.
 * @param {string} typeId
 * @returns {Object|undefined}
 */
function getSkillType(typeId) {
  return SKILL_TYPES[typeId.toUpperCase()] || SKILL_TYPES["SUPPORT"];
}

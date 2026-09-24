// ============================================================
//  KHWikiSkills - Base de données des compétences
//  Les champs "gif" sont des chemins vers assets/gifs/
//  (null = pas encore de GIF, à ajouter manuellement)
// ============================================================

const SKILL_TYPES = {
  COMBAT: { id: "combat", label: "Combat", color: "#e05252", icon: "⚔️" },
  SUPPORT: { id: "support", label: "Support", color: "#52a8e0", icon: "🛡️" },
  SPECIAL: { id: "special", label: "Spécial", color: "#9b52e0", icon: "✨" },
  GROWTH: { id: "growth", label: "Croissance", color: "#52e08a", icon: "📈" },
  SUMMON: { id: "summon", label: "Invocation", color: "#e0c452", icon: "🌟" },
  MAGIC: { id: "magic", label: "Magie", color: "#52d4e0", icon: "🔮" },
  SHARED: { id: "shared", label: "Partagée", color: "#e08752", icon: "🤝" },
  DRIVE: { id: "drive", label: "Drive", color: "#c0e052", icon: "🔥" },
  REACTION: { id: "reaction", label: "Réaction", color: "#e05299", icon: "⚡" },
  SHOTLOCK: { id: "shotlock", label: "Tir verrouillé", color: "#52e0c4", icon: "🎯" },
  COMMAND: { id: "command", label: "Commande", color: "#e09952", icon: "📜" },
  LINK: { id: "link", label: "Lien", color: "#d4e052", icon: "🔗" },
  FORMCHANGE: { id: "formchange", label: "Changement de forme", color: "#e052c4", icon: "🔄" },
};

const GAMES = [
  { id: "kh1", label: "Kingdom Hearts", short: "KH1" }
  //{ id: "com",  label: "Chain of Memories",                 short: "CoM"  },
  //{ id: "kh2",  label: "Kingdom Hearts II",                 short: "KH2"  },
  //{ id: "bbs",  label: "Birth by Sleep",                    short: "BBS"  },
  //{ id: "days", label: "358/2 Days",                        short: "Days" },
  //{ id: "kh3d", label: "Dream Drop Distance",               short: "3D"   },
  //{ id: "kh3",  label: "Kingdom Hearts III",                short: "KH3"  },
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

  // Compétences d'action
  {
    id: "kh1_roulade",
    name: "Roulade",
    nameAlt: "Dodge Roll",
    game: "kh1",
    type: "combat",
    ap: 1,
    description: "Sora exécute une roulade pour esquiver les attaques ennemies",
    notes: "Obtention : Vaincre l'Armure Gardienne dans la Ville de Traverse",
    gif: null
  },
  {
    id: "kh1_parade",
    name: "Parade",
    nameAlt: "Guard",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Sora pare une attaque ennemie avec sa Keyblade et la repousse",
    notes: "Obtention : Niv 24 (Épée) ; Niv 33 (Sceptre) ; Niv 15 (Bouclier)",
    gif: null
  },
  {
    id: "kh1_contre",
    name: "Contre",
    nameAlt: "Counterattack",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Appuyez sur Croix juste après une Parade pour contre-attaquer (restaure vos MP si réussite)",
    notes: "Obtention : Niv 15 (Épée) ; Niv 57 (Sceptre) ; Niv 45 (Bouclier)",
    gif: "kh1_contre.gif"
  },
  {
    id: "kh1_frappe_eclair",
    name: "Frappe éclair",
    nameAlt: "Slapshot",
    game: "kh1",
    type: "combat",
    ap: 1,
    description: "Un coup rapide en diagonale avec la Keyblade",
    notes: "Obtention : Niv 12 (Épée) ; Niv 69 (Sceptre) ; Niv 6 (Bouclier)",
    gif: "kh1_frappe_eclair.gif"
  },
  {
    id: "kh1_rapprocheur",
    name: "Rapprocheur",
    nameAlt: "Sliding Dash",
    game: "kh1",
    type: "combat",
    ap: 1,
    description: "Sora se rapproche rapidement de la cible et l'attaque",
    notes: "Obtention : Niv 6 (Épée) ; Niv 51 (Sceptre) ; Niv 39 (Bouclier)",
    gif: "kh1_rapprocheur.gif"
  },
  {
    id: "kh1_vortex",
    name: "Vortex",
    nameAlt: "Vortex",
    game: "kh1",
    type: "combat",
    ap: 1,
    description: "Sora fait une rotation et brandit sa Keyblade latéralement tout en se rapprochant de l'ennemi",
    notes: "Obtention : Niv 57 (Épée) ; Niv 84 (Sceptre) ; Niv 78 (Bouclier)",
    gif: null
  },
  {
    id: "kh1_cyclone",
    name: "Cyclone",
    nameAlt: "Blitz",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Sora saute en tournoyant pour frapper les ennemis",
    notes: "Obtention : Niv 60 (Épée) ; Niv 36 (Sceptre) ; Niv 84 (Bouclier)",
    gif: null
  },
  {
    id: "kh1_coup_de_grace",
    name: "Coup de Grâce",
    nameAlt: "Finish Plus",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Le coup final d'un enchaînement gagne en puissance mais perd en portée",
    notes: "Obtention : Niv 33 (Épée) ; Niv 78 (Sceptre) ; Niv 60 (Bouclier)",
    gif: "kh1_coup_de_grace.gif"
  },
  {
    id: "kh1_frappe_ouragan",
    name: "Frappe ouragan",
    nameAlt: "Hurricane Blast",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Sora tournoie sur lui-même verticalement avec la Keyblade à la fin d'un combo aérien",
    notes: "Obtention : Niv 27 (Épée) ; Niv 18 (Sceptre) ; Niv 51 (Bouclier)",
    gif: null
  },
  {
    id: "kh1_propagation",
    name: "Propagation",
    nameAlt: "Ripple Drive",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Assène un coup final de combo aux ennemis à proximité. Puissance de l'attaque en fonction des MP max",
    notes: "Obtention : Niv 39 (Épée) ; Niv 12 (Sceptre) ; Niv 69 (Bouclier)",
    gif: null
  },
  {
    id: "kh1_dome_dimpact",
    name: "Dôme d'impact",
    nameAlt: "Stun Impact",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Sora frappe le sol avec sa Keyblade, créant une petite sphère explosive autour de lui assommant les ennemis touchés",
    notes: "Obtention : Niv 51 (Épée) ; Niv 6 (Sceptre) ; Niv 18 (Bouclier)",
    gif: "kh1_dome_impact.gif"
  },
  {
    id: "kh1_break_gravite",
    name: "Break Gravité",
    nameAlt: "Gravity Break",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "La Keyblade invoque un petit puits de gravité",
    notes: "Obtention : Remporter la Coupe Hercule (temps limité)",
    gif: null
  },
  {
    id: "kh1_zantetsuken",
    name: "Zantetsuken",
    nameAlt: "Zantetsuken",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Sora tient la Keyblade vers l'arrière et frappe l'ennemi avec un coup rapide surpuissant",
    notes: "Obtention : Vaincre Kurt Ziza à Agrabah",
    gif: null
  },
  {
    id: "kh1_dingo_fusees",
    name: "Dingo-Fusées",
    nameAlt: "Goofy Rocket",
    game: "kh1",
    type: "combat",
    ap: 1,
    description: "Dingo exécute une attaque sautée contre les ennemis aériens tout en se protégeant avec son bouclier",
    notes: "Obtention : Niv 9 (Dingo)",
    gif: null
  },
  {
    id: "kh1_dingo_charge",
    name: "Dingo-Charge",
    nameAlt: "Goofy Charge",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Une attaque de courte portée avec le bouclier pouvant étourdir l'ennemi",
    notes: "Obtention : Niv 15 (Dingo)",
    gif: null
  },
  {
    id: "kh1_dingo_tornade",
    name: "Dingo-Tornade",
    nameAlt: "Goofy Tornado",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Dingo tourne sur lui-même avec son bouclier",
    notes: "Obtention : Niv 21 (Dingo)",
    gif: null
  },
  {
    id: "kh1_don_de_mp",
    name: "Don de MP",
    nameAlt: "MP Gift",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Redonne 3 MP à un personnage",
    notes: "Obtention : Niv 42 (Dingo)",
    gif: null
  },
  {
    id: "kh1_evolution",
    name: "Evolution",
    nameAlt: "Evolution",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Dingo utilise 3MP pour redonner 30HP à tous les personnages",
    notes: "Obtention : Niv 30 (Dingo)",
    gif: null
  },

  // Compétences d'action (personnages Disney)
  {
    id: "kh1_charge_du_gorille",
    name: "Charge du gorille",
    nameAlt: "Gorilla Charge",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Tarzan court et fait tourner sa lance pour attaquer (1 MP)",
    notes: "Personnage : Tarzan",
    gif: null
  },
  {
    id: "kh1_morsure_du_cobra",
    name: "Morsure du cobra",
    nameAlt: "Cobra Strike",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Un puissant coup étourdissant l'ennemi (1 MP)",
    notes: "Personnage : Tarzan",
    gif: null
  },
  {
    id: "kh1_mere_nature",
    name: "Mère nature",
    nameAlt: "Nature's Heal",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Restaure les HP (1 MP)",
    notes: "Personnage : Tarzan",
    gif: null
  },
  {
    id: "kh1_vent_protecteur",
    name: "Vent protecteur",
    nameAlt: "Wind Shield",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Dresse une barrière divisant les dégâts reçus de moitié (1 MP)",
    notes: "Personnage : Tarzan",
    gif: null
  },
  {
    id: "kh1_lune_croissante",
    name: "Lune croissante",
    nameAlt: "Crescent Moon",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Aladdin saute et attaque verticalement vers le haut (1 MP)",
    notes: "Personnage : Aladdin",
    gif: null
  },
  {
    id: "kh1_tempete_de_sabre",
    name: "Tempête de sabre",
    nameAlt: "Sandstorm",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Aladdin charge les ennemis en balayant l'air de son sabre (1 MP)",
    notes: "Personnage : Aladdin",
    gif: null
  },
  {
    id: "kh1_tourbillon_ariel",
    name: "Tourbillon",
    nameAlt: "Whirlpool",
    game: "kh1",
    type: "combat",
    ap: 1,
    description: "Ariel exécute une attaque tournoyante (1 MP)",
    notes: "Personnage : Ariel",
    gif: null
  },
  {
    id: "kh1_potion_foudre",
    name: "Potion Foudre",
    nameAlt: "Thunder Potion",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Similaire au sort Foudre (1 MP)",
    notes: "Personnage : Ariel",
    gif: null
  },
  {
    id: "kh1_potion_soin",
    name: "Potion Soin",
    nameAlt: "Cure Potion",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Similaire au sort Soin (1 MP)",
    notes: "Personnage : Ariel",
    gif: null
  },
  {
    id: "kh1_potion_rafale",
    name: "Potion Rafale",
    nameAlt: "Aero Potion",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Similaire au sort Rafale (2 MP)",
    notes: "Personnage : Ariel",
    gif: null
  },
  {
    id: "kh1_pose_triomphale",
    name: "Pose triomphale",
    nameAlt: "Applause!",
    game: "kh1",
    type: "combat",
    ap: 1,
    description: "Une attaque glissée (1 MP)",
    notes: "Personnage : Jack Skellington",
    gif: null
  },
  {
    id: "kh1_colere_ardente",
    name: "Colère ardente",
    nameAlt: "Blazing Fury",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Similaire au sort Brasier (1/2 jauge)",
    notes: "Personnage : Jack Skellington",
    gif: null
  },
  {
    id: "kh1_peur_glaciale",
    name: "Peur glaciale",
    nameAlt: "Icy Terror",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Similaire au sort Glacier (1/2 jauge)",
    notes: "Personnage : Jack Skellington",
    gif: null
  },
  {
    id: "kh1_peine_foudroyante",
    name: "Peine foudroyante",
    nameAlt: "Bolts of Grief",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Similaire au sort Foudre (1 MP)",
    notes: "Personnage : Jack Skellington",
    gif: null
  },
  {
    id: "kh1_pression_mentale",
    name: "Pression mentale",
    nameAlt: "Ghostly Scream",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Similaire au sort Gravité (1 MP)",
    notes: "Personnage : Jack Skellington",
    gif: null
  },
  {
    id: "kh1_dague_furieuse",
    name: "Dague furieuse",
    nameAlt: "Fierce Dagger",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Peter Pan exécute six attaques (1 MP)",
    notes: "Personnage : Peter Pan",
    gif: null
  },
  {
    id: "kh1_temps_mort",
    name: "Temps mort",
    nameAlt: "Time Out",
    game: "kh1",
    type: "combat",
    ap: 4,
    description: "Similaire au sort Stop (2 MP)",
    notes: "Personnage : Peter Pan",
    gif: null
  },
  {
    id: "kh1_manteau_de_vent",
    name: "Manteau de vent",
    nameAlt: "Wind Cloak",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "Similaire au sort Rafale (2 MP)",
    notes: "Personnage : Peter Pan",
    gif: null
  },
  {
    id: "kh1_bond_devastateur",
    name: "Bond dévastateur",
    nameAlt: "Ferocious Lunge",
    game: "kh1",
    type: "combat",
    ap: 2,
    description: "La Bête s'accroupit et attaque (1 MP)",
    notes: "Personnage : La Bête",
    gif: null
  },
  {
    id: "kh1_cri_de_colere",
    name: "Cri de colère",
    nameAlt: "Furious Roar",
    game: "kh1",
    type: "combat",
    ap: 3,
    description: "Un puissant rugissement qui étourdit les ennemis (1 MP)",
    notes: "Personnage : La Bête",
    gif: null
  },

  // Compétences de soutien
  {
    id: "kh1_combo",
    name: "Combo",
    nameAlt: "Combo Plus",
    game: "kh1",
    type: "support",
    ap: 1,
    description: "Ajoute un coup supplémentaire à un enchaînement au sol (peut être cumulée)",
    notes: "Obtention : Niv 21/66/93 (Épée) ; Niv 87/93/99 (Sceptre) ; Niv 63/87/96 (Bouclier) ; Compléter la Coupe Philoctète en Seul contre tous",
    gif: null
  },
  {
    id: "kh1_combo_aerien",
    name: "Combo Aérien",
    nameAlt: "Air Combo Plus",
    game: "kh1",
    type: "support",
    ap: 1,
    description: "Ajoute un coup supplémentaire à un enchaînement aérien (peut être cumulée)",
    notes: "Obtention : Niv 72/96 (Épée) ; Niv 24/45 (Sceptre) ; Niv 93/99 (Bouclier)",
    gif: null
  },
  {
    id: "kh1_maitre_des_combos",
    name: "Maître des combos",
    nameAlt: "Combo Master",
    game: "kh1",
    type: "support",
    ap: 3,
    description: "Le combo se poursuit même si l'un de vos coups n'a pas atteint sa cible.",
    notes: "Obtention : Niv 55 (Sora)",
    gif: null
  },
  {
    id: "kh1_coups_critiques",
    name: "Coups Critiques",
    nameAlt: "Critical Plus",
    game: "kh1",
    type: "support",
    ap: 3,
    description: "Augmente les chances d'exécuter un coup critique",
    notes: "Obtention : Niv 84/99 (Épée) ; Niv 96/100 (Sceptre) ; Niv 48/75 (Bouclier) ; Tarzan ; Aladdin, Peter Pan, la Bête",
    gif: null
  },
  {
    id: "kh1_scan",
    name: "Scan",
    nameAlt: "Scan",
    game: "kh1",
    type: "support",
    ap: 1,
    description: "Affiche à l'écran les HP de l'ennemi visé",
    notes: "Obtention : Niv 9 (Épée) ; Niv 15 (Sceptre) ; Niv 21 (Bouclier)",
    gif: "kh1_scan.gif"
  },
  {
    id: "kh1_attraction",
    name: "Attraction",
    nameAlt: "Treasure Magnet",
    game: "kh1",
    type: "support",
    ap: 2,
    description: "Attire vers le personnage les sphères de HP, de MP et les Munnies (peut être cumulée pour augmenter l'étendue)",
    notes: "Obtention : Niv 36/75 (Épée) ; Niv 9/72 (Sceptre) ; Niv 30/57 (Bouclier) ; Niv 24/39 (Donald) ; Niv 18/51 (Dingo) ; Aladdin ; Jack Skellington ; Peter Pan",
    gif: null
  },
  {
    id: "kh1_audace",
    name: "Audace",
    nameAlt: "Encounter Plus",
    game: "kh1",
    type: "support",
    ap: 1,
    description: "Augmente les chances de rencontrer des ennemis sur le terrain",
    notes: "Obtention : Offert par le Mog après avoir synthétisé 15 objets différents (Sora)",
    gif: null
  },
  {
    id: "kh1_concentration",
    name: "Concentration",
    nameAlt: "MP Haste",
    game: "kh1",
    type: "support",
    ap: 3,
    description: "Les attaques ennemies subies rechargent plus rapidement la jauge de MP",
    notes: "Obtention : Niv 45 (Épée) ; Niv 21 (Sceptre) ; Niv 72 (Bouclier) ; Niv 14 (Donald) ; Niv 48 (Dingo) ; Ariel ; Peter Pan",
    gif: null
  },
  {
    id: "kh1_vaillance",
    name: "Vaillance",
    nameAlt: "MP Rage",
    game: "kh1",
    type: "support",
    ap: 2,
    description: "La jauge de charge des MP augmente d'un nombre équivalent à la moitié des HP perdus",
    notes: "Obtention : Niv 63/87 (Épée) ; Niv 42/75 (Sceptre) ; Niv 90/100 (Bouclier) ; Niv 19/49 (Donald) ; Niv 39/57 (Dingo) ; Jack Skellington ; Ariel ; la Bête",
    gif: null
  },
  {
    id: "kh1_furie",
    name: "Furie",
    nameAlt: "Berserk",
    game: "kh1",
    type: "support",
    ap: 1,
    description: "Vos attaques gagnent en puissance lorsque la jauge de HP devient rouge",
    notes: "Obtention : Niv 78 (Épée) ; Niv 60 (Sceptre) ; Niv 9 (Bouclier) ; Niv 9 (Donald) ; Niv 45 (Dingo) ; Tarzan ; la Bête",
    gif: null
  },
  {
    id: "kh1_dernieres_forces",
    name: "Dernières Forces",
    nameAlt: "Second Chance",
    game: "kh1",
    type: "support",
    ap: 2,
    description: "Le personnage résiste au KO en conservant 1 HP peu importe la puissance de l'attaque",
    notes: "Obtention : Niv 48 (Épée) ; Niv 90 (Sceptre) ; Niv 36 (Bouclier) ; Niv 59 (Donald) ; Niv 36 (Dingo) ; Tarzan ; la Bête",
    gif: null
  },
  {
    id: "kh1_petale_garde",
    name: "Pétale garde",
    nameAlt: "Leaf Bracer",
    game: "kh1",
    type: "support",
    ap: 5,
    description: "Permet de lancer le sort Soin sur soi-même sans être interrompu même en cas d'attaque simultanée",
    notes: "Obtention : Niv 69 (Épée) ; Niv 39 (Sceptre) ; Niv 27 (Bouclier) ; Niv 34 (Donald)",
    gif: null
  },
  {
    id: "kh1_profusion",
    name: "Profusion",
    nameAlt: "Jackpot",
    game: "kh1",
    type: "support",
    ap: 2,
    description: "Le nombre de sphères de HP, de MP et de Munnies abandonnées par les ennemies augmente de moitié",
    notes: "Obtention : Niv 100 (Épée) ; Niv 63 (Sceptre) ; Niv 42 (Bouclier) ; Niv 54 (Donald) ; Niv 12 (Dingo) ; Aladdin ; Jack Skellington ; Peter Pan",
    gif: null
  },
  {
    id: "kh1_chance",
    name: "Chance",
    nameAlt: "Lucky Strike",
    game: "kh1",
    type: "support",
    ap: 3,
    description: "Augmente les chances que les ennemis abandonnent des objets (*)",
    notes: "Obtention : Niv 90 (Épée) ; Niv 48 (Sceptre) ; Niv 24 (Bouclier) ; Niv 44 (Donald) ; Niv 24 (Dingo) ; Aladdin ; Ariel ; Peter Pan",
    gif: null
  },
  {
    id: "kh1_boost_tech",
    name: "Boost Tech",
    nameAlt: "Tech Boost",
    game: "kh1",
    type: "support",
    ap: 2,
    description: "Augmente le nombre de points Bonus obtenus en parant une attaque, en renvoyant un projectile ou en touchant un point faible de l'ennemi",
    notes: "Obtention : Niv 12/81 (Épée) ; Niv 18/81 (Sceptre) ; Niv 27/81 (Bouclier) ; Remporter la Coupe Philoctète (temps limité) ; Sauver 90 Dalmatiens",
    gif: null
  },
  {
    id: "kh1_transe",
    name: "Transe",
    nameAlt: "Cheer",
    game: "kh1",
    type: "support",
    ap: 1,
    description: "Les MP Max de l'invocation augmente en fonction du nombre de Transes activées",
    notes: "Obtention : Score des mini-jeux dans la Forêt des Rêves Bleus (Sora) ; Vaincre Maléfique (Donald) ; Vaincre Parasitocage (Dingo) ; Aladdin ; Jack Skellington",
    gif: null
  },
  {
    id: "kh1_recuperation",
    name: "Récupération",
    nameAlt: "Second Wind",
    game: "kh1",
    type: "support",
    ap: 3,
    description: "Le délai pendant lequel le personnage est KO diminue de moitié et il récupère la moitié de ses HP au réveil",
    notes: "Obtention : Niv 29 (Donald) ; Niv 33 (Dingo) ; Tarzan ; Ariel ; la Bête",
    gif: null
  },
  {
    id: "kh1_zero_xp",
    name: "Zéro XP",
    nameAlt: "EXP Zero",
    game: "kh1",
    type: "support",
    ap: 0,
    description: "Vous empêche de gagner de l'EXP lorsque vous battez des ennemis",
    notes: "Obtention : Mode de difficulté Expert uniquement (Sora)",
    gif: null
  },

  // Attaques spéciales (Sora)
  {
    id: "kh1_aquilon",
    name: "Aquilon",
    nameAlt: "Sonic Blade",
    game: "kh1",
    type: "special",
    ap: 3,
    description: "Sora charge l'ennemi rapidement. Sélectionnez l'option Combo pour lancer une série d'attaques (2 MP)",
    notes: "Obtention : Parlez à Cloud après votre victoire contre Cerbère au Colisée de l'Olympe",
    gif: "kh1_aquilon.gif"
  },
  {
    id: "kh1_arcanes",
    name: "Arcanes",
    nameAlt: "Ars Arcanum",
    game: "kh1",
    type: "special",
    ap: 4,
    description: "Un puissant enchaînement de coups frontaux (3 MP)",
    notes: "Obtention : Vaincre le Capitaine Crochet au Pays Imaginaire",
    gif: "kh1_arcanes.gif"
  },
  {
    id: "kh1_diskobolos",
    name: "Diskobolos",
    nameAlt: "Strike Raid",
    game: "kh1",
    type: "special",
    ap: 3,
    description: "Sora lance sa Keyblade en avant, blessant tous les ennemis sur la trajectoire. Il est possible d'enchaîner plusieurs coups en appuyant sur la commande Combo lorsque Sora récupère son arme (2 MP)",
    notes: "Obtention : Remporter la Coupe Pégase au Colisée de l'Olympe",
    gif: "kh1_diskobolos.gif"
  },
  {
    id: "kh1_ragnarok",
    name: "Ragnarok",
    nameAlt: "Ragnarok",
    game: "kh1",
    type: "special",
    ap: 4,
    description: "Une attaque aérienne en cinq temps à la fin de laquelle Sora concentre de l'énergie dans sa Keyblade pour ensuite projeter 10 à 25 boules de feu (3 MP)",
    notes: "Obtention : Vaincre Riku dans le Grand Hall de la Forteresse Oubliée",
    gif: null
  },
  {
    id: "kh1_trinite",
    name: "Trinité",
    nameAlt: "Trinity Limit",
    game: "kh1",
    type: "special",
    ap: 1,
    description: "Une attaque dévastatrice utilisant toute la puissance de Sora, Donald et Dingo. Vos compagnons perdent tous leurs MP après l'attaque (3MP)",
    notes: "Obtention : Remporter la Coupe Hadès",
    gif: null
  },

  // Compétences de groupe
  {
    id: "kh1_super_saut",
    name: "Super Saut",
    nameAlt: "High Jump",
    game: "kh1",
    type: "shared",
    ap: 0,
    description: "Compétence de groupe",
    notes: "Obtention : Monstro : Coffre du bateau de Geppetto après avoir vaincu Parasitocage",
    gif: null
  },
  {
    id: "kh1_super_nage",
    name: "Super Nage",
    nameAlt: "Mermaid Kick",
    game: "kh1",
    type: "shared",
    ap: 0,
    description: "Compétence de groupe",
    notes: "Obtention : Atlantica : Vaincre Ursula (premier combat)",
    gif: null
  },
  {
    id: "kh1_vol_plane",
    name: "Vol Plané",
    nameAlt: "Glide",
    game: "kh1",
    type: "shared",
    ap: 0,
    description: "Compétence de groupe",
    notes: "Obtention : Pays Imaginaire : Sceller la Serrure du Pays Imaginaire",
    gif: null
  },
  {
    id: "kh1_super_vol_plane",
    name: "Super Vol Plané",
    nameAlt: "Superglide",
    game: "kh1",
    type: "shared",
    ap: 0,
    description: "Compétence de groupe",
    notes: "Obtention : Fin du Monde : Vaincre Chernabog",
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

# 🗝️ KHWikiSkills

Un outil web local pour suivre et consulter les **compétences des jeux Kingdom Hearts**.

Inspiré visuellement du menu de **Kingdom Hearts 1** (palette bleue profonde, accents dorés, séparateurs en diamants).

---

## ✨ Fonctionnalités

- **Système de révélation** : les compétences sont masquées par défaut. Tu dois saisir leur nom pour les "déverrouiller" et les afficher.
- **Sélection du jeu** : filtre par jeu (KH1, KH2, BBS, DDD, KH3…) pour être précis.
- **Autocomplétion** : suggestions intelligentes avec navigation au clavier (↑↓ + Entrée).
- **Organisation par jeu** : accordéon dépliable par titre.
- **Informations par compétence** :
  - 📝 Nom (FR + EN)
  - 📖 Description in-game
  - 🏷️ Type (Combat, Support, Spécial, Croissance, Invocation, Magie, Drive, Commande…)
  - 🎬 GIF illustratif (à ajouter manuellement dans `assets/gifs/`)
  - 💠 Coût en PA (Points d'Aptitude)
- **Filtres** : par type de compétence et par recherche textuelle.
- **Sauvegarde automatique** via `localStorage` — les compétences débloquées persistent entre sessions.
- **Design KH** : fond étoilé, panneaux translucides, boutons gradient bleu.

---

## 🚀 Utilisation

1. Ouvre `index.html` directement dans ton navigateur (aucun serveur requis).
2. Sélectionne un jeu dans la liste déroulante.
3. Tape le nom d'une compétence que tu possèdes dans le jeu.
4. Clique **Révéler** (ou appuie sur Entrée).

**Raccourcis clavier :**
- `Ctrl+K` → focus sur le champ de saisie
- `↑ / ↓` → navigation dans les suggestions
- `Entrée` → valider la sélection ou débloquer
- `Échap` → fermer les suggestions

---

## 📁 Structure du projet

```
KHWikiSkills/
├── index.html              # Page principale
├── css/
│   ├── style.css           # Styles KH (variables, layout, composants)
│   └── animations.css      # Animations CSS
├── js/
│   ├── data.js             # 📊 Base de données des compétences
│   └── app.js              # Logique (unlock, rendu, localStorage)
├── assets/
│   ├── gifs/               # 🎬 GIFs des compétences (à ajouter)
│   │   └── README.md
│   └── icons/              # Icônes optionnelles
└── README.md
```

---

## 🎬 Ajouter des GIFs

Les GIFs s'ajoutent dans `assets/gifs/` et sont référencés dans `js/data.js`.

**Convention de nommage :** `{game}_{id_competence}.gif`
Exemples : `kh1_dodge_roll.gif`, `kh2_quick_run.gif`

**Dans `data.js`**, change le champ `gif: null` en `gif: "kh1_dodge_roll.gif"` :

```js
{
  id: "kh1_dodge_roll",
  name: "Roulade",
  // ...
  gif: "kh1_dodge_roll.gif"  // ← ajouter le nom du fichier ici
}
```

---

## ➕ Ajouter une compétence

Dans `js/data.js`, ajoute un objet dans le tableau `SKILLS` :

```js
{
  id:          "kh2_ma_competence",   // Unique, snake_case
  name:        "Nom FR",
  nameAlt:     "Name EN",             // optionnel
  game:        "kh2",                 // kh1 | com | kh2 | bbs | days | kh3d | kh3
  type:        "support",             // voir SKILL_TYPES dans data.js
  ap:          2,                     // null si pas de coût
  description: "Description in-game.",
  notes:       "Note optionnelle.",   // optionnel
  gif:         null,                  // ou "nom_du_fichier.gif"
}
```

**Types disponibles :** `combat`, `support`, `special`, `growth`, `summon`, `magic`, `shared`, `drive`, `reaction`, `shotlock`, `command`, `link`, `formchange`

---

## 🎮 Jeux couverts

| ID    | Jeu                          | Compétences en BDD |
|-------|------------------------------|---------------------|
| `kh1` | Kingdom Hearts               | ~30                 |
| `com` | Chain of Memories            | —                   |
| `kh2` | Kingdom Hearts II            | ~30                 |
| `bbs` | Birth by Sleep               | ~20                 |
| `days`| 358/2 Days                   | —                   |
| `kh3d`| Dream Drop Distance          | ~10                 |
| `kh3` | Kingdom Hearts III           | ~15                 |

> La base de données est une base de départ. Complète-la au fur et à mesure !

---

## 🔧 Technique

- **Aucune dépendance** : HTML + CSS + JS vanilla, 0 framework.
- **Aucun serveur requis** : ouverture directe en `file://`.
- **Stockage** : `localStorage` sous la clé `khwikiskills_unlocked`.
- **Compatibilité** : navigateurs modernes (Chrome, Firefox, Edge, Safari).

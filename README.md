# 🗝️ KHWikiSkills

Un outil web local pour suivre et consulter les **compétences des jeux Kingdom Hearts**.

---

## Fonctionnalités

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

## Utilisation

1. Ouvre https://zbrozen.github.io/KH-Wiki-Skills/ pour accéder au projet.
2. Sélectionne un jeu dans la liste déroulante.
3. Tape le nom d'une compétence que tu possèdes dans le jeu.
4. Clique sur **Révéler** (ou appuie sur Entrée).

**Raccourcis clavier :**
- `Ctrl+K` → focus sur le champ de saisie
- `↑ / ↓` → navigation dans les suggestions
- `Entrée` → valider la sélection ou débloquer
- `Échap` → fermer les suggestions

---

## 🎮 Jeux couverts

| ID    | Jeu                          | Compétences en BDD |
|-------|------------------------------|---------------------|
| `kh1` | Kingdom Hearts               | 65 (complète) |


> La base de données est une base de départ. Complète-la au fur et à mesure !

---

# En espérant que cet outil vous sera utile !
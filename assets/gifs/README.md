# 🎬 Dossier des GIFs

Place ici les GIFs illustrant les compétences.

## Convention de nommage

```
{game}_{id_competence}.gif
```

**Exemples :**
- `kh1_dodge_roll.gif`
- `kh1_ars_arcanum.gif`
- `kh2_quick_run.gif`
- `bbs_spellweaver.gif`

## Référencer un GIF dans data.js

Après avoir ajouté le fichier ici, ouvre `js/data.js` et modifie le champ `gif` de la compétence correspondante :

```js
// Avant :
gif: null

// Après :
gif: "kh1_dodge_roll.gif"
```

## Format recommandé

- **Format** : `.gif` (animé) ou `.webp` (animé, plus léger)
- **Dimensions** : 74×60px minimum, idéalement 148×120px (2x pour les écrans Retina)
- **Durée** : 2–5 secondes, en boucle
- **Poids** : < 500 Ko par GIF recommandé

## Sources suggérées

- [Kingdom Hearts Wiki](https://www.khwiki.com) — certaines pages de compétences ont des GIFs
- [YouTube](https://youtube.com) → captures d'écran via des outils comme [ScreenToGif](https://www.screentogif.com/)
- Gameplay personnel capturé avec [OBS](https://obsproject.com/) + conversion GIF

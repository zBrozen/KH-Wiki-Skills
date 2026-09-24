// ============================================================
//  KHWikiSkills — Logique principale
//  Gestion du localStorage, de l'unlock, et du rendu
// ============================================================

/* ── Constantes ─────────────────────────────────────────────── */
const STORAGE_KEY = "khwikiskills_unlocked";

/* ── État de l'application ──────────────────────────────────── */
const App = {
  /** @type {Set<string>} IDs des compétences débloquées */
  unlockedSkills: new Set(),

  /** @type {string} Filtre actif par type */
  activeTypeFilter: "all",

  /** @type {string} Recherche active dans la liste */
  searchQuery: "",

  /** @type {Object<string, boolean>} État ouvert/fermé des groupes de jeux */
  openGroups: {},
};

/* ── Persistence localStorage ───────────────────────────────── */
function loadUnlocked() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      App.unlockedSkills = new Set(Array.isArray(arr) ? arr : []);
    }
  } catch (e) {
    console.warn("KHWikiSkills: Impossible de charger les données :", e);
    App.unlockedSkills = new Set();
  }
}

function saveUnlocked() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...App.unlockedSkills]));
  } catch (e) {
    console.warn("KHWikiSkills: Impossible de sauvegarder les données :", e);
  }
}

/* ── Normalisation du texte pour la comparaison ─────────────── */
function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // supprime les accents
    .replace(/['']/g, "'")           // normalise les apostrophes
    .trim();
}

/**
 * Trouve une compétence correspondant à une saisie et un jeu.
 * Accepte le nom FR, le nom anglais (nameAlt), et les variantes sans accents.
 */
function findSkillMatch(inputText, gameId) {
  const normInput = normalize(inputText);
  if (!normInput) return null;

  // Pool de compétences : si gameId est spécifié, on filtre
  const pool = gameId ? SKILLS.filter(s => s.game === gameId) : SKILLS;

  return pool.find(skill => {
    if (normalize(skill.name) === normInput) return true;
    if (skill.nameAlt && normalize(skill.nameAlt) === normInput) return true;
    return false;
  }) || null;
}

/**
 * Retourne les suggestions d'autocomplétion.
 */
function getSuggestions(inputText, gameId) {
  const normInput = normalize(inputText);
  if (normInput.length < 2) return [];

  const pool = gameId ? SKILLS.filter(s => s.game === gameId) : SKILLS;

  return pool.filter(skill => {
    const matchName = normalize(skill.name).includes(normInput);
    const matchAlt  = skill.nameAlt ? normalize(skill.nameAlt).includes(normInput) : false;
    return matchName || matchAlt;
  }).slice(0, 8);
}

/* ── Rendu ──────────────────────────────────────────────────── */

/**
 * Retourne la couleur CSS pour un type de compétence.
 */
function getTypeColor(typeId) {
  const map = {
    combat:     "var(--type-combat)",
    support:    "var(--type-support)",
    special:    "var(--type-special)",
    growth:     "var(--type-growth)",
    summon:     "var(--type-summon)",
    magic:      "var(--type-magic)",
    shared:     "var(--type-shared)",
    drive:      "var(--type-drive)",
    reaction:   "var(--type-reaction)",
    shotlock:   "var(--type-shotlock)",
    command:    "var(--type-command)",
    link:       "var(--type-link)",
    formchange: "var(--type-formchange)",
  };
  return map[typeId] || "var(--type-support)";
}

/**
 * Génère le HTML d'une ligne de compétence.
 * @param {Object} skill
 * @param {boolean} isNew - si vrai, ajoute la classe d'animation "newly-revealed"
 */
function renderSkillRow(skill, isNew = false) {
  const typeInfo = getSkillType(skill.type);
  const typeColor = getTypeColor(skill.type);

  const mediaHTML = skill.gif
    ? `<img class="skill-media-img" src="assets/gifs/${skill.gif}" alt="${skill.name}" loading="lazy">`
    : `<div class="skill-media-placeholder" title="GIF à ajouter">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
           <rect x="3" y="3" width="18" height="18" rx="2"/>
           <circle cx="8.5" cy="8.5" r="1.5"/>
           <polyline points="21 15 16 10 5 21"/>
         </svg>
         <span>GIF</span>
       </div>`;

  const apHTML = skill.ap !== null && skill.ap !== undefined
    ? `<span class="skill-ap">♦ ${skill.ap === 0 ? "Gratuit" : skill.ap + " PA"}</span>`
    : "";

  const notesHTML = skill.notes
    ? `<span class="skill-notes">ℹ ${skill.notes}</span>`
    : "";

  return `
    <div class="skill-row${isNew ? " newly-revealed" : ""}" data-skill-id="${skill.id}" data-type="${skill.type}">
      <div class="skill-col-name">
        <span class="skill-name">${escapeHtml(skill.name)}</span>
        ${skill.nameAlt ? `<span class="skill-name-alt">${escapeHtml(skill.nameAlt)}</span>` : ""}
        ${apHTML}
      </div>
      <div class="skill-col-desc">
        <span class="skill-description">${escapeHtml(skill.description)}</span>
        ${notesHTML}
      </div>
      <div class="skill-col-type">
        <span class="skill-type-badge" style="color:${typeColor}; border-color:${typeColor}; background:${typeColor}22;">
          ${typeInfo.icon} ${typeInfo.label}
        </span>
      </div>
      <div class="skill-col-media">
        ${mediaHTML}
      </div>
    </div>`;
}

/**
 * Génère le HTML d'un groupe de jeu (accordéon).
 */
function renderGameGroup(game, skills, newlyRevealedId = null) {
  const isOpen = App.openGroups[game.id] !== false; // ouvert par défaut
  const gameEmojis = {
    kh1:  "🗝️",
    com:  "🃏",
    kh2:  "👑",
    bbs:  "🌌",
    days: "🎂",
    kh3d: "🌙",
    kh3:  "🔑",
  };

  const skillsHtml = skills
    .map(s => renderSkillRow(s, s.id === newlyRevealedId))
    .join("");

  return `
    <div class="game-group${isOpen ? " open" : ""}" data-game-id="${game.id}">
      <div class="game-group-header" role="button" tabindex="0" aria-expanded="${isOpen}">
        <span class="game-group-icon">${gameEmojis[game.id] || "🎮"}</span>
        <span class="game-group-name">${escapeHtml(game.label)}</span>
        <span class="game-group-badge">${skills.length} compétence${skills.length > 1 ? "s" : ""}</span>
        <span class="game-group-toggle">▼</span>
      </div>
      <div class="game-group-content">
        ${skillsHtml}
      </div>
    </div>`;
}

/**
 * Filtre les compétences selon les filtres actifs.
 */
function filterSkills(skills) {
  return skills.filter(skill => {
    // Filtre par type
    if (App.activeTypeFilter !== "all" && skill.type !== App.activeTypeFilter) return false;
    // Filtre par recherche
    if (App.searchQuery) {
      const q = normalize(App.searchQuery);
      const matchName = normalize(skill.name).includes(q);
      const matchAlt  = skill.nameAlt ? normalize(skill.nameAlt).includes(q) : false;
      const matchDesc = normalize(skill.description).includes(q);
      if (!matchName && !matchAlt && !matchDesc) return false;
    }
    return true;
  });
}

/**
 * Met à jour le rendu de la liste des compétences.
 */
function renderSkillsList(newlyRevealedId = null) {
  const container = document.getElementById("skillsContainer");
  const countBadge = document.getElementById("skillsCount");

  if (App.unlockedSkills.size === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🗝️</div>
        <p>Aucune compétence débloquée.<br>
        Saisissez le <strong>nom d'une compétence</strong> et sélectionnez le <strong>jeu correspondant</strong> pour la révéler.</p>
      </div>`;
    countBadge.textContent = "0 débloquée";
    return;
  }

  // Récupérer les skills débloqués et filtrer
  const unlockedSkillObjects = SKILLS.filter(s => App.unlockedSkills.has(s.id));
  const filteredSkills = filterSkills(unlockedSkillObjects);

  countBadge.textContent = `${App.unlockedSkills.size} débloquée${App.unlockedSkills.size > 1 ? "s" : ""}`;

  if (filteredSkills.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>Aucune compétence ne correspond aux filtres actifs.</p>
      </div>`;
    return;
  }

  // Grouper par jeu, dans l'ordre défini par GAMES
  let html = "";

  GAMES.forEach(game => {
    const gameSkills = filteredSkills.filter(s => s.game === game.id);
    if (gameSkills.length === 0) return;
    html += renderGameGroup(game, gameSkills, newlyRevealedId);
  });

  container.innerHTML = html;

  // Réattacher les listeners sur les headers
  attachGroupListeners();
}

/**
 * Attache les listeners click/keydown aux headers d'accordéon.
 */
function attachGroupListeners() {
  document.querySelectorAll(".game-group-header").forEach(header => {
    header.addEventListener("click", () => toggleGroup(header.closest(".game-group")));
    header.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleGroup(header.closest(".game-group"));
      }
    });
  });
}

function toggleGroup(groupEl) {
  const gameId = groupEl.dataset.gameId;
  const isOpen = groupEl.classList.contains("open");
  groupEl.classList.toggle("open", !isOpen);
  App.openGroups[gameId] = !isOpen;
  groupEl.querySelector(".game-group-header").setAttribute("aria-expanded", String(!isOpen));
}

/* ── Système d'unlock ───────────────────────────────────────── */

/**
 * Tente de débloquer une compétence.
 * Retourne { success, skill, alreadyUnlocked, message }
 */
function tryUnlock(inputText, gameId) {
  const match = findSkillMatch(inputText, gameId || null);

  if (!match) {
    return {
      success: false,
      skill: null,
      message: gameId
        ? `Aucune compétence nommée "${inputText}" trouvée dans ${getGameById(gameId)?.label || gameId}.`
        : `Aucune compétence nommée "${inputText}" trouvée.`,
    };
  }

  if (App.unlockedSkills.has(match.id)) {
    return {
      success: false,
      skill: match,
      alreadyUnlocked: true,
      message: `"${match.name}" est déjà débloquée !`,
    };
  }

  App.unlockedSkills.add(match.id);
  saveUnlocked();

  // Ouvrir automatiquement le groupe du jeu
  App.openGroups[match.game] = true;

  return {
    success: true,
    skill: match,
    message: `✦ "${match.name}" débloquée !`,
  };
}

/* ── Suggestions d'autocomplétion ───────────────────────────── */

let currentSuggestions = [];
let activeSuggestionIndex = -1;

function updateSuggestions(inputEl, gameId) {
  const val = inputEl.value;
  const suggestionsEl = document.getElementById("suggestions");

  currentSuggestions = getSuggestions(val, gameId);
  activeSuggestionIndex = -1;

  if (currentSuggestions.length === 0 || !val) {
    suggestionsEl.innerHTML = "";
    suggestionsEl.classList.add("hidden");
    return;
  }

  const normVal = normalize(val);
  suggestionsEl.innerHTML = currentSuggestions.map((skill, i) => {
    const highlightName = skill.name.replace(
      new RegExp(`(${escapeRegex(val)})`, "gi"),
      `<mark>$1</mark>`
    );
    const game = getGameById(skill.game);
    const typeInfo = getSkillType(skill.type);
    return `<li data-index="${i}" tabindex="-1">
      <span>${highlightName}</span>
      <span class="suggest-game">${game?.short || ""} · ${typeInfo.label}</span>
    </li>`;
  }).join("");

  suggestionsEl.classList.remove("hidden");

  // Listeners sur les items
  suggestionsEl.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      const skill = currentSuggestions[parseInt(li.dataset.index)];
      if (skill) {
        inputEl.value = skill.name;
        hideSuggestions();
      }
    });
    li.addEventListener("mouseenter", () => {
      activeSuggestionIndex = parseInt(li.dataset.index);
      highlightSuggestion();
    });
  });
}

function highlightSuggestion() {
  const items = document.querySelectorAll("#suggestions li");
  items.forEach((li, i) => li.classList.toggle("active", i === activeSuggestionIndex));
}

function hideSuggestions() {
  const suggestionsEl = document.getElementById("suggestions");
  suggestionsEl.innerHTML = "";
  suggestionsEl.classList.add("hidden");
  currentSuggestions = [];
  activeSuggestionIndex = -1;
}

/* ── Toasts ─────────────────────────────────────────────────── */
function showToast(message, type = "success", duration = 3000) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastOut 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ── Utilitaires ─────────────────────────────────────────────── */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* ── Initialisation ─────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  loadUnlocked();

  /* Éléments DOM */
  const gameSelect   = document.getElementById("gameSelect");
  const skillInput   = document.getElementById("skillInput");
  const unlockBtn    = document.getElementById("unlockBtn");
  const feedbackEl   = document.getElementById("unlockFeedback");
  const typeFilter   = document.getElementById("typeFilter");
  const searchSkills = document.getElementById("searchSkills");
  const resetBtn     = document.getElementById("resetBtn");

  /* Rendu initial */
  renderSkillsList();

  /* ── Gestion unlock ───── */
  function doUnlock() {
    const inputVal = skillInput.value.trim();
    const gameId   = gameSelect.value;

    if (!inputVal) {
      showFeedback("Veuillez saisir un nom de compétence.", "warning");
      return;
    }

    const result = tryUnlock(inputVal, gameId);

    if (result.success) {
      showFeedback(result.message, "success");
      showToast(result.message, "success");
      skillInput.value = "";
      hideSuggestions();
      renderSkillsList(result.skill.id);
      // Scroll vers le groupe
      setTimeout(() => {
        const groupEl = document.querySelector(`.game-group[data-game-id="${result.skill.game}"]`);
        if (groupEl) {
          groupEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
          // Flash de la ligne
          const rowEl = document.querySelector(`.skill-row[data-skill-id="${result.skill.id}"]`);
          if (rowEl) rowEl.classList.add("flash-valid");
        }
      }, 100);
    } else if (result.alreadyUnlocked) {
      showFeedback(result.message, "warning");
    } else {
      showFeedback(result.message, "error");
    }
  }

  unlockBtn.addEventListener("click", doUnlock);

  skillInput.addEventListener("keydown", e => {
    const suggestionsEl = document.getElementById("suggestions");
    const isOpen = !suggestionsEl.classList.contains("hidden");

    if (e.key === "Enter") {
      if (isOpen && activeSuggestionIndex >= 0 && currentSuggestions[activeSuggestionIndex]) {
        skillInput.value = currentSuggestions[activeSuggestionIndex].name;
        hideSuggestions();
      } else {
        doUnlock();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (isOpen) {
        activeSuggestionIndex = Math.min(activeSuggestionIndex + 1, currentSuggestions.length - 1);
        highlightSuggestion();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (isOpen) {
        activeSuggestionIndex = Math.max(activeSuggestionIndex - 1, 0);
        highlightSuggestion();
      }
    } else if (e.key === "Escape") {
      hideSuggestions();
    }
  });

  skillInput.addEventListener("input", () => {
    updateSuggestions(skillInput, gameSelect.value || null);
    feedbackEl.textContent = "";
    feedbackEl.className = "unlock-feedback";
  });

  gameSelect.addEventListener("change", () => {
    if (skillInput.value.length >= 2) {
      updateSuggestions(skillInput, gameSelect.value || null);
    }
  });

  // Ferme les suggestions en cliquant ailleurs
  document.addEventListener("click", e => {
    if (!e.target.closest(".input-with-suggestions")) hideSuggestions();
  });

  /* ── Filtres ─────────────── */
  typeFilter.addEventListener("change", () => {
    App.activeTypeFilter = typeFilter.value;
    renderSkillsList();
  });

  searchSkills.addEventListener("input", () => {
    App.searchQuery = searchSkills.value;
    renderSkillsList();
  });

  /* ── Reset ───────────────── */
  resetBtn.addEventListener("click", () => {
    if (confirm("Réinitialiser toutes les compétences débloquées ? Cette action est irréversible.")) {
      App.unlockedSkills.clear();
      saveUnlocked();
      App.openGroups = {};
      renderSkillsList();
      showToast("Toutes les compétences ont été réinitialisées.", "error");
    }
  });

  /* ── Raccourci clavier global ── */
  document.addEventListener("keydown", e => {
    // Ctrl/Cmd + K → focus sur le champ de saisie
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      skillInput.focus();
    }
  });
});

/* ── Affichage du feedback ──────────────────────────────────── */
function showFeedback(message, type) {
  const feedbackEl = document.getElementById("unlockFeedback");
  feedbackEl.textContent = message;
  feedbackEl.className = `unlock-feedback ${type}`;
}

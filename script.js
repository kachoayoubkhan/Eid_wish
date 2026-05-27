const journeyContent = {
  // Custom text: edit these strings later to personalize the experience.
  finalMessage: [
    "Eid Mubarak, Anila Zehra, My Love ❤️",
    "",
    "Every Moment becomes more beautiful because you are in my life.",
    "You are my peace, my happiness, and my favorite blessing.",
    "Thank you for making my world beautiful.",
    "",
    "May Allah always keep us together forever. 🌙✨"
  ].join("\n"),
  secretMessage: "Secret unlocked: I would choose you in every lifetime, every Eid, every prayer.",
  photoSlots: [
    {
      title: "Our Sweetest Selfie",
      note: "",
      badge: "Photo 01",
      alt: "A favorite photo together",
      sources: [
        "assets/images/photo-1.jpg",
        "assets/images/photo-1.jpeg",
        "assets/images/photo-1.png",
        "assets/images/photo-1.webp"
      ]
    },
    {
      title: "A Special Memory",
      note: "",
      badge: "Photo 02",
      alt: "A special shared memory",
      sources: [
        "assets/images/photo-2.jpg",
        "assets/images/photo-2.jpeg",
        "assets/images/photo-2.png",
        "assets/images/photo-2.webp"
      ]
    },
    {
      title: "Our Moonlit Moment",
      note: "",
      badge: "Photo 03",
      alt: "A calm moonlit moment together",
      sources: [
        "assets/images/photo-3.jpg",
        "assets/images/photo-3.jpeg",
        "assets/images/photo-3.png",
        "assets/images/photo-3.webp"
      ]
    },
    {
      title: "Our Forever Frame",
      note: "",
      badge: "Photo 04",
      alt: "A final favorite photo together",
      sources: [
        "assets/images/photo-4.jpg",
        "assets/images/photo-4.jpeg",
        "assets/images/photo-4.png",
        "assets/images/photo-4.webp"
      ]
    },
    {
      title: "My Favorite Smile",
      note: "",
      badge: "Photo 05",
      alt: "A favorite smiling photo together",
      sources: [
        "assets/images/photo-5.jpg",
        "assets/images/photo-5.jpeg",
        "assets/images/photo-5.png",
        "assets/images/photo-5.webp"
      ]
    },
    {
      title: "One More Forever",
      note: "",
      badge: "Photo 06",
      alt: "One more cherished photo together",
      sources: [
        "assets/images/photo-6.jpg",
        "assets/images/photo-6.jpeg",
        "assets/images/photo-6.png",
        "assets/images/photo-6.webp"
      ]
    }
  ],
  quizQuestions: [
    "Who loves you the most?",
    "Who misses you every day?",
    "Who annoys you the most?"
  ]
};

const state = {
  currentStage: 1,
  modalAction: null,
  toastTimer: null,
  typingTimer: null,
  musicPlaying: false,
  moonTaps: 0,
  secretUnlocked: false,
  quizAnswers: []
};

const stageElements = [...document.querySelectorAll(".stage")];
const progressDots = [...document.querySelectorAll(".progress-dot")];
const answerCards = [...document.querySelectorAll(".answer-card")];
const answerInputs = [...document.querySelectorAll(".answer-input")];
const musicButtons = [...document.querySelectorAll("[data-music-toggle]")];

const loadingScreen = document.getElementById("loading-screen");
const floatingParticles = document.getElementById("floating-particles");
const photoGrid = document.getElementById("photo-grid");
const answerKeepsakeGrid = document.getElementById("answer-keepsake-grid");
const typedMessage = document.getElementById("typed-message");
const choiceResponse = document.getElementById("choice-response");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalButton = document.getElementById("modal-button");
const answerPopup = document.getElementById("answer-popup");
const answerPopupButton = document.getElementById("answer-popup-button");
const loveQuizForm = document.getElementById("love-quiz-form");
const replayButton = document.getElementById("replay-button");
const surpriseButton = document.getElementById("surprise-button");
const openButton = document.getElementById("open-carefully");
const ignoreButton = document.getElementById("ignore-button");
const easterMoon = document.getElementById("easter-moon");
const secretNote = document.getElementById("secret-note");
const confettiLayer = document.getElementById("confetti-layer");
const finalHeartBurst = document.getElementById("final-heart-burst");
const toast = document.getElementById("toast");
const backgroundMusic = document.getElementById("bg-music");

// Build the editable photo gallery content.
function populatePhotoGallery() {
  const photoMarkup = journeyContent.photoSlots
    .map(
      (slot) => `
        <article class="photo-card" data-photo-card>
          <div class="photo-shell">
            <img
              class="photo-image"
              data-photo-image
              alt="${escapeHtml(slot.alt)}"
              loading="lazy"
            >
            <span class="photo-badge">${escapeHtml(slot.badge)}</span>
            <div class="photo-caption">
              <strong>${escapeHtml(slot.title)}</strong>
              ${slot.note ? `<p>${escapeHtml(slot.note)}</p>` : ""}
            </div>
            <div class="photo-fallback">
              <span class="photo-slot-icon">✦</span>
              <strong>${escapeHtml(slot.title)}</strong>
              ${slot.note ? `<p>${escapeHtml(slot.note)}</p>` : ""}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  photoGrid.innerHTML = photoMarkup;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function renderAnswerKeepsake() {
  const keepsakeMarkup = journeyContent.quizQuestions
    .map((question, index) => {
      const answer = state.quizAnswers[index] || "Waiting for your answer...";

      return `
        <article class="answer-keepsake-item">
          <strong>${escapeHtml(question)}</strong>
          <p>${escapeHtml(answer)}</p>
        </article>
      `;
    })
    .join("");

  answerKeepsakeGrid.innerHTML = keepsakeMarkup;
}

function loadPhotoSource(source) {
  return new Promise((resolve) => {
    const testImage = new Image();

    testImage.onload = () => resolve(source);
    testImage.onerror = () => resolve(null);
    testImage.src = source;
  });
}

async function findFirstAvailablePhoto(sources) {
  for (const source of sources) {
    const resolvedSource = await loadPhotoSource(source);

    if (resolvedSource) {
      return resolvedSource;
    }
  }

  return null;
}

// Drop photos into assets/images and the gallery will pick them up automatically.
async function hydratePhotoGallery() {
  const photoCards = [...document.querySelectorAll("[data-photo-card]")];

  for (const [index, card] of photoCards.entries()) {
    const slot = journeyContent.photoSlots[index];
    const imageElement = card.querySelector("[data-photo-image]");

    if (!slot || !imageElement) {
      continue;
    }

    const resolvedSource = await findFirstAvailablePhoto(slot.sources);

    if (!resolvedSource) {
      card.classList.remove("has-image");
      continue;
    }

    imageElement.src = resolvedSource;
    card.classList.add("has-image");
  }
}

// Ambient particles keep the page feeling alive even when idle.
function createAmbientParticles() {
  const pieces = Array.from({ length: 22 }, () => {
    const particle = document.createElement("span");
    particle.style.setProperty("--left", `${Math.random() * 100}%`);
    particle.style.setProperty("--size", `${0.25 + Math.random() * 0.55}rem`);
    particle.style.setProperty("--delay", `${Math.random() * 8}s`);
    particle.style.setProperty("--duration", `${9 + Math.random() * 9}s`);
    particle.style.setProperty("--drift", `${-2 + Math.random() * 4}rem`);
    return particle;
  });

  floatingParticles.replaceChildren(...pieces);
}

function updateProgress(stage) {
  progressDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index + 1 <= stage);
  });
}

// Small helper for mobile-friendly status messages.
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

function showModal(message, action) {
  modalText.textContent = message;
  state.modalAction = action;
  modal.classList.remove("hidden");
  modalButton.focus();
}

function closeModal() {
  modal.classList.add("hidden");

  if (typeof state.modalAction === "function") {
    const nextAction = state.modalAction;
    state.modalAction = null;
    nextAction();
  }
}

function showAnswerPopup() {
  answerPopup.classList.remove("hidden");
  answerPopupButton.focus();
}

function closeAnswerPopup() {
  answerPopup.classList.add("hidden");
  activateStage(3);
}

function resetQuizStep() {
  state.quizAnswers = [];
  loveQuizForm.reset();
  answerCards.forEach((card) => card.classList.remove("is-filled"));
  choiceResponse.textContent = "";
  answerPopup.classList.add("hidden");
  renderAnswerKeepsake();
}

// Both music buttons share the same playback state.
function updateMusicButtons() {
  musicButtons.forEach((button, index) => {
    button.setAttribute("aria-pressed", String(state.musicPlaying));
    button.classList.toggle("is-playing", state.musicPlaying);

    const label = button.querySelector(".music-toggle-label");

    if (!label) {
      return;
    }

    if (state.musicPlaying) {
      label.textContent = index === 0 ? "Music On" : "Pause Music";
    } else {
      label.textContent = index === 0 ? "Music Off" : "Play Music";
    }
  });
}

async function toggleMusic() {
  if (state.musicPlaying) {
    backgroundMusic.pause();
    state.musicPlaying = false;
    updateMusicButtons();
    return;
  }

  try {
    await backgroundMusic.play();
    state.musicPlaying = true;
    updateMusicButtons();
  } catch (error) {
    state.musicPlaying = false;
    updateMusicButtons();
    showToast("The soundtrack could not start automatically. Tap the music button to try again.");
  }
}

function clearTyping() {
  window.clearInterval(state.typingTimer);
  typedMessage.classList.remove("is-typing");
}

// The final note is typed out for a more emotional reveal.
function typeFinalMessage() {
  clearTyping();
  typedMessage.textContent = "";
  typedMessage.classList.add("is-typing");

  const text = journeyContent.finalMessage;
  let index = 0;

  state.typingTimer = window.setInterval(() => {
    typedMessage.textContent += text[index];
    index += 1;

    if (index >= text.length) {
      clearTyping();
    }
  }, 34);
}

function createConfettiBurst() {
  const colors = ["#f3c572", "#ff8baa", "#53b98d", "#fff1c1"];
  const pieces = Array.from({ length: 60 }, () => {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--left", `${Math.random() * 100}%`);
    piece.style.setProperty("--rotation", `${Math.random() * 360}deg`);
    piece.style.setProperty("--duration", `${2.8 + Math.random() * 2.2}s`);
    piece.style.setProperty("--sway", `${-10 + Math.random() * 20}rem`);
    piece.style.setProperty("--confetti-color", colors[Math.floor(Math.random() * colors.length)]);
    return piece;
  });

  confettiLayer.replaceChildren(...pieces);
}

function createHeartBurst() {
  const hearts = Array.from({ length: 14 }, () => {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = Math.random() > 0.35 ? "❤" : "✦";
    heart.style.setProperty("--x", `${-8 + Math.random() * 16}rem`);
    heart.style.setProperty("--y", `${-6 + Math.random() * 12}rem`);
    heart.style.setProperty("--delay", `${Math.random() * 0.35}s`);
    return heart;
  });

  finalHeartBurst.replaceChildren(...hearts);
}

// Transition between the four chapters of the journey.
function activateStage(stageNumber) {
  state.currentStage = stageNumber;
  document.body.classList.toggle("stage-4-active", stageNumber === 4);

  stageElements.forEach((stageElement) => {
    const isActive = Number(stageElement.dataset.stage) === stageNumber;
    stageElement.classList.toggle("is-active", isActive);

    if (isActive) {
      stageElement.scrollTo({ top: 0, behavior: "auto" });
    }
  });

  updateProgress(stageNumber);

  if (stageNumber === 4) {
    typeFinalMessage();
    createConfettiBurst();
    createHeartBurst();
  }
}

// The crescent moon unlocks a hidden easter egg after a few taps.
function unlockSecret() {
  state.secretUnlocked = true;
  secretNote.textContent = journeyContent.secretMessage;
  secretNote.classList.remove("hidden");
  createHeartBurst();
  showToast("Secret note unlocked.");
}

// Add a soft ripple on taps and clicks.
function addRipple(event) {
  const target = event.currentTarget;
  const ripple = document.createElement("span");
  const rect = target.getBoundingClientRect();

  ripple.className = "ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;

  target.appendChild(ripple);

  window.setTimeout(() => {
    ripple.remove();
  }, 650);
}

function attachMicroInteractions() {
  document.querySelectorAll(".interactive").forEach((element) => {
    element.addEventListener("pointerdown", addRipple);
  });
}

function syncAnswerCardState(input) {
  const card = input.closest(".answer-card");

  if (!card) {
    return;
  }

  card.classList.toggle("is-filled", input.value.trim().length > 0);
}

function handleQuizSubmit(event) {
  event.preventDefault();

  const answers = answerInputs.map((input) => input.value.trim());
  const firstEmptyIndex = answers.findIndex((answer) => answer.length === 0);

  if (firstEmptyIndex !== -1) {
    choiceResponse.textContent = "No skipping, my love. The moon wants all three answers first.";
    answerInputs[firstEmptyIndex].focus();
    return;
  }

  state.quizAnswers = answers;
  renderAnswerKeepsake();
  choiceResponse.textContent = "Perfect. Your answers are ready in a little keepsake box just for you.";
  showAnswerPopup();
}

// Reset the experience so the journey can be replayed from the start.
function replayJourney() {
  resetQuizStep();
  secretNote.classList.add("hidden");
  state.moonTaps = 0;
  state.secretUnlocked = false;
  confettiLayer.replaceChildren();
  finalHeartBurst.replaceChildren();
  clearTyping();
  activateStage(1);
}

function hideLoadingScreen() {
  window.setTimeout(() => {
    loadingScreen.classList.add("is-hidden");
  }, 1450);
}

openButton.addEventListener("click", () => activateStage(2));

ignoreButton.addEventListener("click", () => {
  showModal("Nice try 😌 You still have to continue.", () => activateStage(2));
});

answerInputs.forEach((input) => {
  input.addEventListener("input", () => syncAnswerCardState(input));
});

loveQuizForm.addEventListener("submit", handleQuizSubmit);
surpriseButton.addEventListener("click", () => activateStage(4));
replayButton.addEventListener("click", replayJourney);
modalButton.addEventListener("click", closeModal);
answerPopupButton.addEventListener("click", closeAnswerPopup);

musicButtons.forEach((button) => {
  button.addEventListener("click", toggleMusic);
});

easterMoon.addEventListener("click", () => {
  state.moonTaps += 1;

  if (state.moonTaps >= 4 && !state.secretUnlocked) {
    unlockSecret();
  } else if (!state.secretUnlocked) {
    showToast(`Moon secret: ${4 - state.moonTaps} more tap${state.moonTaps === 3 ? "" : "s"}...`);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    return;
  }

  if (event.key === "Escape" && !answerPopup.classList.contains("hidden")) {
    closeAnswerPopup();
  }
});

populatePhotoGallery();
renderAnswerKeepsake();
createAmbientParticles();
attachMicroInteractions();
updateMusicButtons();
hideLoadingScreen();
hydratePhotoGallery();

const journeyContent = {
  // Custom text: edit these strings later to personalize the experience.
  finalMessage: [
    "Eid Mubarak, Anila Zehra, My Love ❤️",
    "",
    "Every Eid becomes more beautiful because you are in my life.",
    "You are my peace, my happiness, and my favorite blessing.",
    "Thank you for making my world beautiful.",
    "",
    "May Allah always keep us together forever. 🌙✨"
  ].join("\n"),
  secretMessage: "Secret unlocked: I would choose you in every lifetime, every Eid, every prayer.",
  memories: [
    {
      title: "The first warm smile",
      text: "That sweet feeling when even a normal day suddenly feels lighter because you are in it."
    },
    {
      title: "Shared duas and quiet laughs",
      text: "The kind of peace that settles in when love, friendship, and prayer all feel like the same home."
    },
    {
      title: "A forever made of little things",
      text: "Tea, conversations, late-night jokes, Eid excitement, and all the ordinary moments that became precious."
    }
  ],
  photoSlots: [
    {
      title: "Add your favorite selfie",
      note: "Perfect for your cutest Eid or date-night photo."
    },
    {
      title: "Add a special memory",
      note: "Use a picture from a trip, dinner, or a sweet little moment."
    },
    {
      title: "Add your moonlit moment",
      note: "A calm photo together fits beautifully here."
    },
    {
      title: "Add your forever frame",
      note: "A final picture to make the reveal feel even more personal."
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
const memoryTimeline = document.getElementById("memory-timeline");
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

// Build the editable memory and photo placeholder content.
function populateMemoryCards() {
  const memoryMarkup = journeyContent.memories
    .map(
      (memory) => `
        <article class="memory-card">
          <h4>${memory.title}</h4>
          <p>${memory.text}</p>
        </article>
      `
    )
    .join("");

  const photoMarkup = journeyContent.photoSlots
    .map(
      (slot) => `
        <article class="photo-slot">
          <span class="photo-slot-icon">✦</span>
          <strong>${slot.title}</strong>
          <p>${slot.note}</p>
        </article>
      `
    )
    .join("");

  memoryTimeline.innerHTML = memoryMarkup;
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
    showToast("Add your song in assets/audio/romantic-eid.mp3 to enable the soundtrack.");
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

populateMemoryCards();
renderAnswerKeepsake();
createAmbientParticles();
attachMicroInteractions();
updateMusicButtons();
hideLoadingScreen();

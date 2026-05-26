const workers = [
  {
    id: "w1",
    name: "Usman Khan",
    category: "Electrical",
    specialty: "AC, wiring, and geyser troubleshooting",
    track: "Track B",
    trackLabel: "Experience Verified",
    area: "F-10",
    rating: 4.7,
    jobs: 89,
    price: "Rs. 1,000-1,800",
    eta: "35 min",
    availability: "available",
    languages: ["Urdu", "English"],
    skills: ["AC repair", "Wiring", "Geyser repair"],
    note: "Completed 12 repeat bookings this month with zero disputes.",
    earningsWeek: "Rs. 32,400",
    earningsTrend: "+14%",
    wallet: "Rs. 8,900",
    cancellationRate: "2%",
    coachTips: [
      "AC repair demand is climbing before summer. Add one more evening slot in F sectors.",
      "Your electrical rating is 4.9 while your general repair rating is 4.3. Accept more pure electrical jobs.",
      "A short solar installation course could lift monthly income by an estimated Rs. 12,000."
    ],
    nextBadge: "100 jobs - SkillConnect Expert",
    nextBadgeProgress: 89,
    progressLabel: "11 more jobs to reach the next badge",
    courseNudge: "NAVTTC AC and inverter specialization",
    payoutDay: "Sunday auto-payout to JazzCash",
    badge: "Trusted Pro"
  },
  {
    id: "w2",
    name: "Hira Bibi",
    category: "Home & Care",
    specialty: "Female caregiver and home nurse",
    track: "Track A",
    trackLabel: "College Verified",
    area: "DHA 2",
    rating: 4.9,
    jobs: 56,
    price: "Rs. 2,500-4,000",
    eta: "Tonight after 6 pm",
    availability: "busy",
    languages: ["Urdu", "Punjabi"],
    skills: ["Elder care", "Medication support", "Night shift care"],
    note: "Verified through college diploma and receives strong family-safety reviews.",
    earningsWeek: "Rs. 41,200",
    earningsTrend: "+9%",
    wallet: "Rs. 12,600",
    cancellationRate: "0%",
    coachTips: [
      "Your evening care shifts have the highest satisfaction score. Open two extra weekend slots.",
      "Customers save you as a repeat worker often. Turn on premium repeat-booking notifications.",
      "A pediatric care micro-course could unlock higher-value family contracts."
    ],
    nextBadge: "100 jobs - SkillConnect Expert",
    nextBadgeProgress: 56,
    progressLabel: "44 more jobs to reach the next badge",
    courseNudge: "Advanced geriatric care certificate",
    payoutDay: "Sunday auto-payout to EasyPaisa",
    badge: "Trusted Pro"
  },
  {
    id: "w3",
    name: "Bilal Ahmed",
    category: "Plumbing & Water",
    specialty: "Leak fixing, pumps, and geyser installations",
    track: "Track B",
    trackLabel: "Experience Verified",
    area: "G-13",
    rating: 4.6,
    jobs: 61,
    price: "Rs. 900-1,700",
    eta: "25 min",
    availability: "available",
    languages: ["Urdu"],
    skills: ["Pipe leaks", "Water pumps", "Geyser install"],
    note: "Reference calls cleared and he has maintained a 4.5+ average through probation.",
    earningsWeek: "Rs. 28,750",
    earningsTrend: "+18%",
    wallet: "Rs. 7,350",
    cancellationRate: "3%",
    coachTips: [
      "G-13 has the biggest live plumbing shortage right now. Keep your next two mornings open there.",
      "Before and after photos increase your review conversion rate. Keep uploading them consistently.",
      "A tank cleaning upsell could add Rs. 6,000 this month."
    ],
    nextBadge: "100 jobs - SkillConnect Expert",
    nextBadgeProgress: 61,
    progressLabel: "39 more jobs to reach the next badge",
    courseNudge: "Water heating systems short course",
    payoutDay: "Sunday auto-payout to JazzCash",
    badge: "Trusted Pro"
  },
  {
    id: "w4",
    name: "Sana Noor",
    category: "Technical & Installation",
    specialty: "CCTV, home networking, and smart device setup",
    track: "Track A",
    trackLabel: "College Verified",
    area: "F-11",
    rating: 4.8,
    jobs: 37,
    price: "Rs. 1,800-3,500",
    eta: "50 min",
    availability: "available",
    languages: ["Urdu", "English"],
    skills: ["CCTV setup", "Wi-Fi fixes", "Smart lock install"],
    note: "Strong organization potential for housing societies and small offices.",
    earningsWeek: "Rs. 36,900",
    earningsTrend: "+22%",
    wallet: "Rs. 10,200",
    cancellationRate: "1%",
    coachTips: [
      "Office networking requests are rising in F sectors. Turn on weekday business availability.",
      "Customers who book CCTV often also need smart locks. Add a service bundle badge to your profile.",
      "Your rating is already premium. Featured listing could pay back within two bookings."
    ],
    nextBadge: "50 jobs - Trusted Pro",
    nextBadgeProgress: 74,
    progressLabel: "13 more jobs to hit the 50-job milestone",
    courseNudge: "Smart home integration bootcamp",
    payoutDay: "Sunday auto-payout to JazzCash",
    badge: "Rising Star"
  },
  {
    id: "w5",
    name: "Rahat Masih",
    category: "Cleaning & Maintenance",
    specialty: "Cleaning, gardening, and low-risk maintenance",
    track: "Track C",
    trackLabel: "Rising Worker",
    area: "G-11",
    rating: 4.2,
    jobs: 3,
    price: "Rs. 700-1,200",
    eta: "40 min",
    availability: "available",
    languages: ["Urdu"],
    skills: ["Deep cleaning", "Gardening", "Errands"],
    note: "Transparent Track C profile with positive first-job reviews and a guided path to Track B.",
    earningsWeek: "Rs. 6,400",
    earningsTrend: "+40%",
    wallet: "Rs. 2,050",
    cancellationRate: "0%",
    coachTips: [
      "You only need two more positively rated jobs before the Track B process starts.",
      "Customers praise punctuality. Highlight that in your profile headline.",
      "Gardening requests peak on Friday and Saturday mornings in G sectors."
    ],
    nextBadge: "10 jobs - Rising Star",
    nextBadgeProgress: 30,
    progressLabel: "7 more jobs to reach the first badge",
    courseNudge: "Basic facilities maintenance starter course",
    payoutDay: "Sunday auto-payout to EasyPaisa",
    badge: "New Worker"
  },
  {
    id: "w6",
    name: "Adnan Shah",
    category: "Automotive",
    specialty: "Car electricals and roadside diagnostics",
    track: "Track A",
    trackLabel: "College Verified",
    area: "I-10",
    rating: 4.5,
    jobs: 44,
    price: "Rs. 1,200-2,600",
    eta: "Busy until 3 pm",
    availability: "busy",
    languages: ["Urdu", "Punjabi"],
    skills: ["Battery issues", "Alternator", "Car scan"],
    note: "Useful for future expansion beyond home services without changing the trust model.",
    earningsWeek: "Rs. 24,300",
    earningsTrend: "+5%",
    wallet: "Rs. 6,700",
    cancellationRate: "4%",
    coachTips: [
      "Your highest ratings come from battery and ignition jobs. Lean into those for now.",
      "Customer wait-time complaints rise when you accept too many midday calls. Cap concurrent bookings.",
      "A mobile generator repair add-on could create cross-category demand."
    ],
    nextBadge: "50 jobs - Trusted Pro",
    nextBadgeProgress: 88,
    progressLabel: "6 more jobs to reach the next badge",
    courseNudge: "Advanced vehicle electronics",
    payoutDay: "Sunday auto-payout to JazzCash",
    badge: "Rising Star"
  }
];

const verificationQueue = [
  {
    id: "q1",
    name: "Ayesha Malik",
    role: "Home nurse",
    track: "Track A",
    confidence: 92,
    status: "pending",
    note: "SIT diploma and CNIC match cleanly. Institution format check passed."
  },
  {
    id: "q2",
    name: "Salman Qureshi",
    role: "Electrician",
    track: "Track B",
    confidence: 71,
    status: "pending",
    note: "Two references validated. Third reference missing WhatsApp work photo."
  },
  {
    id: "q3",
    name: "Zubair Hussain",
    role: "Gardener",
    track: "Track C",
    confidence: 48,
    status: "escalated",
    note: "Potential duplicate CNIC hash detected. Manual identity check recommended."
  },
  {
    id: "q4",
    name: "Noreen Akhtar",
    role: "Caregiver",
    track: "Track A",
    confidence: 64,
    status: "pending",
    note: "Certificate name spelling differs from CNIC by one character. Needs review."
  }
];

const disputes = [
  {
    id: "d1",
    title: "Plumbing job price disagreement",
    summary: "Customer claims final amount exceeded agreed range by Rs. 600.",
    evidence: "Chat log includes material-change request. Worker uploaded pipe replacement photos.",
    resolution: "Auto-split recommended",
    status: "ready"
  },
  {
    id: "d2",
    title: "Caregiver late arrival complaint",
    summary: "Customer reports a 45-minute delay for an evening shift.",
    evidence: "GPS shows worker arrived 38 minutes late. Worker reported route closure in chat.",
    resolution: "Partial fee waiver suggested",
    status: "review"
  },
  {
    id: "d3",
    title: "AC repair quality issue",
    summary: "Cooling improved for one day only, then problem returned.",
    evidence: "Before/after photos present, but no video proof of final cooling level.",
    resolution: "Escalate for admin callback",
    status: "escalated"
  }
];

const demandSignals = [
  {
    area: "G-13",
    category: "Plumbing & Water",
    intensity: 86,
    summary: "6 unmatched plumbing jobs in the last 48 hours.",
    action: "Notify nearby plumbers and promote water-pump workers."
  },
  {
    area: "F sectors",
    category: "Electrical / AC",
    intensity: 94,
    summary: "Summer AC demand is spiking faster than worker supply.",
    action: "Push AC specialization nudges to electricians and college partners."
  },
  {
    area: "DHA 2",
    category: "Home & Care",
    intensity: 72,
    summary: "Evening caregiver requests exceed current female worker capacity.",
    action: "Surface repeat-booking options and recruit diploma-backed caregivers."
  }
];

const agents = [
  {
    name: "Verification Agent",
    status: "Interactive",
    description: "Queue scoring, approval paths, and escalation states are demonstrated."
  },
  {
    name: "Smart Matching Agent",
    status: "Interactive",
    description: "Worker ranking and booking handoff power the marketplace and FixIt flow."
  },
  {
    name: "Dispute Resolution Agent",
    status: "Simulated",
    description: "Evidence-backed dispute cards preview how automated rulings would surface."
  },
  {
    name: "Worker Growth Coach",
    status: "Interactive",
    description: "Worker dashboards include personalized earnings and coaching nudges."
  },
  {
    name: "FixIt For Me Agent",
    status: "Interactive",
    description: "Natural-language prompts map to category, area, and worker suggestions."
  },
  {
    name: "Supply-Demand Agent",
    status: "Simulated",
    description: "Area pressure signals show how proactive balancing insights would appear."
  }
];

const orgRequests = [
  {
    org: "Noor Family Clinic",
    need: "2 evening caregivers",
    area: "DHA 2",
    sla: "Start within 48 hours",
    matchTags: ["Track A only", "Female staff preferred", "Monthly invoice enabled"]
  },
  {
    org: "Capital Heights Apartments",
    need: "Rotating electrician and plumber pool",
    area: "F-11 / F-10",
    sla: "On-call maintenance coverage",
    matchTags: ["Repeat assignments", "Fast ETA", "Admin SLA tracking"]
  },
  {
    org: "SIT placement office",
    need: "Graduate visibility dashboard",
    area: "Islamabad pilot",
    sla: "Monthly placement summary",
    matchTags: ["Track A graduates", "Outcome reporting", "Partner page"]
  }
];

const timelineTemplate = [
  { title: "Booking request created", detail: "Customer issue is logged and the matching agent starts ranking workers." },
  { title: "Worker confirmed", detail: "Best-fit worker accepts after verification and availability checks." },
  { title: "Worker on the way", detail: "Customer gets ETA and live movement visibility." },
  { title: "Job in progress", detail: "Start confirmation, work evidence, and price range stay attached to the booking." },
  { title: "Completed and ready for review", detail: "Payment release and mutual rating happen at the end of the job." }
];

const elements = {
  categoryFilter: document.querySelector("#category-filter"),
  areaFilter: document.querySelector("#area-filter"),
  trackFilter: document.querySelector("#track-filter"),
  availableFilter: document.querySelector("#available-filter"),
  searchInput: document.querySelector("#search-input"),
  workerList: document.querySelector("#worker-list"),
  workerCount: document.querySelector("#worker-count"),
  workerSummary: document.querySelector("#worker-summary"),
  workerProfileSelect: document.querySelector("#worker-profile-select"),
  workerDashboard: document.querySelector("#worker-dashboard"),
  fixitInput: document.querySelector("#fixit-input"),
  fixitForm: document.querySelector("#fixit-form"),
  fixitResponse: document.querySelector("#fixit-response"),
  bookingSummary: document.querySelector("#booking-summary"),
  bookingTimeline: document.querySelector("#booking-timeline"),
  verificationQueue: document.querySelector("#verification-queue"),
  disputeList: document.querySelector("#dispute-list"),
  demandList: document.querySelector("#demand-list"),
  agentList: document.querySelector("#agent-list"),
  orgRequests: document.querySelector("#org-requests")
};

const state = {
  selectedWorkerId: workers[0].id,
  timelineIndex: -1,
  timelineTimerIds: []
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getTrackClass(track) {
  if (track === "Track B") {
    return "track-b";
  }
  if (track === "Track C") {
    return "track-c";
  }
  return "";
}

function getAvailabilityLabel(availability) {
  if (availability === "available") {
    return "Available now";
  }
  if (availability === "busy") {
    return "Busy soon";
  }
  return "Offline today";
}

function getAvailabilityClass(availability) {
  if (availability === "busy") {
    return "busy";
  }
  if (availability === "offline") {
    return "offline";
  }
  return "";
}

function getQueueClass(status) {
  return status.toLowerCase();
}

function uniqueValues(key) {
  return [...new Set(workers.map((worker) => worker[key]))].sort((a, b) => a.localeCompare(b));
}

function populateFilters() {
  uniqueValues("category").forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.categoryFilter.appendChild(option);
  });

  uniqueValues("area").forEach((area) => {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = area;
    elements.areaFilter.appendChild(option);
  });

  workers.forEach((worker) => {
    const option = document.createElement("option");
    option.value = worker.id;
    option.textContent = `${worker.name} - ${worker.trackLabel}`;
    elements.workerProfileSelect.appendChild(option);
  });
}

function getFilteredWorkers() {
  const searchValue = elements.searchInput.value.trim().toLowerCase();
  const categoryValue = elements.categoryFilter.value;
  const areaValue = elements.areaFilter.value;
  const trackValue = elements.trackFilter.value;
  const availableOnly = elements.availableFilter.checked;

  return workers.filter((worker) => {
    const matchesSearch = !searchValue || [
      worker.name,
      worker.category,
      worker.specialty,
      worker.area,
      worker.trackLabel,
      ...worker.skills
    ].join(" ").toLowerCase().includes(searchValue);

    const matchesCategory = categoryValue === "all" || worker.category === categoryValue;
    const matchesArea = areaValue === "all" || worker.area === areaValue;
    const matchesTrack = trackValue === "all" || worker.track === trackValue;
    const matchesAvailability = !availableOnly || worker.availability === "available";

    return matchesSearch && matchesCategory && matchesArea && matchesTrack && matchesAvailability;
  });
}

function renderWorkers() {
  const filteredWorkers = getFilteredWorkers();

  if (!filteredWorkers.length) {
    elements.workerList.innerHTML = `
      <div class="empty-list">
        No workers match the current filters. Try clearing availability or broadening the skill search.
      </div>
    `;
    elements.workerCount.textContent = "0 workers";
    elements.workerSummary.textContent = "No live matches for the current search.";
    return;
  }

  elements.workerList.innerHTML = filteredWorkers.map((worker) => `
    <article class="worker-card card">
      <div class="worker-card-header">
        <div>
          <h3>${escapeHtml(worker.name)}</h3>
          <p class="worker-role">${escapeHtml(worker.specialty)}</p>
        </div>
        <span class="verification-pill ${getTrackClass(worker.track)}">${escapeHtml(worker.trackLabel)}</span>
      </div>

      <div class="worker-tags">
        <span class="availability-pill ${getAvailabilityClass(worker.availability)}">${escapeHtml(getAvailabilityLabel(worker.availability))}</span>
        <span class="tag">${escapeHtml(worker.area)}</span>
        ${worker.languages.map((language) => `<span class="tag">${escapeHtml(language)}</span>`).join("")}
      </div>

      <div class="worker-stats">
        <div class="stat-chip">
          <strong>${worker.rating.toFixed(1)}</strong>
          <span>rating</span>
        </div>
        <div class="stat-chip">
          <strong>${worker.jobs}</strong>
          <span>jobs done</span>
        </div>
        <div class="stat-chip">
          <strong>${escapeHtml(worker.price)}</strong>
          <span>typical price</span>
        </div>
      </div>

      <div class="worker-tags">
        ${worker.skills.map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`).join("")}
      </div>

      <p class="worker-note">${escapeHtml(worker.note)}</p>

      <div class="worker-actions">
        <button class="button button-primary" type="button" data-action="book-worker" data-worker-id="${worker.id}">Book preview</button>
        <button class="button button-secondary" type="button" data-action="view-worker" data-worker-id="${worker.id}">Open worker hub</button>
      </div>
    </article>
  `).join("");

  const availableCount = filteredWorkers.filter((worker) => worker.availability === "available").length;
  elements.workerCount.textContent = `${filteredWorkers.length} worker${filteredWorkers.length === 1 ? "" : "s"}`;
  elements.workerSummary.textContent = `${availableCount} available now across ${new Set(filteredWorkers.map((worker) => worker.category)).size} categories.`;
}

function renderWorkerDashboard(workerId) {
  const worker = workers.find((entry) => entry.id === workerId);
  if (!worker) {
    return;
  }

  state.selectedWorkerId = worker.id;
  elements.workerProfileSelect.value = worker.id;

  elements.workerDashboard.innerHTML = `
    <section class="dashboard-card">
      <div class="dashboard-top">
        <div>
          <h4>${escapeHtml(worker.name)}</h4>
          <p>${escapeHtml(worker.specialty)} - ${escapeHtml(worker.area)}</p>
        </div>
        <div class="response-meta">
          <span class="verification-pill ${getTrackClass(worker.track)}">${escapeHtml(worker.trackLabel)}</span>
          <span class="availability-pill ${getAvailabilityClass(worker.availability)}">${escapeHtml(getAvailabilityLabel(worker.availability))}</span>
        </div>
      </div>

      <div class="dashboard-stats">
        <div class="stat-chip">
          <strong>${escapeHtml(worker.earningsWeek)}</strong>
          <span>this week</span>
        </div>
        <div class="stat-chip">
          <strong>${escapeHtml(worker.wallet)}</strong>
          <span>wallet balance</span>
        </div>
        <div class="stat-chip">
          <strong>${escapeHtml(worker.earningsTrend)}</strong>
          <span>vs last week</span>
        </div>
      </div>
    </section>

    <section class="dashboard-card">
      <h4>Badge and verification progress</h4>
      <p>${escapeHtml(worker.badge)} - ${escapeHtml(worker.progressLabel)}</p>
      <div class="progress-bar" aria-hidden="true">
        <div class="progress-fill" style="width: ${worker.nextBadgeProgress}%"></div>
      </div>
      <div class="milestone-row">
        <div class="milestone-chip">
          <strong>${worker.jobs} jobs</strong>
          <span>completed bookings</span>
        </div>
        <div class="milestone-chip">
          <strong>${escapeHtml(worker.nextBadge)}</strong>
          <span>next milestone</span>
        </div>
        <div class="milestone-chip">
          <strong>${escapeHtml(worker.cancellationRate)}</strong>
          <span>cancellation rate</span>
        </div>
      </div>
    </section>

    <section class="dashboard-card">
      <h4>AI coach this week</h4>
      <div class="coach-list">
        ${worker.coachTips.map((tip) => `
          <article class="coach-item">
            <strong>Actionable insight</strong>
            <p>${escapeHtml(tip)}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="dashboard-card">
      <h4>Growth path and payouts</h4>
      <div class="booking-grid">
        <article>
          <span>Course nudge</span>
          <strong>${escapeHtml(worker.courseNudge)}</strong>
        </article>
        <article>
          <span>Payout schedule</span>
          <strong>${escapeHtml(worker.payoutDay)}</strong>
        </article>
      </div>
    </section>
  `;
}

function clearTimelineTimers() {
  state.timelineTimerIds.forEach((timerId) => clearTimeout(timerId));
  state.timelineTimerIds = [];
}

function renderTimeline(activeIndex = -1) {
  elements.bookingTimeline.innerHTML = timelineTemplate.map((step, index) => {
    let stateClass = "";
    if (index < activeIndex) {
      stateClass = "done";
    } else if (index === activeIndex) {
      stateClass = "active";
    }

    return `
      <article class="timeline-card ${stateClass}">
        <div class="timeline-dot"></div>
        <div>
          <strong>${escapeHtml(step.title)}</strong>
          <p>${escapeHtml(step.detail)}</p>
        </div>
      </article>
    `;
  }).join("");
}

function playTimelineDemo() {
  clearTimelineTimers();
  renderTimeline(0);

  timelineTemplate.forEach((_, index) => {
    const timerId = window.setTimeout(() => {
      renderTimeline(index);
    }, index * 950);

    state.timelineTimerIds.push(timerId);
  });

  const finishTimer = window.setTimeout(() => {
    renderTimeline(timelineTemplate.length);
  }, timelineTemplate.length * 950);

  state.timelineTimerIds.push(finishTimer);
}

function renderBookingSummary(worker, context = {}) {
  if (!worker) {
    elements.bookingSummary.textContent = "Select a worker to build a booking preview.";
    renderTimeline(-1);
    return;
  }

  const issue = context.issue || worker.category;
  const area = context.area || worker.area;
  const urgency = context.urgency || "Standard";
  const slot = context.slot || worker.eta;
  const summaryText = context.summaryText || "Booking preview generated from the marketplace.";

  elements.bookingSummary.classList.remove("empty-state");
  elements.bookingSummary.innerHTML = `
    <article class="booking-card">
      <h4>${escapeHtml(worker.name)}</h4>
      <p>${escapeHtml(summaryText)}</p>
      <div class="worker-tags">
        <span class="verification-pill ${getTrackClass(worker.track)}">${escapeHtml(worker.trackLabel)}</span>
        <span class="availability-pill ${getAvailabilityClass(worker.availability)}">${escapeHtml(getAvailabilityLabel(worker.availability))}</span>
      </div>
    </article>

    <div class="booking-grid">
      <article>
        <span>Issue</span>
        <strong>${escapeHtml(issue)}</strong>
      </article>
      <article>
        <span>Area</span>
        <strong>${escapeHtml(area)}</strong>
      </article>
      <article>
        <span>ETA / slot</span>
        <strong>${escapeHtml(slot)}</strong>
      </article>
      <article>
        <span>Expected price</span>
        <strong>${escapeHtml(worker.price)}</strong>
      </article>
      <article>
        <span>Urgency</span>
        <strong>${escapeHtml(urgency)}</strong>
      </article>
      <article>
        <span>Trust signal</span>
        <strong>${escapeHtml(worker.note)}</strong>
      </article>
    </div>
  `;

  playTimelineDemo();
}

function workerComparator(left, right, preferredArea = "", preferredSkill = "") {
  const availabilityScore = { available: 3, busy: 2, offline: 1 };
  const trackScore = { "Track A": 3, "Track B": 2, "Track C": 1 };
  const leftScore =
    availabilityScore[left.availability] * 100 +
    trackScore[left.track] * 30 +
    Math.round(left.rating * 10) +
    (left.area === preferredArea ? 10 : 0) +
    (preferredSkill && left.skills.some((skill) => skill.toLowerCase().includes(preferredSkill)) ? 8 : 0) +
    Math.min(left.jobs, 99);
  const rightScore =
    availabilityScore[right.availability] * 100 +
    trackScore[right.track] * 30 +
    Math.round(right.rating * 10) +
    (right.area === preferredArea ? 10 : 0) +
    (preferredSkill && right.skills.some((skill) => skill.toLowerCase().includes(preferredSkill)) ? 8 : 0) +
    Math.min(right.jobs, 99);

  return rightScore - leftScore;
}

function detectArea(prompt) {
  const normalized = prompt.toLowerCase();
  const area = workers.find((worker) => normalized.includes(worker.area.toLowerCase()));
  return area ? area.area : "Islamabad pilot";
}

function detectUrgency(prompt) {
  const normalized = prompt.toLowerCase();
  if (/(urgent|emergency|abhi|today|asap|jaldi)/.test(normalized)) {
    return "High";
  }
  if (/(tonight|shaam|evening|after 6)/.test(normalized)) {
    return "Planned evening";
  }
  return "Standard";
}

function detectTimeSlot(prompt) {
  const normalized = prompt.toLowerCase();
  if (/(after 6|6 pm|6:30|shaam|evening)/.test(normalized)) {
    return "After 6 pm";
  }
  if (/(morning|subah)/.test(normalized)) {
    return "Morning";
  }
  return "Next available slot";
}

function detectRequestType(prompt) {
  const normalized = prompt.toLowerCase();
  const rules = [
    { category: "Plumbing & Water", skill: "geyser", pattern: /(plumb|pipe|water|leak|geyser|pump)/ },
    { category: "Electrical", skill: "ac", pattern: /(electric|wiring|ac|generator|solar|inverter)/ },
    { category: "Home & Care", skill: "care", pattern: /(nurse|caregiver|care|mother|baby|cook|chef|sitter|tutor)/ },
    { category: "Technical & Installation", skill: "cctv", pattern: /(cctv|wifi|network|smart|router|camera)/ },
    { category: "Cleaning & Maintenance", skill: "clean", pattern: /(clean|gard|errand|pest)/ },
    { category: "Construction & Repair", skill: "paint", pattern: /(paint|carpenter|tile|welder|mason)/ },
    { category: "Automotive", skill: "battery", pattern: /(car|bike|battery|tyre|vehicle|mechanic)/ }
  ];

  const matchedRule = rules.find((rule) => rule.pattern.test(normalized));
  if (matchedRule) {
    return matchedRule;
  }

  return {
    category: "Electrical",
    skill: "",
    pattern: /.*/
  };
}

function runFixitFlow(prompt) {
  const trimmedPrompt = prompt.trim();
  if (!trimmedPrompt) {
    elements.fixitResponse.innerHTML = `
      <div class="response-card agent">
        <span class="response-label">FixIt Agent</span>
        <p>Please describe the issue first so I can suggest the best worker and time slot.</p>
      </div>
    `;
    return;
  }

  const requestType = detectRequestType(trimmedPrompt);
  const area = detectArea(trimmedPrompt);
  const urgency = detectUrgency(trimmedPrompt);
  const slot = detectTimeSlot(trimmedPrompt);

  const candidates = workers
    .filter((worker) =>
      worker.category === requestType.category ||
      (requestType.skill && worker.skills.some((skill) => skill.toLowerCase().includes(requestType.skill)))
    )
    .sort((left, right) => workerComparator(left, right, area, requestType.skill));

  if (!candidates.length) {
    elements.fixitResponse.innerHTML = `
      <div class="response-card agent">
        <span class="response-label">FixIt Agent</span>
        <p>I understood the request, but there is no worker in that category yet for this prototype dataset.</p>
      </div>
    `;
    return;
  }

  const bestMatch = candidates[0];
  const shortlist = candidates.slice(0, 3).map((worker) => worker.name).join(", ");
  const summaryText = `Booking created from the conversational agent after matching the issue to a ${requestType.category.toLowerCase()} worker.`;

  elements.fixitResponse.innerHTML = `
    <article class="response-card agent">
      <span class="response-label">Customer request</span>
      <p>${escapeHtml(trimmedPrompt)}</p>
    </article>
    <article class="response-card agent">
      <span class="response-label">FixIt Agent</span>
      <p>Intent detected: ${escapeHtml(requestType.category)} request in ${escapeHtml(area)} with ${escapeHtml(urgency.toLowerCase())} urgency.</p>
    </article>
    <article class="response-card match">
      <span class="response-label">Matching Agent</span>
      <p>Shortlisted workers: ${escapeHtml(shortlist)}. Best-fit candidate is <strong>${escapeHtml(bestMatch.name)}</strong> based on availability, rating, trust track, and location fit.</p>
    </article>
    <article class="response-card success">
      <span class="response-label">Booking preview</span>
      <p>${escapeHtml(bestMatch.name)} can cover the request in ${escapeHtml(bestMatch.eta)} at an expected range of ${escapeHtml(bestMatch.price)}.</p>
    </article>
  `;

  renderWorkerDashboard(bestMatch.id);
  renderBookingSummary(bestMatch, {
    issue: requestType.category,
    area,
    urgency,
    slot,
    summaryText
  });
}

function renderQueue() {
  elements.verificationQueue.innerHTML = verificationQueue.map((item) => `
    <article class="admin-entry">
      <div class="queue-top">
        <div>
          <strong>${escapeHtml(item.name)}</strong>
          <p>${escapeHtml(item.role)} - ${escapeHtml(item.track)} - confidence ${item.confidence}%</p>
        </div>
        <span class="queue-pill ${getQueueClass(item.status)}">${escapeHtml(item.status)}</span>
      </div>
      <p>${escapeHtml(item.note)}</p>
      <div class="queue-actions">
        <button type="button" data-queue-id="${item.id}" data-queue-action="approved">Approve</button>
        <button type="button" data-queue-id="${item.id}" data-queue-action="escalated">Escalate</button>
        <button type="button" data-queue-id="${item.id}" data-queue-action="rejected">Reject</button>
      </div>
    </article>
  `).join("");
}

function renderDisputes() {
  elements.disputeList.innerHTML = disputes.map((item) => `
    <article class="admin-entry">
      <div class="queue-top">
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.summary)}</p>
        </div>
        <span class="queue-pill ${item.status === "ready" ? "approved" : item.status === "review" ? "pending" : "escalated"}">${escapeHtml(item.resolution)}</span>
      </div>
      <p>${escapeHtml(item.evidence)}</p>
    </article>
  `).join("");
}

function renderDemandSignals() {
  elements.demandList.innerHTML = demandSignals.map((signal) => `
    <article class="signal-card">
      <div class="signal-top">
        <div>
          <strong>${escapeHtml(signal.category)}</strong>
          <p>${escapeHtml(signal.area)}</p>
        </div>
        <span class="signal-badge">${signal.intensity}% pressure</span>
      </div>
      <p>${escapeHtml(signal.summary)}</p>
      <div class="signal-meter" aria-hidden="true">
        <div class="signal-meter-fill" style="width: ${signal.intensity}%"></div>
      </div>
      <p class="request-meta">${escapeHtml(signal.action)}</p>
    </article>
  `).join("");
}

function renderAgents() {
  elements.agentList.innerHTML = agents.map((agent) => `
    <article class="agent-card">
      <span>${escapeHtml(agent.status)}</span>
      <h4>${escapeHtml(agent.name)}</h4>
      <p>${escapeHtml(agent.description)}</p>
    </article>
  `).join("");
}

function renderOrgRequests() {
  elements.orgRequests.innerHTML = orgRequests.map((request) => `
    <article class="request-card">
      <div class="request-top">
        <div>
          <strong>${escapeHtml(request.org)}</strong>
          <p>${escapeHtml(request.need)}</p>
        </div>
        <span class="pill">${escapeHtml(request.area)}</span>
      </div>
      <p class="request-meta">${escapeHtml(request.sla)}</p>
      <div class="request-matches">
        ${request.matchTags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function setupListeners() {
  [
    elements.searchInput,
    elements.categoryFilter,
    elements.areaFilter,
    elements.trackFilter,
    elements.availableFilter
  ].forEach((element) => {
    element.addEventListener("input", renderWorkers);
    element.addEventListener("change", renderWorkers);
  });

  elements.workerList.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) {
      return;
    }

    const workerId = target.dataset.workerId;
    if (!workerId) {
      return;
    }

    if (target.dataset.action === "book-worker") {
      const worker = workers.find((entry) => entry.id === workerId);
      renderWorkerDashboard(workerId);
      renderBookingSummary(worker, {
        issue: worker.category,
        area: worker.area,
        urgency: worker.availability === "available" ? "Standard" : "Planned",
        slot: worker.eta,
        summaryText: "Booking preview generated from a direct worker selection."
      });
      return;
    }

    if (target.dataset.action === "view-worker") {
      renderWorkerDashboard(workerId);
      document.querySelector("#worker-hub").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  elements.workerProfileSelect.addEventListener("change", (event) => {
    renderWorkerDashboard(event.target.value);
  });

  document.querySelectorAll(".prompt-chip").forEach((button) => {
    button.addEventListener("click", () => {
      elements.fixitInput.value = button.dataset.prompt || "";
      runFixitFlow(elements.fixitInput.value);
    });
  });

  elements.fixitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    runFixitFlow(elements.fixitInput.value);
  });

  elements.verificationQueue.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
      return;
    }

    const queueId = button.dataset.queueId;
    const action = button.dataset.queueAction;
    const item = verificationQueue.find((entry) => entry.id === queueId);
    if (!item || !action) {
      return;
    }

    item.status = action;
    if (action === "approved") {
      item.note = `Approved for activation. ${item.note}`;
    } else if (action === "rejected") {
      item.note = `Rejected and sent back for resubmission. ${item.note}`;
    } else if (action === "escalated") {
      item.note = `Escalated for manual review. ${item.note}`;
    }
    renderQueue();
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function init() {
  populateFilters();
  renderWorkers();
  renderWorkerDashboard(state.selectedWorkerId);
  renderBookingSummary(workers[0], {
    issue: workers[0].category,
    area: workers[0].area,
    urgency: "Standard",
    slot: workers[0].eta,
    summaryText: "Starter booking preview using a sample pilot worker."
  });
  renderQueue();
  renderDisputes();
  renderDemandSignals();
  renderAgents();
  renderOrgRequests();
  setupListeners();
  setupRevealAnimations();
}

init();

// Cấu hình mốc thăng cấp
const RANKS = [
  { level: 1, minXp: 0, title: "Tân binh" },
  { level: 2, minXp: 100, title: "Học việc Vòng lặp" },
  { level: 3, minXp: 220, title: "Chiến binh Mảng & Hàm" },
  { level: 4, minXp: 360, title: "Pháp sư Thuật toán" }
];

// Kho nội dung Lý thuyết + Bài tập thực hành
const CURRICULUM = [
  {
    id: "stage-1",
    levelReq: 1,
    title: "Chương 1: Nhập xuất & Biến cơ bản",
    lesson: {
      xp: 15,
      content: `
        <h3>1. Cấu trúc chuẩn của một chương trình C++</h3>
        <p>Mọi chương trình C++ cơ bản đều bắt đầu thực thi từ hàm <code>main()</code>. Thư viện <code>&lt;iostream&gt;</code> cung cấp lệnh nhập <code>cin</code> và xuất <code>cout</code>.</p>
        <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int a, b;
    cin &gt;&gt; a &gt;&gt; b;       // Nhập 2 số nguyên từ bàn phím
    cout &lt;&lt; a + b;      // In tổng ra màn hình
    return 0;
}</code></pre>
        <h3>2. Các kiểu dữ liệu hay dùng</h3>
        <ul>
          <li><code>int</code>: Số nguyên (lưu được khoảng -2 tỷ đến +2 tỷ).</li>
          <li><code>long long</code>: Số nguyên lớn (dùng khi kết quả vượt quá 2 tỷ).</li>
          <li><code>double</code>: Số thực có dấu phẩy động (ví dụ: <code>3.14</code>).</li>
        </ul>
      `
    },
    problems: [
      {
        id: "p1-sum",
        title: "Bài 1: Tổng hai số nguyên",
        xp: 45,
        desc: "Viết chương trình nhập vào hai số nguyên a và b, in ra tổng của chúng.",
        inputDesc: "Hai số nguyên a và b cách nhau bởi dấu cách.",
        outputDesc: "Một số nguyên duy nhất là tổng a + b.",
        starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    // Nhập a, b và in ra a + b\n    \n    return 0;\n}`,
        testCases: [
          { input: "3 5", expected: "8" },
          { input: "-10 25", expected: "15" },
          { input: "100 200", expected: "300" }
        ]
      },
      {
        id: "p1-rect",
        title: "Bài 2: Chu vi & Diện tích HCN",
        xp: 50,
        desc: "Nhập chiều dài và chiều rộng hình chữ nhật (số nguyên dương). In ra chu vi và diện tích cách nhau 1 dấu cách.",
        inputDesc: "Hai số nguyên dương d và r.",
        outputDesc: "Hai số nguyên: chu vi và diện tích, cách nhau bởi một khoảng trắng.",
        starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int d, r;\n    cin >> d >> r;\n    // In ra chu vi và diện tích\n    \n    return 0;\n}`,
        testCases: [
          { input: "4 3", expected: "14 12" },
          { input: "10 5", expected: "30 50" },
          { input: "7 2", expected: "18 14" }
        ]
      }
    ]
  },
  {
    id: "stage-2",
    levelReq: 2,
    title: "Chương 2: Rẽ nhánh & Vòng lặp",
    lesson: {
      xp: 20,
      content: `
        <h3>1. Câu lệnh điều kiện if - else</h3>
        <p>Dùng để kiểm tra điều kiện đúng/sai. Lưu ý phép so sánh bằng trong C++ là <code>==</code> (hai dấu bằng), phép chia lấy dư là <code>%</code>.</p>
        <pre><code>if (n % 2 == 0) {
    cout &lt;&lt; "CHAN";
} else {
    cout &lt;&lt; "LE";
}</code></pre>
        <h3>2. Vòng lặp for</h3>
        <p>Dùng khi biết trước số lần lặp, ví dụ duyệt từ <code>1</code> đến <code>n</code>:</p>
        <pre><code>long long tong = 0;
for (int i = 1; i &lt;= n; i++) {
    tong += i;
}
cout &lt;&lt; tong;</code></pre>
      `
    },
    problems: [
      {
        id: "p2-even-odd",
        title: "Bài 1: Chẵn hay Lẻ?",
        xp: 50,
        desc: "Cho một số nguyên N. In ra CHAN nếu N chia hết cho 2, ngược lại in ra LE.",
        inputDesc: "Một số nguyên N.",
        outputDesc: "In ra CHAN hoặc LE (viết hoa).",
        starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    \n    return 0;\n}`,
        testCases: [
          { input: "8", expected: "CHAN" },
          { input: "15", expected: "LE" },
          { input: "0", expected: "CHAN" }
        ]
      },
      {
        id: "p2-sum-n",
        title: "Bài 2: Tổng từ 1 đến N",
        xp: 60,
        desc: "Tính tổng các số nguyên từ 1 đến N (1 + 2 + ... + N).",
        inputDesc: "Số nguyên dương N (N <= 100000).",
        outputDesc: "Tổng các số từ 1 đến N.",
        starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // Gợi ý: dùng long long cho biến tổng\n    \n    return 0;\n}`,
        testCases: [
          { input: "5", expected: "15" },
          { input: "10", expected: "55" },
          { input: "100000", expected: "5000050000" }
        ]
      }
    ]
  },
  {
    id: "stage-3",
    levelReq: 3,
    title: "Chương 3: Mảng một chiều",
    lesson: {
      xp: 25,
      content: `
        <h3>1. Khai báo và duyệt mảng trong C++</h3>
        <p>Mảng lưu trữ nhiều phần tử cùng kiểu dữ liệu liên tiếp nhau. Chỉ số mảng bắt đầu từ <code>0</code> đến <code>n - 1</code>.</p>
        <pre><code>int n;
cin &gt;&gt; n;
int a[1005];
for (int i = 0; i &lt; n; i++) {
    cin &gt;&gt; a[i];
}</code></pre>
        <h3>2. Kỹ thuật tìm giá trị lớn nhất (Max)</h3>
        <p>Gán <code>maxVal = a[0]</code>, sau đó duyệt qua các phần tử còn lại; nếu <code>a[i] &gt; maxVal</code> thì cập nhật lại <code>maxVal = a[i]</code>.</p>
      `
    },
    problems: [
      {
        id: "p3-max-arr",
        title: "Bài 1: Tìm số lớn nhất trong mảng",
        xp: 80,
        desc: "Cho mảng gồm N số nguyên. Hãy tìm và in ra giá trị lớn nhất trong mảng đó.",
        inputDesc: "Dòng 1 chứa số nguyên N. Dòng 2 chứa N số nguyên cách nhau bởi dấu cách.",
        outputDesc: "Số nguyên lớn nhất trong mảng.",
        starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int a[1005];\n    for (int i = 0; i < n; i++) cin >> a[i];\n    \n    return 0;\n}`,
        testCases: [
          { input: "5\n3 9 1 7 4", expected: "9" },
          { input: "4\n-10 -3 -25 -7", expected: "-3" },
          { input: "1\n42", expected: "42" }
        ]
      }
    ]
  }
];

// Bộ tổng hợp âm thanh Web Audio API (Không cần file mp3 ngoài)
const SoundFX = {
  enabled: true,
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  playTone(freq, type, duration, delay = 0, vol = 0.12) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
    gain.gain.setValueAtTime(vol, this.ctx.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + duration);
  },
  pass() {
    this.playTone(523.25, "triangle", 0.14, 0);      // C5
    this.playTone(659.25, "triangle", 0.14, 0.09);   // E5
    this.playTone(783.99, "triangle", 0.25, 0.18);   // G5
  },
  levelUp() {
    this.playTone(523.25, "sine", 0.15, 0, 0.16);
    this.playTone(659.25, "sine", 0.15, 0.1, 0.16);
    this.playTone(783.99, "sine", 0.15, 0.2, 0.16);
    this.playTone(1046.5, "triangle", 0.45, 0.3, 0.2);
  },
  error() {
    this.playTone(196.0, "sawtooth", 0.16, 0, 0.08);
    this.playTone(155.56, "sawtooth", 0.24, 0.12, 0.08);
  }
};

// Trạng thái lưu trữ
let state = JSON.parse(localStorage.getItem("cpp_rpg_state")) || {
  xp: 0,
  streak: 0,
  readLessons: [],
  solvedProblems: []
};
if (typeof state.streak !== "number") state.streak = 0;

let currentStageIndex = 0;
let currentProblemIndex = 0;

// Khởi tạo trình soạn thảo CodeMirror C++
const cmEditor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
  mode: "text/x-c++src",
  theme: "dracula",
  lineNumbers: true,
  autoCloseBrackets: true,
  indentUnit: 4,
  tabSize: 4
});

// DOM Elements
const roadmapList = document.getElementById("roadmap-list");
const playerLevelEl = document.getElementById("player-level");
const playerRankEl = document.getElementById("player-rank");
const xpBarFill = document.getElementById("xp-bar-fill");
const xpTextEl = document.getElementById("xp-text");
const streakBadgeEl = document.getElementById("streak-badge");
const streakCountEl = document.getElementById("streak-count");

const stageTagEl = document.getElementById("current-stage-tag");
const workspaceTitleEl = document.getElementById("workspace-title");
const tabTheoryBtn = document.getElementById("tab-theory");
const tabPracticeBtn = document.getElementById("tab-practice");
const theoryView = document.getElementById("theory-view");
const practiceView = document.getElementById("practice-view");
const theoryContentEl = document.getElementById("theory-content");
const claimLessonBtn = document.getElementById("claim-lesson-btn");

const problemSelectorEl = document.getElementById("problem-selector");
const problemTitleEl = document.getElementById("problem-title");
const problemXpEl = document.getElementById("problem-xp");
const problemDescEl = document.getElementById("problem-desc");
const problemInputDescEl = document.getElementById("problem-input-desc");
const problemOutputDescEl = document.getElementById("problem-output-desc");
const sampleInputEl = document.getElementById("sample-input");
const sampleOutputEl = document.getElementById("sample-output");
const consoleOutputEl = document.getElementById("console-output");
const testcasePillsEl = document.getElementById("testcase-pills");

function saveState() {
  localStorage.setItem("cpp_rpg_state", JSON.stringify(state));
}

function spawnFloatingXp(amount, targetEl) {
  const rect = targetEl.getBoundingClientRect();
  const badge = document.createElement("div");
  badge.className = "floating-xp";
  badge.textContent = `+${amount} XP ✨`;
  badge.style.left = `${rect.left + rect.width / 2 - 40}px`;
  badge.style.top = `${rect.top - 10}px`;
  document.body.appendChild(badge);
  setTimeout(() => badge.remove(), 1250);
}

function fireConfetti(isBig = false) {
  if (typeof confetti !== "function") return;
  if (isBig) {
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
    setTimeout(() => confetti({ particleCount: 70, angle: 60, spread: 55, origin: { x: 0 } }), 200);
    setTimeout(() => confetti({ particleCount: 70, angle: 120, spread: 55, origin: { x: 1 } }), 350);
  } else {
    confetti({ particleCount: 55, spread: 65, origin: { y: 0.65 } });
  }
}

function getPlayerLevelInfo(xp) {
  let current = RANKS[0];
  let next = null;
  for (let i = 0; i < RANKS.length; i++) {
    if (xp >= RANKS[i].minXp) {
      current = RANKS[i];
      next = RANKS[i + 1] || null;
    }
  }
  return { current, next };
}

function addXp(amount, sourceElement) {
  const beforeLevel = getPlayerLevelInfo(state.xp).current.level;
  state.xp += amount;
  saveState();
  const afterInfo = getPlayerLevelInfo(state.xp);

  if (sourceElement) spawnFloatingXp(amount, sourceElement);
  updateHud();
  renderRoadmap();

  if (afterInfo.current.level > beforeLevel) {
    SoundFX.levelUp();
    fireConfetti(true);
    document.getElementById("levelup-text").textContent =
      `Bạn đã đạt Lv.${afterInfo.current.level} (${afterInfo.current.title}) và mở khóa nội dung mới!`;
    document.getElementById("levelup-modal").classList.remove("hidden");
  } else {
    SoundFX.pass();
    fireConfetti(false);
  }
}

function updateHud() {
  const { current, next } = getPlayerLevelInfo(state.xp);
  playerLevelEl.textContent = `Lv.${current.level}`;
  playerRankEl.textContent = current.title;

  streakCountEl.textContent = state.streak;
  streakBadgeEl.classList.toggle("hot", state.streak >= 2);

  if (next) {
    const progress = ((state.xp - current.minXp) / (next.minXp - current.minXp)) * 100;
    xpBarFill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    xpTextEl.textContent = `${state.xp} / ${next.minXp} XP`;
  } else {
    xpBarFill.style.width = "100%";
    xpTextEl.textContent = `${state.xp} XP (MAX)`;
  }
}

function renderRoadmap() {
  const playerLevel = getPlayerLevelInfo(state.xp).current.level;
  roadmapList.innerHTML = "";

  CURRICULUM.forEach((stage, idx) => {
    const locked = playerLevel < stage.levelReq;
    const solvedCount = stage.problems.filter(p => state.solvedProblems.includes(p.id)).length;
    const lessonDone = state.readLessons.includes(stage.id);

    const div = document.createElement("div");
    div.className = `stage-item ${idx === currentStageIndex ? "active" : ""} ${locked ? "locked" : ""}`;
    div.innerHTML = `
      <div class="stage-item-header">
        <span>${locked ? `🔒 Cần Lv.${stage.levelReq}` : `🔓 Lv.${stage.levelReq}`}</span>
        <span>${lessonDone ? "📖✓" : "📖"} • ${solvedCount}/${stage.problems.length} bài</span>
      </div>
      <div class="stage-item-title">${stage.title}</div>
    `;

    if (!locked) {
      div.onclick = () => {
        currentStageIndex = idx;
        currentProblemIndex = 0;
        renderRoadmap();
        renderWorkspace();
      };
    }
    roadmapList.appendChild(div);
  });
}

function renderWorkspace() {
  const stage = CURRICULUM[currentStageIndex];
  stageTagEl.textContent = `Yêu cầu Lv.${stage.levelReq}`;
  workspaceTitleEl.textContent = stage.title;

  // Render Lý thuyết
  theoryContentEl.innerHTML = stage.lesson.content;
  const lessonRead = state.readLessons.includes(stage.id);
  if (lessonRead) {
    claimLessonBtn.textContent = "✔ Đã nhận XP bài học này";
    claimLessonBtn.disabled = true;
  } else {
    claimLessonBtn.textContent = `✅ Đã hiểu lý thuyết (+${stage.lesson.xp} XP)`;
    claimLessonBtn.disabled = false;
  }

  // Render danh sách bài tập
  problemSelectorEl.innerHTML = "";
  stage.problems.forEach((prob, idx) => {
    const isSolved = state.solvedProblems.includes(prob.id);
    const btn = document.createElement("button");
    btn.className = `prob-chip ${idx === currentProblemIndex ? "active" : ""} ${isSolved ? "solved" : ""}`;
    btn.textContent = `${isSolved ? "✔ " : ""}${prob.title}`;
    btn.onclick = () => {
      currentProblemIndex = idx;
      renderWorkspace();
    };
    problemSelectorEl.appendChild(btn);
  });

  // Render chi tiết bài tập
  const prob = stage.problems[currentProblemIndex];
  problemTitleEl.textContent = prob.title;
  problemXpEl.textContent = state.solvedProblems.includes(prob.id)
    ? "✔ Đã hoàn thành"
    : `+${prob.xp} XP`;
  problemDescEl.textContent = prob.desc;
  problemInputDescEl.textContent = prob.inputDesc;
  problemOutputDescEl.textContent = prob.outputDesc;
  sampleInputEl.textContent = prob.testCases[0].input;
  sampleOutputEl.textContent = prob.testCases[0].expected;

  const savedCode = localStorage.getItem(`code_${prob.id}`);
  cmEditor.setValue(savedCode || prob.starterCode);
  setTimeout(() => cmEditor.refresh(), 15);

  testcasePillsEl.innerHTML = "";
  setConsole("Sẵn sàng chấm bài. Hãy viết code C++ và bấm Nộp bài.", "");
}

function setConsole(text, statusClass) {
  consoleOutputEl.textContent = text;
  consoleOutputEl.className = `console-output ${statusClass}`;
  if (statusClass === "error") {
    consoleOutputEl.classList.remove("shake-anim");
    void consoleOutputEl.offsetWidth; // trigger reflow
    consoleOutputEl.classList.add("shake-anim");
  }
}

// Gọi API Wandbox biên dịch C++ thật
async function executeCpp(sourceCode, stdinInput) {
  const response = await fetch("https://wandbox.org/api/compile.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      compiler: "gcc-head",
      code: sourceCode,
      stdin: stdinInput,
      "compiler-option-raw": "-O2\n-std=c++17"
    })
  });

  if (!response.ok) {
    throw new Error("Máy chủ biên dịch phản hồi lỗi HTTP " + response.status);
  }

  const data = await response.json();

  if (data.status === undefined && data.compiler_error) {
    return { ok: false, errorType: "LỖI BIÊN DỊCH (Compile Error)", detail: data.compiler_error };
  }

  if (data.status !== "0") {
    return {
      ok: false,
      errorType: `LỖI THỰC THI (Exit Code ${data.status})`,
      detail: data.program_error || data.compiler_error || "Chương trình dừng đột ngột."
    };
  }

  return {
    ok: true,
    output: (data.program_output || "").replace(/\r\n/g, "\n").trim()
  };
}

// Chạy thử ví dụ
async function handleRunSample() {
  const prob = CURRICULUM[currentStageIndex].problems[currentProblemIndex];
  const rawCode = cmEditor.getValue();

  if (!rawCode.trim()) {
    SoundFX.error();
    setConsole("❌ Bạn chưa nhập code C++!", "error");
    return;
  }

  localStorage.setItem(`code_${prob.id}`, rawCode);
  testcasePillsEl.innerHTML = `<span class="tc-pill running">⏳ Ví dụ #1</span>`;
  setConsole("⏳ Đang biên dịch và chạy thử ví dụ...", "");

  try {
    const sample = prob.testCases[0];
    const res = await executeCpp(rawCode, sample.input);

    if (!res.ok) {
      SoundFX.error();
      testcasePillsEl.innerHTML = `<span class="tc-pill fail">✖ Lỗi biên dịch</span>`;
      setConsole(`❌ ${res.errorType}:\n${res.detail}`, "error");
      return;
    }

    const passed = res.output === sample.expected.trim();
    if (passed) {
      SoundFX.pass();
      testcasePillsEl.innerHTML = `<span class="tc-pill pass">✔ Ví dụ #1</span>`;
      setConsole(
        `✅ Chạy thử ví dụ KHỚP!\n• Input: ${sample.input}\n• Output của bạn: ${res.output}\n\n👉 Bấm "Nộp bài chấm điểm" để kiểm tra toàn bộ test case ẩn và nhận XP!`,
        "success"
      );
    } else {
      SoundFX.error();
      testcasePillsEl.innerHTML = `<span class="tc-pill fail">✖ Ví dụ #1</span>`;
      setConsole(
        `⚠️ Output chưa khớp ví dụ:\n• Input: ${sample.input}\n• Mong đợi: ${sample.expected}\n• Thực tế: ${res.output || "(Không in ra gì)"}`,
        "error"
      );
    }
  } catch (err) {
    SoundFX.error();
    setConsole(`❌ Không thể kết nối trình biên dịch: ${err.message}`, "error");
  }
}

// Nộp bài chấm điểm toàn bộ test case
async function handleSubmitCode() {
  const prob = CURRICULUM[currentStageIndex].problems[currentProblemIndex];
  const rawCode = cmEditor.getValue();
  const submitBtn = document.getElementById("submit-code-btn");

  if (!rawCode.trim()) {
    SoundFX.error();
    setConsole("❌ Bạn chưa nhập code C++!", "error");
    return;
  }

  localStorage.setItem(`code_${prob.id}`, rawCode);
  submitBtn.disabled = true;
  testcasePillsEl.innerHTML = "";

  try {
    for (let i = 0; i < prob.testCases.length; i++) {
      const tc = prob.testCases[i];
      const pill = document.createElement("span");
      pill.className = "tc-pill running";
      pill.textContent = `⏳ Test #${i + 1}`;
      testcasePillsEl.appendChild(pill);

      setConsole(`⏳ Đang chấm Test case ${i + 1}/${prob.testCases.length}...`, "");
      const res = await executeCpp(rawCode, tc.input);

      if (!res.ok) {
        pill.className = "tc-pill fail";
        pill.textContent = `✖ Test #${i + 1}`;
        state.streak = 0;
        saveState();
        updateHud();
        SoundFX.error();
        setConsole(`❌ ${res.errorType}:\n${res.detail}`, "error");
        return;
      }

      if (res.output !== tc.expected.trim()) {
        pill.className = "tc-pill fail";
        pill.textContent = `✖ Test #${i + 1}`;
        state.streak = 0;
        saveState();
        updateHud();
        SoundFX.error();
        setConsole(
          `❌ SAI Ở TEST CASE #${i + 1}:\n• Input: ${tc.input}\n• Đáp án đúng: ${tc.expected}\n• Output của bạn: ${res.output || "(Trống)"}`,
          "error"
        );
        return;
      }

      pill.className = "tc-pill pass";
      pill.textContent = `✔ Test #${i + 1}`;
    }

    // Vượt qua 100% test case
    state.streak += 1;
    const alreadySolved = state.solvedProblems.includes(prob.id);

    if (!alreadySolved) {
      state.solvedProblems.push(prob.id);
      addXp(prob.xp, submitBtn);
      renderWorkspace();
      // Giữ lại các pill xanh sau khi renderWorkspace
      prob.testCases.forEach((_, idx) => {
        const p = document.createElement("span");
        p.className = "tc-pill pass";
        p.textContent = `✔ Test #${idx + 1}`;
        testcasePillsEl.appendChild(p);
      });
      setConsole(
        `🎉 CHÍNH XÁC! Vượt qua ${prob.testCases.length}/${prob.testCases.length} test case.\n🏆 Bạn nhận được +${prob.xp} XP! (Chuỗi thắng: ${state.streak} 🔥)`,
        "success"
      );
    } else {
      saveState();
      updateHud();
      SoundFX.pass();
      setConsole(
        `✅ CHÍNH XÁC! Vượt qua ${prob.testCases.length}/${prob.testCases.length} test case.\n(Bạn đã nhận XP cho bài này trước đó • Chuỗi thắng: ${state.streak} 🔥)`,
        "success"
      );
    }
  } catch (err) {
    SoundFX.error();
    setConsole(`❌ Lỗi kết nối máy chủ chấm bài: ${err.message}`, "error");
  } finally {
    submitBtn.disabled = false;
  }
}

// Chuyển tab Lý thuyết / Luyện tập
tabTheoryBtn.onclick = () => {
  tabTheoryBtn.classList.add("active");
  tabPracticeBtn.classList.remove("active");
  theoryView.classList.remove("hidden");
  practiceView.classList.add("hidden");
};

tabPracticeBtn.onclick = () => {
  tabPracticeBtn.classList.add("active");
  tabTheoryBtn.classList.remove("active");
  practiceView.classList.remove("hidden");
  theoryView.classList.add("hidden");
  setTimeout(() => cmEditor.refresh(), 15);
};

// Nhận thưởng đọc lý thuyết
claimLessonBtn.onclick = () => {
  const stage = CURRICULUM[currentStageIndex];
  if (!state.readLessons.includes(stage.id)) {
    state.readLessons.push(stage.id);
    addXp(stage.lesson.xp, claimLessonBtn);
    renderWorkspace();
  }
};

document.getElementById("reset-code-btn").onclick = () => {
  const prob = CURRICULUM[currentStageIndex].problems[currentProblemIndex];
  cmEditor.setValue(prob.starterCode);
  localStorage.removeItem(`code_${prob.id}`);
  testcasePillsEl.innerHTML = "";
  setConsole("Đã khôi phục code mẫu.", "");
};

document.getElementById("run-sample-btn").onclick = handleRunSample;
document.getElementById("submit-code-btn").onclick = handleSubmitCode;

document.getElementById("sound-toggle-btn").onclick = (e) => {
  SoundFX.enabled = !SoundFX.enabled;
  e.target.textContent = SoundFX.enabled ? "🔊" : "🔇";
};

document.getElementById("close-modal-btn").onclick = () => {
  document.getElementById("levelup-modal").classList.add("hidden");
};

document.getElementById("reset-btn").onclick = () => {
  if (confirm("Bạn có chắc muốn xóa toàn bộ cấp độ và XP để chơi lại từ đầu?")) {
    localStorage.clear();
    state = { xp: 0, streak: 0, readLessons: [], solvedProblems: [] };
    currentStageIndex = 0;
    currentProblemIndex = 0;
    updateHud();
    renderRoadmap();
    renderWorkspace();
  }
};

// Khởi chạy ứng dụng
updateHud();
renderRoadmap();
renderWorkspace();
updateHud();
renderRoadmap();
renderWorkspace();

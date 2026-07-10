const GAS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyol21K7nF7oQYlGAUgOGF4hUqQ5ygeCfCMoD3ypjjv_GEYMdxV5FJmZTJBdWLvdcKH-w/exec";

const PASSAGE_READING_TIME_MS = 3 * 60 * 1000;

const passage = `フランス南部にあるカルカソンヌ城塞都市は、ヨーロッパでも特に保存状態のよい中世の城塞都市として知られている。現在のカルカソンヌには、約3kmにおよぶ城壁と52の塔が残されており、外側と内側の二重の城壁が町を取り囲んでいる。このような構造は、単に町の周囲を石で囲んだだけのものではない。敵が外側の城壁を突破したとしても、すぐに町の中心部へ入れるわけではなく、内側の城壁との間で動きを制限される。つまり、カルカソンヌの防御は「一度防ぐ」ためだけではなく、「突破された後も敵を遅らせ、混乱させる」ことを考えた仕組みであった。

カルカソンヌが重要な場所となった理由の一つは、その立地にある。この地域は、地中海方面と大西洋方面を結ぶ道、またピレネー山脈方面とフランス内陸部をつなぐ道に近かった。そのため、カルカソンヌは軍事的な拠点であると同時に、人や物資が行き交う交通上の要地でもあった。城塞都市を守ることは、そこに住む人々を守るだけでなく、周辺地域の支配や交易路の管理にもつながっていた。

城塞都市の内部には、城だけでなく、住居、教会、狭い道、広場などが存在した。つまりカルカソンヌは、王や兵士だけが使う軍事施設ではなく、人々が生活する町でもあった。城壁は、外敵から町を守る役割を持つ一方で、「ここから内側は支配者によって守られ、管理されている場所である」という印象も与えていた。高い塔や厚い壁は、敵に対して攻めにくさを示すだけでなく、住民や周辺地域に対して支配者の力を見せる役割も果たしていたと考えられる。

カルカソンヌの城壁や塔は、一度にすべて作られたわけではない。古代ローマ時代から防御拠点として使われ、その後も時代ごとに改修や拡張が行われた。特に13世紀には、フランス王権の支配と関わる重要な拠点として防御機能が強化された。城門、塔、城壁の配置には、敵の進入を遅らせたり、上から攻撃したり、侵入経路を限定したりする意図が見られる。カルカソンヌの構造を見ると、中世の城塞都市が単なる「壁に囲まれた町」ではなく、軍事・政治・生活が結びついた複雑な空間であったことがわかる。

一方で、現在私たちが見るカルカソンヌの姿は、中世から完全にそのまま残っているわけではない。19世紀には城塞都市の一部が荒廃し、取り壊しの可能性もあった。しかし、歴史的価値を重視する動きが起こり、建築家ヴィオレ＝ル＝デュクらによって大規模な修復が行われた。この修復によって、カルカソンヌは中世城塞都市らしい姿を取り戻したが、同時に「どこまでが中世の姿で、どこからが19世紀の人々が考えた中世像なのか」という問題も生まれた。

現在のカルカソンヌは、世界遺産として保護され、多くの観光客が訪れる場所となっている。観光地としての価値が高まることは、地域経済や文化の発信にとって大きな利点である。しかし、多くの人が訪れることで、住民の生活、建物の保存、観光施設化とのバランスを取る必要もある。カルカソンヌ城塞都市は、防御のために作られた中世の都市であると同時に、現代では「歴史をどのように残し、見せるべきか」を考えさせる場所でもある。`;

const questions = [
  {
    type: "choice",
    questionText: `問1　本文内容の理解

カルカソンヌ城塞都市の特徴として、本文の内容に最も合うものを1つ選びなさい。`,
    choices: [
      {
        label: "城だけが残っており、町としての機能はほとんどなかった。",
        value: "1"
      },
      {
        label: "二重の城壁や多数の塔を備えた、生活空間を含む城塞都市であった。",
        value: "2"
      },
      {
        label: "観光のために近代になって新しく建設された城塞都市であった。",
        value: "3"
      },
      {
        label: "防御よりも王の娯楽施設として作られた都市であった。",
        value: "4"
      }
    ],
    correctAnswer: "2",
    answerAliases: ["2", "２"]
  },
  {
    type: "choice",
    questionText: `問2　防御構造の理解

本文によると、カルカソンヌの二重城壁にはどのような利点があったと考えられるか。最も適切なものを1つ選びなさい。`,
    choices: [
      {
        label: "敵が外側の城壁を越えても、すぐに中心部へ入れないようにするため。",
        value: "1"
      },
      {
        label: "住民が外側と内側で身分ごとに分かれて暮らすため。",
        value: "2"
      },
      {
        label: "城壁の内側に農地を広げるため。",
        value: "3"
      },
      {
        label: "観光客が歩きやすい通路を作るため。",
        value: "4"
      }
    ],
    correctAnswer: "1",
    answerAliases: ["1", "１"]
  },
  {
    type: "input",
    questionText: `問3　語句抜き出し

本文では、カルカソンヌは軍事的な拠点であると同時に、どのような場所でもあったと述べられているか。
本文中から6字で抜き出しなさい。`,
    inputPlaceholder: "本文中から6字で入力",
    correctAnswer: "交通上の要地",
    answerAliases: ["交通上の要地"]
  },
  {
    type: "choice",
    questionText: `問4　空欄補充

次の文の空欄に入る語句として最も適切なものを選びなさい。

カルカソンヌの城壁や塔は、敵に対して攻めにくさを示すだけでなく、住民や周辺地域に対して支配者の（　　　）を示す役割もあった。`,
    choices: [
      {
        label: "財産",
        value: "1"
      },
      {
        label: "信仰",
        value: "2"
      },
      {
        label: "力",
        value: "3"
      },
      {
        label: "移動",
        value: "4"
      }
    ],
    correctAnswer: "3",
    answerAliases: ["3", "３"]
  },
  {
    type: "choice",
    questionText: `問5　本文からの推論

本文では、カルカソンヌは「単なる壁に囲まれた町」ではないと説明されている。その理由として最も適切なものを1つ選びなさい。`,
    choices: [
      {
        label: "城壁が美しく、観光地として人気があるから。",
        value: "1"
      },
      {
        label: "軍事、防御、生活、政治的支配が結びついた空間だったから。",
        value: "2"
      },
      {
        label: "町の中に住民がまったくいなかったから。",
        value: "3"
      },
      {
        label: "すべての建物が同じ時代に作られたから。",
        value: "4"
      }
    ],
    correctAnswer: "2",
    answerAliases: ["2", "２"]
  },
  {
    type: "choice",
    questionText: `問6　正誤判断

本文の内容と誤っているものを選びなさい。`,
    choices: [
      {
        label: "カルカソンヌの防御は、敵を一度防ぐだけでなく、侵入後も動きを遅らせることを考えていた。",
        value: "1"
      },
      {
        label: "カルカソンヌは、交通路とは関係のない孤立した山奥に作られた。",
        value: "2"
      },
      {
        label: "城壁は外敵への防御だけでなく、支配者の力を示す役割も持っていた。",
        value: "3"
      },
      {
        label: "現在見られるカルカソンヌの姿には、19世紀の修復の影響も含まれている。",
        value: "4"
      }
    ],
    correctAnswer: "2",
    answerAliases: ["2", "２"]
  },
  {
    type: "choice",
    questionText: `問7　並び変え問題

本文の流れに合うように、次の内容を古い順に並べ変えたとき、３番目に来るものを選びなさい。`,
    choices: [
      {
        label: "ヴィオレ＝ル＝デュクらによる修復が行われた。",
        value: "1"
      },
      {
        label: "防御拠点として使われた。",
        value: "2"
      },
      {
        label: "世界遺産として保護され、多くの観光客が訪れた。",
        value: "3"
      },
      {
        label: "フランス王権と関わる重要な拠点として防御機能が強化された。",
        value: "4"
      }
    ],
    correctAnswer: "1",
    answerAliases: ["1", "１"]
  },
  {
    type: "choice",
    questionText: `問8　やや難しい推論問題

本文では、城壁が「住民や周辺地域に対して支配者の力を見せる役割も果たした」と述べられている。
このように考えられる理由として、最も適切なものを1つ選びなさい。`,
    choices: [
      {
        label: "城壁があることで、支配者がその地域を守り管理していることを視覚的に示せるから。",
        value: "1"
      },
      {
        label: "城壁があることで、住民が自由に外へ出られなくなるから。",
        value: "2"
      },
      {
        label: "城壁があることで、すべての交易を禁止できるから。",
        value: "3"
      },
      {
        label: "城壁があることで、敵と住民の区別が完全になくなるから。",
        value: "4"
      }
    ],
    correctAnswer: "1",
    answerAliases: ["1", "１"]
  },
  {
    type: "multiInput",
    multiInputMode: "ordered",
    questionText: `問9　語句抜き出し

19世紀の修復によって、カルカソンヌは中世城塞都市らしい姿を取り戻した。
一方で、現在見られる姿について、本文ではどの2つを区別することが問題になったと述べられているか。
本文中から、4字と14字でそれぞれ抜き出しなさい。（数字は半角）
※数字も1字として数える。`,
    inputFields: [
      {
        label: "4字の語句",
        placeholder: "4字の語句を入力"
      },
      {
        label: "14字の語句",
        placeholder: "14字の語句を入力"
      }
    ],
    correctAnswer: "中世の姿、19世紀の人々が考えた中世像",
    expectedParts: [
      "中世の姿",
      "19世紀の人々が考えた中世像"
    ]
  },
  {
    type: "multiInput",
    multiInputMode: "unordered",
    questionText: `問10　語句抜き出し

現在のカルカソンヌでは、多くの観光客が訪れることで、いくつかの要素のバランスを取る必要があると述べられている。
本文中から、その3つの要素をそれぞれ5字で抜き出しなさい。（順不同）`,
    inputFields: [
      {
        label: "1つ目の語句",
        placeholder: "5字の語句を入力"
      },
      {
        label: "2つ目の語句",
        placeholder: "5字の語句を入力"
      },
      {
        label: "3つ目の語句",
        placeholder: "5字の語句を入力"
      }
    ],
    correctAnswer: "住民の生活、建物の保存、観光施設化",
    expectedParts: [
      "住民の生活",
      "建物の保存",
      "観光施設化"
    ]
  }
];

const totalQuestions = questions.length;

let progressMode = "text";
let currentIndex = 0;
let startTime = null;
let results = [];
let participantName = "";
let currentQuestion = null;
let backspaceCount = 0;
let passageTimerId = null;

let isQuestionLocked = false;
let isSubmitted = false;

const settingScreen = document.getElementById("settingScreen");
const startScreen = document.getElementById("startScreen");
const passageScreen = document.getElementById("passageScreen");
const testScreen = document.getElementById("testScreen");

const nameInput = document.getElementById("nameInput");
const progressModeSelect = document.getElementById("progressModeSelect");
const goStartBtn = document.getElementById("goStartBtn");

const startBtn = document.getElementById("startBtn");

const passageText = document.getElementById("passageText");

const testPassageText = document.getElementById("testPassageText");

const progressText = document.getElementById("progressText");

const progressBarWrap = document.getElementById("progressBarWrap");
const progressBar = document.getElementById("progressBar");

const circleProgressWrap = document.getElementById("circleProgressWrap");
const circleFg = document.getElementById("circleFg");

const questionEl = document.getElementById("question");
const choiceArea = document.getElementById("choiceArea");
const multiAnswerArea = document.getElementById("multiAnswerArea");
const answerInput = document.getElementById("answerInput");
const nextBtn = document.getElementById("nextBtn");

const submitArea = document.getElementById("submitArea");
const sendBtn = document.getElementById("sendBtn");

const circleRadius = 45;
const circleLength = 2 * Math.PI * circleRadius;

function goToStartScreen() {
  participantName = nameInput.value.trim();

  if (participantName === "") {
    alert("名前を入力してください");
    return;
  }

  progressMode = progressModeSelect.value;

  settingScreen.style.display = "none";
  startScreen.style.display = "flex";
}

function startTest() {
  currentIndex = 0;
  results = [];
  isQuestionLocked = false;
  isSubmitted = false;

  clearPassageTimer();

  questionEl.style.display = "block";
  choiceArea.style.display = "block";
  multiAnswerArea.style.display = "none";
  answerInput.style.display = "inline-block";
  nextBtn.style.display = "block";
  nextBtn.disabled = false;

  submitArea.style.display = "none";
  sendBtn.disabled = false;
  sendBtn.textContent = "送信";

  passageText.textContent = passage;
  testPassageText.textContent = passage;

  startScreen.style.display = "none";
  passageScreen.style.display = "flex";

  startPassageTimer();
}

function startPassageTimer() {
  clearPassageTimer();

  passageTimerId = setTimeout(() => {
    goToQuestionScreen();
  }, PASSAGE_READING_TIME_MS);
}

function clearPassageTimer() {
  if (passageTimerId !== null) {
    clearTimeout(passageTimerId);
    passageTimerId = null;
  }
}

function goToQuestionScreen() {
  clearPassageTimer();

  passageScreen.style.display = "none";
  testScreen.style.display = "flex";

  showQuestion();
}

function generateQuestion() {
  const q = questions[currentIndex];

  return {
    type: q.type,
    multiInputMode: q.multiInputMode || "ordered",
    questionText: q.questionText,
    choices: q.choices || [],
    inputFields: q.inputFields || [],
    inputPlaceholder: q.inputPlaceholder || "答えを入力",
    correctAnswer: q.correctAnswer,
    answerAliases: q.answerAliases || [],
    expectedParts: q.expectedParts || []
  };
}

function showQuestion() {
  currentQuestion = generateQuestion();

  updateProgress();

  questionEl.textContent = currentQuestion.questionText;

  renderQuestionInput(currentQuestion);

  questionEl.style.display = "block";
  nextBtn.style.display = "block";
  submitArea.style.display = "none";

  backspaceCount = 0;
  startTime = performance.now();

  isQuestionLocked = false;
  nextBtn.disabled = false;

  if (currentQuestion.type === "input") {
    answerInput.focus();
  } else if (currentQuestion.type === "multiInput") {
    const firstMultiInput = document.querySelector(".multiAnswerInput");
    if (firstMultiInput) {
      firstMultiInput.focus();
    }
  }
}

function renderQuestionInput(question) {
  choiceArea.innerHTML = "";
  multiAnswerArea.innerHTML = "";
  answerInput.value = "";

  if (question.type === "choice") {
    choiceArea.style.display = "block";
    multiAnswerArea.style.display = "none";
    answerInput.style.display = "none";
    renderChoices(question.choices);
  } else if (question.type === "multiInput") {
    choiceArea.style.display = "none";
    multiAnswerArea.style.display = "block";
    answerInput.style.display = "none";
    renderMultiInputs(question.inputFields);
  } else {
    choiceArea.style.display = "none";
    multiAnswerArea.style.display = "none";
    answerInput.style.display = "inline-block";
    answerInput.placeholder = question.inputPlaceholder;
  }
}

function renderChoices(choices) {
  choiceArea.innerHTML = "";

  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choiceBtn";
    button.dataset.value = choice.value;
    button.textContent = `${index + 1}. ${choice.label}`;

    button.addEventListener("click", () => {
      answerInput.value = choice.value;

      const allChoiceButtons = document.querySelectorAll(".choiceBtn");
      allChoiceButtons.forEach(btn => {
        btn.classList.remove("selectedChoice");
      });

      button.classList.add("selectedChoice");
    });

    choiceArea.appendChild(button);
  });
}

function renderMultiInputs(inputFields) {
  multiAnswerArea.innerHTML = "";

  inputFields.forEach((field, index) => {
    const fieldWrap = document.createElement("div");
    fieldWrap.className = "multiAnswerField";

    const label = document.createElement("label");
    label.className = "multiAnswerLabel";
    label.textContent = field.label;
    label.setAttribute("for", `multiAnswerInput${index + 1}`);

    const input = document.createElement("input");
    input.id = `multiAnswerInput${index + 1}`;
    input.className = "multiAnswerInput";
    input.type = "text";
    input.autocomplete = "off";
    input.placeholder = field.placeholder;

    input.addEventListener("keydown", event => {
      if (event.key === "Backspace") {
        backspaceCount++;
      }

      if (event.key === "Enter") {
        nextQuestion();
      }
    });

    fieldWrap.appendChild(label);
    fieldWrap.appendChild(input);
    multiAnswerArea.appendChild(fieldWrap);
  });
}

function updateProgress() {
  const answeredCount = currentIndex;
  const percent = answeredCount / totalQuestions;

  progressText.textContent = `回答数：${answeredCount} / ${totalQuestions}`;

  progressBar.style.width = `${percent * 100}%`;

  circleFg.style.strokeDasharray = circleLength;
  circleFg.style.strokeDashoffset = circleLength * (1 - percent);

  progressText.style.display = "none";
  progressBarWrap.style.display = "none";
  circleProgressWrap.style.display = "none";

  if (progressMode === "text") {
    progressText.style.display = "block";
  } else if (progressMode === "bar") {
    progressBarWrap.style.display = "block";
  } else if (progressMode === "both") {
    progressText.style.display = "block";
    progressBarWrap.style.display = "block";
  } else if (progressMode === "circle") {
    circleProgressWrap.style.display = "block";
  } else if (progressMode === "circleBoth") {
    progressText.style.display = "block";
    circleProgressWrap.style.display = "block";
  }
}

function toHalfWidth(value) {
  return String(value)
    .replace(/[０-９]/g, char => {
      return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
    })
    .replace(/[Ａ-Ｚａ-ｚ]/g, char => {
      return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
    });
}

function normalizeAnswer(value) {
  return toHalfWidth(value)
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[　]/g, "")
    .replace(/[、。,.・:：;；]/g, "")
    .replace(/[→＞>－\-ー―]/g, "")
    .replace(/[（）()「」『』【】\[\]]/g, "");
}

function getMultiAnswerValues() {
  const inputs = document.querySelectorAll(".multiAnswerInput");

  return Array.from(inputs).map(input => {
    return input.value.trim();
  });
}

function isCorrectMultiInput(userAnswerValues, question) {
  const normalizedUserValues = userAnswerValues.map(value => normalizeAnswer(value));
  const normalizedExpectedParts = question.expectedParts.map(part => normalizeAnswer(part));

  if (question.multiInputMode === "unordered") {
    return normalizedExpectedParts.every(expectedPart => {
      return normalizedUserValues.includes(expectedPart);
    });
  }

  return normalizedExpectedParts.every((expectedPart, index) => {
    return normalizedUserValues[index] === expectedPart;
  });
}

function isCorrectAnswer(userAnswer, question, userAnswerValues = []) {
  if (question.type === "multiInput") {
    return isCorrectMultiInput(userAnswerValues, question);
  }

  const normalizedUserAnswer = normalizeAnswer(userAnswer);

  if (question.expectedParts && question.expectedParts.length > 0) {
    return question.expectedParts.every(part => {
      return normalizedUserAnswer.includes(normalizeAnswer(part));
    });
  }

  const acceptableAnswers = [
    question.correctAnswer,
    ...question.answerAliases
  ];

  return acceptableAnswers.some(answer => {
    return normalizedUserAnswer === normalizeAnswer(answer);
  });
}

function getUserAnswer() {
  if (currentQuestion.type === "multiInput") {
    const values = getMultiAnswerValues();

    return values.join("、");
  }

  return answerInput.value.trim();
}

function isAnswerEmpty() {
  if (currentQuestion.type === "multiInput") {
    const values = getMultiAnswerValues();

    return values.some(value => value === "");
  }

  return answerInput.value.trim() === "";
}

function nextQuestion() {
  if (isQuestionLocked) {
    return;
  }

  if (isAnswerEmpty()) {
    alert("答えを入力してください");
    return;
  }

  const userAnswer = getUserAnswer();
  const userAnswerValues = currentQuestion.type === "multiInput"
    ? getMultiAnswerValues()
    : [];

  isQuestionLocked = true;
  nextBtn.disabled = true;

  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  const correct = isCorrectAnswer(userAnswer, currentQuestion, userAnswerValues);

  results.push({
    questionNumber: currentIndex + 1,
    userAnswer: userAnswer,
    isCorrect: correct,
    timeMs: Math.round(elapsedTime),
    timeSec: (elapsedTime / 1000).toFixed(3),
    backspaceCount: backspaceCount
  });

  currentIndex++;

  if (currentIndex < totalQuestions) {
    showQuestion();
  } else {
    showSubmitScreen();
  }
}

function showSubmitScreen() {
  updateProgress();

  questionEl.style.display = "none";
  choiceArea.style.display = "none";
  multiAnswerArea.style.display = "none";
  answerInput.style.display = "none";
  nextBtn.style.display = "none";

  submitArea.style.display = "block";
  sendBtn.disabled = false;
  sendBtn.textContent = "送信";
}

function finishTest() {
  if (isSubmitted) {
    return;
  }

  isSubmitted = true;
  sendBtn.disabled = true;
  sendBtn.textContent = "送信中...";

  sendResultsToSpreadsheet();
}

function createOneRowResult() {
  const oneRowResult = {
    name: participantName
  };

  for (let i = 0; i < totalQuestions; i++) {
    const result = results[i];

    oneRowResult[`q${i + 1}Answer`] = result ? result.userAnswer : "";
    oneRowResult[`q${i + 1}Correct`] = result
      ? (result.isCorrect ? "正" : "誤")
      : "";
  }

  const correctCount = results.filter(result => result.isCorrect).length;
  oneRowResult.correctCount = correctCount;

  return oneRowResult;
}

async function sendResultsToSpreadsheet() {
  const oneRowResult = createOneRowResult();

  const payload = {
    results: [
      oneRowResult
    ]
  };

  try {
    await fetch(GAS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    sendBtn.textContent = "送信済み";
    alert("テスト終了。結果を送信しました。");

  } catch (error) {
    isSubmitted = false;
    sendBtn.disabled = false;
    sendBtn.textContent = "送信";

    alert("送信に失敗しました。予備としてCSVを保存します。");
    downloadCSV();
  }
}

function escapeCSV(value) {
  return String(value).replace(/"/g, '""');
}

function downloadCSV() {
  const oneRowResult = createOneRowResult();

  let headers = ["名前"];
  let values = [`"${escapeCSV(oneRowResult.name)}"`];

  for (let i = 1; i <= totalQuestions; i++) {
    headers.push(`${i}問目の回答`);
    headers.push(`${i}問目の正誤`);

    values.push(`"${escapeCSV(oneRowResult[`q${i}Answer`])}"`);
    values.push(`"${escapeCSV(oneRowResult[`q${i}Correct`])}"`);
  }

  headers.push("正解数");
  values.push(oneRowResult.correctCount);

  const csv =
    headers.join(",") +
    "\n" +
    values.join(",") +
    "\n";

  const blob = new Blob(
    ["\uFEFF" + csv],
    { type: "text/csv" }
  );

  const url = URL.createObjectURL(blob);

  const safeName = participantName.replace(/[\\/:*?"<>|]/g, "_");

  const a = document.createElement("a");
  a.href = url;
  a.download = `${safeName}_reading_test_results.csv`;
  a.click();

  URL.revokeObjectURL(url);
}

goStartBtn.addEventListener("click", goToStartScreen);

nameInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    goToStartScreen();
  }
});

startBtn.addEventListener("click", startTest);

nextBtn.addEventListener("click", nextQuestion);

sendBtn.addEventListener("click", finishTest);

answerInput.addEventListener("keydown", event => {
  if (event.key === "Backspace") {
    backspaceCount++;
  }

  if (event.key === "Enter") {
    nextQuestion();
  }
});

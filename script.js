// ================= i18n - LANGUAGE ENGLISH - CHINESE =================
const i18n = {
  en: {
    frontTitle: "A little invitation",
    frontHint: "Tap or click to flip",
    dear: "Dear Ran",
    ask:
      "Would you like to grab a <strong>Bubble Tea</strong> with me this <strong>Friday 29</strong> at <strong>20:30</strong> (Madrid time)?",
    yes: "Yes, let's go!",
    maybe: "Suggest another time",
    back: "↩︎ Back",
    copyMsg: "Yes! Bubble Tea on Friday 29/08/2025 at 20:30 (Madrid) 🍹",
    yesDone: "See you! ✅"
  },
  zh: {
    frontTitle: "一个小小的邀请",
    frontHint: "点击或轻触翻面",
    dear: "亲爱的 Ran",
    ask:
      "这个<strong>星期五 29 号</strong><strong>20:30</strong>（马德里时间），愿意和我一起去喝<strong>奶茶</strong>吗？",
    yes: "好的，一起去！",
    maybe: "换个时间",
    back: "↩︎ 返回",
    copyMsg: "好的！周五 29/08/2025 20:30（马德里）奶茶见 🍹",
    yesDone: "到时见！✅"
  }
};

let currentLang = "en";

// ================= Elements =================
const card = document.querySelector(".card");
const btnFlipBack = document.getElementById("btnFlipBack");
const btnYes = document.getElementById("btnYes");
const btnMaybe = document.getElementById("btnMaybe");
const langEn = document.getElementById("lang-en");
const langZh = document.getElementById("lang-zh");

// Flip efecto
function toggleFlip(forceState) {
  const isFlipped = card.classList.contains("is-flipped");
  const next = typeof forceState === "boolean" ? forceState : !isFlipped;
  card.classList.toggle("is-flipped", next);
  card.setAttribute("aria-pressed", String(next));
}

card.addEventListener("click", (e) => {
  if (e.target.closest("button")) return;
  toggleFlip();
});

card.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleFlip();
  }
});

btnFlipBack.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleFlip(false);
});

// i18n actualizo idioma
function applyLang(lang) {
  currentLang = lang;

  // Setteo segun presione el idioma (banderas)
  langEn.setAttribute("aria-pressed", String(lang === "en"));
  langZh.setAttribute("aria-pressed", String(lang === "zh"));

  const dict = i18n[lang];

  // Actualizando el texto
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    // Some nodes contain HTML (bold parts)
    if (["ask"].includes(key)) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });

  
  btnFlipBack.title = dict.back.replace("↩︎ ", "");
}

langEn.addEventListener("click", (e) => {
  e.stopPropagation();
  applyLang("en");
});
langZh.addEventListener("click", (e) => {
  e.stopPropagation();
  applyLang("zh");
});

// Accciones con los botones
btnYes.addEventListener("click", (e) => {
  e.stopPropagation();
  const dict = i18n[currentLang];
  navigator.clipboard?.writeText(dict.copyMsg).then(() => {
    const old = btnYes.textContent;
    btnYes.textContent = dict.yesDone;
    setTimeout(() => (btnYes.textContent = dict.yes), 1800);
  });
});

btnMaybe.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentLang === "zh") {
    alert("告诉我你方便的日期和时间，我们再安排 🗓️");
  } else {
    alert("Tell me the day/time that works for you and we’ll adjust 🗓️");
  }
});

// Iniciio de idioma por defecto
applyLang(currentLang);

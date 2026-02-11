// Кнопки-картинки и обычные кнопки
const nextBtn = document.getElementById("next-btn");
const openYes = document.getElementById("open-yes");
const openNo = document.getElementById("open-no");
const finalYes = document.getElementById("final-yes");
const finalNo = document.getElementById("final-no");
const askingPic = document.getElementById("asking-pic");

// Экраны (контейнеры)
const screen1 = document.getElementById("envelope-screen");
const screen2 = document.getElementById("asking-page");
const screen3 = document.getElementById("valentine-page");
const screen4 = document.getElementById("celeb");

const question1 = document.getElementById("question1");

// 1. Переход от конверта к вопросу "Открыть?"
nextBtn.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
});

// 2. Логика для первого "Нет"
let noCount1 = 0;
openNo.addEventListener("click", () => {
  noCount1++;
  if (noCount1 === 1) {
    question1.innerText = "Are you sure?? Try again";
    askingPic.src = "assets/image.png";
  } else if (noCount1 === 2) {
    question1.innerText = "Pleaseee... Open!";
    askingPic.src = "assets/child.jpg";
  } else {
    openNo.style.display = "none";
  }
});

// 3. Переход ко второму вопросу
openYes.addEventListener("click", () => {
  screen2.classList.add("hidden");
  screen3.classList.remove("hidden");
});

// 4. Логика для финального вопроса
let finalNoSize = 1;
let finalYesSize = 1;

finalNo.addEventListener("click", () => {
  finalNoSize -= 0.1;
  finalYesSize += 0.5; // Картинка "ДА" растет при каждом нажатии "НЕТ"

  finalNo.style.transform = `scale(${finalNoSize})`;
  finalYes.style.transform = `scale(${finalYesSize})`;

  if (finalNoSize <= 0.2) {
    finalNo.style.display = "none";
  }
});

finalYes.addEventListener("click", () => {
  screen3.classList.add("hidden");
  screen4.classList.remove("hidden");
});

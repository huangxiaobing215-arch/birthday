// ==============================
// Start exploring
// ==============================

const startButton = document.getElementById("startButton");
const gamePage = document.getElementById("gamePage");

startButton.addEventListener("click", function () {

    document.querySelector("h1").style.display = "none";
    document.querySelector("body > p").style.display = "none";
    startButton.style.display = "none";

    gamePage.style.display = "block";

});


// ==============================
// 选择蛋糕口味
// ==============================

const cakeOptions =
    document.querySelectorAll(".cake-option");

const cakeBottom =
    document.querySelector(".cake-bottom");

cakeOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        const color = option.dataset.color;

        cakeBottom.style.backgroundColor = color;

    });

});


// ==============================
// 选择奶油颜色
// ==============================

const creamOptions =
    document.querySelectorAll(".cream-option");

const cakeTop =
    document.querySelector(".cake-top");

creamOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        const creamColor = option.dataset.cream;

        cakeTop.style.backgroundColor = creamColor;

    });

});


// ==============================
// 添加蛋糕装饰
// ==============================

const decorationOptions =
    document.querySelectorAll(".decoration-option");

const cake =
    document.querySelector(".cake");

let decorationCount = 0;

const positions = [

    { left: "45px", top: "70px" },
    { left: "90px", top: "60px" },
    { left: "135px", top: "70px" },
    { left: "65px", top: "105px" },
    { left: "120px", top: "105px" },
    { left: "155px", top: "85px" }

];

decorationOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        const decoration =
            document.createElement("span");

        decoration.textContent =
            option.dataset.decoration;

        decoration.classList.add("decoration");

        const position =
            positions[decorationCount % positions.length];

        decoration.style.left =
            position.left;

        decoration.style.top =
            position.top;

        cake.appendChild(decoration);

        decorationCount++;

    });

});


// ==============================
// 添加蜡烛
// ==============================

const addCandleButton =
    document.getElementById("addCandle");

let candleCount = 0;

const candlePositions = [

    { left: "70px", top: "10px" },
    { left: "105px", top: "5px" },
    { left: "140px", top: "10px" }

];

addCandleButton.addEventListener("click", function () {

    if (candleCount >= 3) {

        alert("最多只能添加 3 根蜡烛哦 🕯️");

        return;

    }

    const candle =
        document.createElement("span");

    candle.textContent = "🕯️";

    candle.classList.add("added-candle");

    const position =
        candlePositions[candleCount];

    candle.style.left =
        position.left;

    candle.style.top =
        position.top;

    cake.appendChild(candle);

    candleCount++;

});


// ==============================
// 完成蛋糕
// ==============================

const finishCakeButton =
    document.getElementById("finishCake");

const birthdayMessage =
    document.getElementById("birthdayMessage");

finishCakeButton.addEventListener("click", function () {

    finishCakeButton.style.display = "none";

    birthdayMessage.style.display = "block";

});


// ==============================
// Open the real gift
// ==============================

const giftButton =
    document.getElementById("giftButton");

const giftPage =
    document.getElementById("giftPage");

giftButton.addEventListener("click", function () {

    birthdayMessage.style.display = "none";

    giftPage.style.display = "block";

});


// ==============================
// Open the letter
// ==============================

const openLetter =
    document.getElementById("openLetter");

const letterPage =
    document.getElementById("letterPage");

openLetter.addEventListener("click", function () {

    giftPage.style.display = "none";

    letterPage.style.display = "block";

});


// ==============================
// 打开信封动画
// ==============================

const openEnvelope =
    document.getElementById("openEnvelope");

const envelope =
    document.getElementById("envelope");

const letter =
    document.querySelector("#letterPage .letter");

openEnvelope.addEventListener("click", function () {

    envelope.classList.add("open");

    openEnvelope.style.display = "none";

    setTimeout(function () {

        letter.style.display = "block";

    }, 1000);

});
// ==============================
// 打开回忆页面
// ==============================

const memoryButton =
    document.getElementById("memoryButton");

const memoryPage =
    document.getElementById("memoryPage");

memoryButton.addEventListener("click", function () {

    letterPage.style.display = "none";

    memoryPage.style.display = "block";

});
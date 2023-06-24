// const calcClearBtn = document.querySelector("#clear");
// const calcInput = document.querySelector(".calc-main-content input");
// const calcMainNum = document.querySelectorAll(".calc-numbers button");

// Referenced in modeSwitch.js

const numOne = document.getElementById("one");
const numTwo = document.getElementById("two");
const numThree = document.getElementById("three");
const numFour = document.getElementById("four");
const numFive = document.getElementById("five");
const numSix = document.getElementById("six");
const numSeven = document.getElementById("seven");
const numEight = document.getElementById("eight");
const numNine = document.getElementById("nine");
const numZero = document.getElementById("zero");
const signPlus = document.getElementById("plus");
const signMinus = document.getElementById("minus");
const signDivide = document.getElementById("divide");
const signMultiply = document.getElementById("multiply");
const signDot = document.getElementById("dot");
const signEqual = document.getElementById("equal");

const errorMessage = document.querySelector(".errorMessage");

calcInput.addEventListener("keypress", (e) => {
  let keyCode = e.keyCode;
  if (keyCode < 48 || keyCode > 57) {
    e.preventDefault();
  }
});

calcMainNum.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (calcInput.value.length < 16) {
      calcInput.value += e.target.value;
    }
  });
});

calcClearBtn.addEventListener("click", () => {
  calcInput.value = calcInput.value.slice(0, -1);
});

calcClearBtn.addEventListener("dblclick", () => {
  calcInput.value = "";
});

signEqual.addEventListener("click", () => {
  if (!calcInput.value) {
    showError();
    return;
  }
  try {
    result = eval(calcInput.value);
    calcInput.value = result;
  } catch (err) {
    showError();
  }
});

function showError() {
  errorMessage.style.display = "flex";
  if (mode === "dark") {
    errorMessage.style.border = "2px solid white";
    errorMessage.style.backgroundColor = "orange";
    errorMessage.style.color = "black";
  } else {
    errorMessage.style.border = "2px solid white";
    errorMessage.style.backgroundColor = "lightseagreen";
    errorMessage.style.color = "black";
  }
  setTimeout(() => {
    errorMessage.style.opacity = "1";
  }, 10);

  setTimeout(() => {
    errorMessage.style.opacity = "0";
  }, 3000);

  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 3300);
}

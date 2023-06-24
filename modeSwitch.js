const calcModeSwitch = document.querySelector("#calc-dark-switch");
const calcBody = document.querySelector("body");
const calcBackPanel = document.querySelector(".calc-back-panel");
const calcAddons = document.querySelector(".calc-addons button");
const calcTitle = document.querySelector("h1");

const calcClearBtn = document.querySelector(".calc-top button");
const calcInput = document.querySelector(".calc-top input");

const calcMainNum = document.querySelectorAll(".calc-numbers button");
const calcAddonBtn = document.querySelectorAll(".calc-addons button");
///////////////////////////////////////////////////////////////////////////
const calcModeSwitch1 = document.querySelector("#calc-light-switch");
const calcBody1 = document.querySelector("body");
const calcBackPanel1 = document.querySelector(".calc-back-panel");
const calcAddons1 = document.querySelector(".calc-addons button");
const calcTitle1 = document.querySelector("h1");

const calcClearBtn1 = document.querySelector(".calc-top button");
const calcInput1 = document.querySelector(".calc-top input");

const calcMainNum1 = document.querySelectorAll(".calc-numbers button");
const calcAddonBtn1 = document.querySelectorAll(".calc-addons button");

calcModeSwitch1.setAttribute("style", "display: none");

let mode = "light";
calcModeSwitch.addEventListener("click", () => {
  mode = "dark";
  calcModeSwitch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                            class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                            <path
                                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                            <path
                                d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                        </svg>&#32;Dark mode`;
  calcModeSwitch.style.transition = "ease-out 0.25s";
  calcAddons.style.transition = "ease-out 0.25s";

  calcBody.style.backgroundColor = "black";
  calcBody.style.transition = "ease-out 0.25s";

  calcBackPanel.style.backgroundColor = "orange";
  calcBackPanel.style.transition = "ease-out 0.25s";

  calcClearBtn.style.backgroundColor = "#fae0b9";
  calcClearBtn.style.transition = "ease-out 0.25s";

  calcInput.style.backgroundColor = "#fae0b9";
  calcInput.style.transition = "ease-out 0.25s";

  calcTitle.style.color = "white";
  calcTitle.style.transition = "ease-out 0.25s";

  calcClearBtn.addEventListener("mouseover", () => {
    calcClearBtn.style.backgroundColor = "#f7d8a8";
    calcClearBtn.style.transition = "ease-out 0.175s";

    calcClearBtn.addEventListener("mousedown", () => {
      calcClearBtn.style.backgroundColor = "#fed392";
      calcClearBtn.style.transition = "ease-out 0.175s";
    });

    calcClearBtn.addEventListener("mouseup", () => {
      calcClearBtn.style.backgroundColor = "#f7d8a8";
      calcClearBtn.style.transition = "ease-out 0.175s";
    });

    calcClearBtn.addEventListener("mouseout", () => {
      calcClearBtn.style.backgroundColor = "#fae0b9";
      calcClearBtn.style.transition = "ease-out 0.175s";
    });
  });
  calcInput.addEventListener("mouseover", () => {
    calcInput.style.backgroundColor = "#f7d8a8";
    calcInput.style.transition = "ease-out 0.175s";

    calcInput.addEventListener("mousedown", () => {
      calcInput.style.backgroundColor = "#ffebcc";
      calcInput.style.transition = "ease-out 0.175s";
    });
    calcInput.addEventListener("mouseup", () => {
      calcInput.style.backgroundColor = "#f7d8da8";
      calcInput.style.transition = "ease-out 0.175s";
    });
    calcInput.addEventListener("mouseout", () => {
      calcInput.style.backgroundColor = "#fae0b9";
      calcInput.style.transition = "ease-out 0.175s";
    });
  });
  calcMainNum.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#ffebcc";
      button.style.transition = "ease-out 0.175s";
    });
  });

  calcMainNum.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.style.backgroundColor = "#f9dcb0";
      button.style.transition = "ease-out 0.175s";
    });
  });
  calcMainNum.forEach((button) => {
    button.addEventListener("mouseup", () => {
      button.style.backgroundColor = "#ffebcc";
      button.style.transition = "ease-out 0.175s";
    });
  });
  calcMainNum.forEach((button) => {
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "white";
      button.style.transition = "ease-out 0.175s";
    });
  });

  calcAddonBtn.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#394455";
    });
  });
  calcAddonBtn.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.style.backgroundColor = "#373f51";
    });
  });
  calcAddonBtn.forEach((button) => {
    button.addEventListener("mouseup", () => {
      button.style.backgroundColor = "#394455";
      button.style.color = "white";
    });
  });
  calcAddonBtn.forEach((button) => {
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#023047";
      button.style.color = "white";
    });
    calcAddons.style.backgroundColor = "#023047";
    button.style.color = "white";
  });
  calcModeSwitch.style.display = "none";
  calcModeSwitch1.style.display = "inline";
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

calcModeSwitch1.addEventListener("click", () => {
  mode = "light";
  calcModeSwitch1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg> Light Mode`;
  calcModeSwitch1.style.transition = "ease-out 0.25s";
  calcAddons1.style.transition = "ease-out 0.25s";

  calcBody1.style.backgroundColor = "lightblue";
  calcBody1.style.transition = "ease-out 0.25s";

  calcBackPanel1.style.backgroundColor = "lightseagreen";
  calcBackPanel1.style.transition = "ease-out 0.25s";

  calcClearBtn1.style.backgroundColor = "rgb(180, 250, 180)";
  calcClearBtn1.style.transition = "ease-out 0.25s";

  calcInput1.style.backgroundColor = "rgb(200, 250, 200)";
  calcInput1.style.transition = "ease-out 0.25s";

  calcTitle1.style.color = "black";
  calcTitle1.style.transition = "ease-out 0.25s";

  calcClearBtn1.addEventListener("mouseover", () => {
    calcClearBtn1.style.backgroundColor = "rgb(130, 250, 130)";
    calcClearBtn1.style.transition = "ease-out 0.175s";

    calcClearBtn1.addEventListener("mousedown", () => {
      calcClearBtn1.style.backgroundColor = "rgb(115, 250, 115)";
      calcClearBtn1.style.transition = "ease-out 0.175s";
    });

    calcClearBtn1.addEventListener("mouseup", () => {
      calcClearBtn1.style.backgroundColor = "rgb(130, 250, 130)";
      calcClearBtn1.style.transition = "ease-out 0.175s";
    });

    calcClearBtn1.addEventListener("mouseout", () => {
      calcClearBtn1.style.backgroundColor = "rgb(150, 250, 150)";
      calcClearBtn1.style.transition = "ease-out 0.175s";
    });
  });
  calcInput1.addEventListener("mouseover", () => {
    calcInput1.style.backgroundColor = "rgb(150, 250, 150)";
    calcInput1.style.transition = "ease-out 0.175s";

    calcInput1.addEventListener("mousedown", () => {
      calcInput1.style.backgroundColor = "rgb(125, 250, 125)";
      calcInput1.style.transition = "ease-out 0.175s";
    });
    calcInput1.addEventListener("mouseup", () => {
      calcInput1.style.backgroundColor = "rgb(150, 250, 150)";
      calcInput1.style.transition = "ease-out 0.175s";
    });
    calcInput1.addEventListener("mouseout", () => {
      calcInput1.style.backgroundColor = "rgb(170, 250, 170)";
      calcInput1.style.transition = "ease-out 0.175s";
    });
  });
  calcMainNum1.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#d7fffe";
      button.style.transition = "ease-out 0.175s";
    });
  });

  calcMainNum1.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.style.backgroundColor = "#cafcfb";
      button.style.transition = "ease-out 0.175s";
    });
  });
  calcMainNum1.forEach((button) => {
    button.addEventListener("mouseup", () => {
      button.style.backgroundColor = "#d7fffe";
      button.style.transition = "ease-out 0.175s";
    });
  });
  calcMainNum1.forEach((button) => {
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "white";
      button.style.transition = "ease-out 0.175s";
    });
  });
  calcAddonBtn1.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "rgb(149, 190, 244)";
    });
  });
  calcAddonBtn1.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.style.backgroundColor = "rgb(125, 170, 220)";
    });
  });
  calcAddonBtn1.forEach((button) => {
    button.addEventListener("mouseup", () => {
      button.style.backgroundColor = "rgb(149, 190, 244)";
      button.style.color = "black";
    });
  });
  calcAddonBtn1.forEach((button) => {
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "rgb(167, 203, 249)";
      button.style.color = "black";
    });
    calcAddons.style.backgroundColor = "rgb(167, 203, 249)";
    calcAddons.style.color = "black";
  });
  calcModeSwitch1.style.display = "none";
  calcModeSwitch.style.display = "inline";
});

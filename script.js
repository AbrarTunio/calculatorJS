var opeartors = document.querySelector(".operators");
var calc0 = document.querySelector(".calc0");
var calc1 = document.querySelector(".calc1");
var calc2 = document.querySelector(".calc2");
var calc3 = document.querySelector(".calc3");

for (i = 0; i <= 3; i++) {
  if (i <= 3) {
    ops = ["+", "-", "*", "/"];
    createCol(ops[i], "operators");
    list1 = ["C", "7", "8", "9"];
    createCol(list1[i], "calc0");
  }

  if (i < 3) {
    list2 = [4, 5, 6];
    list3 = [1, 2, 3];
    list4 = ["0", "dot", "return"];

    createCol(list2[i], "calc1");
    createCol(list3[i], "calc2");
    createCol(list4[i], "calc3");
  }
}

function createCol(val, ops) {
  col = document.createElement("div");
  btn = document.createElement("btn");
  btn.className = " btn btn-dark w-100";
  col.className = "col mt-2";
  if (val == "dot") {
    btn.innerHTML = ".";
    btn.setAttribute("data-num", ".");
  } else if (val == "C") {
    btn.innerHTML = "C";
    btn.setAttribute("id", "btn-clear");
  } else if (val == "return") {
    btn.innerHTML = "=";
    btn.setAttribute("id", "btn-equal");
    // btn.setAttribute("data-num", "=");
  } else {
    btn.innerHTML = val;
    btn.setAttribute("data-num", val);
  }
  col.appendChild(btn);
  document.querySelector(`.${ops}`).appendChild(col);
}

// Above is for font-end and bootstrap
// Let's start operations now.

//Step 1: Initialize variables

var screen = document.querySelector(".form-control");
var buttons = document.querySelectorAll(".btn");
var clearBtn = document.querySelector("#btn-clear");
var equalToBtn = document.querySelector("#btn-equal");

// screen.value = "22";

buttons.forEach(function (button) {
  if (!button.hasAttribute("id")) {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      screen.value += value;
      document.querySelector("label").innerHTML = screen.value;
    });
  }
});

equalToBtn.addEventListener("click", function (e) {
  if (screen.value === "") {
    screen.value = "";
  } else {
    let answer = eval(screen.value);
    // document.querySelector("label").innerHTML = answer;
    screen.value = answer;
  }
});

clearBtn.addEventListener("click", function (e) {
  screen.value = "";
  document.querySelector("label").innerHTML = "";
});

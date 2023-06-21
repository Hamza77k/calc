let operator = "";
let display = document.getElementById("display")

function operatorValue() {
  if (display.value.includes("+")) {
    operator = "+";
    return operator
  } else if (display.value.includes("-")) {
    operator = "-";
    return operator
  } else if (display.value.includes("/")) {
    operator = "/";
    return operator
  } else if (display.value.includes("x")) {
    operator = "x";
    return operator
  } else {
    operator = "";
    return operator
  }
}

// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", operatorValue());
// let subBtn = document.getElementById("subBtn");
// subBtn.addEventListener("click", operatorValue());
// let divBtn = document.getElementById("divBtn");
// divBtn.addEventListener("click", operatorValue());
// let mulBtn = document.getElementById("mulBtn");
// mulBtn.addEventListener("click", operatorValue());

function appendNum(num) {
  display.value += num;
}
function appendPlus() {
  if (display.value.charAt(display.value.length - 1) === "+" || display.value.charAt(display.value.length - 1) === "-" || display.value.charAt(display.value.length - 1) === "/" || display.value.charAt(display.value.length - 1) === "x") {
    display.value = display.value.slice(0, -1);
    display.value += '+';
  } else if (display.value.length === 0) {
    return ""
  } else if (display.value.includes("+") || display.value.includes("/") || display.value.includes("-") || display.value.includes("x")) {
    operate()
  } else {
    display.value += '+';
  }
}
function appendSubtract() {
  if (display.value.charAt(display.value.length - 1) === "+" || display.value.charAt(display.value.length - 1) === "-" || display.value.charAt(display.value.length - 1) === "/" || display.value.charAt(display.value.length - 1) === "x") {
    display.value = display.value.slice(0, -1);
    display.value += '-';
  } else if (display.value.length === 0) {
    return ""
  } else if (display.value.includes("+") || display.value.includes("/") || display.value.includes("-") || display.value.includes("x")) {
    operate()
  } else {
    display.value += '-';
  }
}
function appendDivide() {
  if (display.value.charAt(display.value.length - 1) === "+" || display.value.charAt(display.value.length - 1) === "-" || display.value.charAt(display.value.length - 1) === "/" || display.value.charAt(display.value.length - 1) === "x") {
    display.value = display.value.slice(0, -1);
    display.value += '/';
  } else if (display.value.length === 0) {
    return ""
  } else if (display.value.includes("+") || display.value.includes("/") || display.value.includes("-") || display.value.includes("x")) {
    operate()
  } else {
    display.value += '/';
  }
}
function appendMultiply() {
  if (display.value.charAt(display.value.length - 1) === "+" || display.value.charAt(display.value.length - 1) === "-" || display.value.charAt(display.value.length - 1) === "/" || display.value.charAt(display.value.length - 1) === "x") {
    display.value = display.value.slice(0, -1);
    display.value += 'x';
  } else if (display.value.length === 0) {
    return ""
  } else if (display.value.includes("+") || display.value.includes("/") || display.value.includes("-") || display.value.includes("x")) {
    operate()
  } else {
    display.value += 'x';
  }
}

function clearDisplay(num) {
  display.value = num;
}


function addition(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function division(num1, num2) {
  return num1 / num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}

function operate() {
  if (operator === "+")  {
    numbers = display.value.split(operator);
    if (numbers[1] === "") {
      display.value = addition(parseInt(numbers[0]), parseInt(numbers[0]))
    } else {
      display.value = addition(parseInt(numbers[0]), parseInt(numbers[1]))
    }
  } else if (operator === "-") {
    numbers = display.value.split(operator);
    if (numbers[1] === "") {
      display.value = subtraction(parseInt(numbers[0]), parseInt(numbers[0]))
    } else {
      display.value = subtraction(parseInt(numbers[0]), parseInt(numbers[1]))
    }
  } else if (operator === "/") {
    numbers = display.value.split(operator);
    if (numbers[1] === "") {
      display.value = division(parseInt(numbers[0]), parseInt(numbers[0]))
    } else if (parseInt(numbers[1]) === 0) {
      display.value = "fuck you"
    } else {
      display.value = division(parseInt(numbers[0]), parseInt(numbers[1]))
    }
  } else if (operator === "x") {
    numbers = display.value.split(operator); 
    if (numbers[1] === "") {
      display.value = multiplication(parseInt(numbers[0]), parseInt(numbers[0]))
    } else {
      display.value = multiplication(parseInt(numbers[0]), parseInt(numbers[1]))
    }
  }
}

const disuple = display.value.charAt(display.value.length - 1);

function deleteLastLetter() {
  if(disuple === "1" || disuple === "2" || disuple === "3" || disuple === "4" || disuple === "5" || disuple === "6" || disuple === "7" || disuple === "8" || disuple === "9" || disuple === "0") {
    display.value = display.value.slice(0, -1);
  } else if (disuple === "+" || disuple === "-" || disuple === "/" || disuple === "x") {
    display.value = display.value.slice(0, -1);
  }
}

// keyboard support //

document.addEventListener("keydown", function(event) {
  if (event.key === "1") {
    document.getElementById("onebtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "2") {
    document.getElementById("twobtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "3") {
    document.getElementById("threebtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "4") {
    document.getElementById("fourbtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "5") {
    document.getElementById("fivebtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "6") {
    document.getElementById("sixbtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "7") {
    document.getElementById("sevenbtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "8") {
    document.getElementById("eightbtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "9") {
    document.getElementById("ninebtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "0") {
    document.getElementById("zerobtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "-") {
    document.getElementById("subBtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "+") {
    document.getElementById("addBtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "/") {
    document.getElementById("divBtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "*") {
    document.getElementById("mulBtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("equalsBtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "c" || event.key === "C") {
    document.getElementById("clearBtn").click();
  }
});
document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    document.getElementById("delBtn").click();
  }
});
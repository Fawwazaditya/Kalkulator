let nomerawal = "0";
let operator = null;
let nomerkedua = "";

function updatedisplay() {
  let displayContent = "";

  if (nomerkedua !== null) {
    displayContent += nomerkedua; 
  }

  if (operator !== null) {
    displayContent += ` ${operator} `; 
  }

  displayContent += nomerawal;

  document.querySelector(".display").innerText = displayContent; 
}

function inputNumber(number) {
  if (nomerawal === "0") {
    nomerawal = number.toString();
  } else {
    nomerawal += number.toString();
  }
  updatedisplay();
}

function setOperator(op) {
  if (nomerawal == "0" && !nomerkedua == NaN) return;
  if (!nomerkedua == null) {
    calculate;
  }
  operator = op;
  nomerkedua = nomerawal;
  nomerawal = "0";
}
function calculate() {
  if (!operator || nomerkedua === null) return;

  let num1 = parseFloat(nomerawal);
  let num2 = parseFloat(nomerkedua);

  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }
  result = Math.abs(result);

  nomerawal = result.toString();
  nomerkedua = null;
  operator = null;
  updatedisplay();
}

function backspace() {
  if (nomerawal.length > 1) {
    nomerawal = nomerawal.slice(0, -1);
  } else {
    nomerawal = "0";
  }
  updatedisplay();
}

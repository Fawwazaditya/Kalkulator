let nomerawal = "0";
let operator = null;
let nomerkedua = "";

function updatedisplay() {
  
  let displayContent = "";

  if (nomerkedua !== "") {
    displayContent += nomerkedua;
  }

  if (operator !== null) {
    displayContent += ` ${operator} `;
  }

 
  if (nomerawal !== "0" || operator === null) {
    displayContent += nomerawal;
  }

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
  operator = op;
  nomerkedua = nomerawal;
  nomerawal = "";
  updatedisplay();
}

function calculate() {
  if (!operator && nomerkedua === "") return;

  let num1 = parseFloat(nomerkedua);
  let num2 = parseFloat(nomerawal || "0");

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

  nomerawal = result.toString();
  nomerkedua = "";
  operator = null;
  updatedisplay();
}

function backspace() {

  if (nomerawal !== "" ) {
    if (nomerawal.length > 1) {
      nomerawal = nomerawal.slice(0, -1);
    } else {
      nomerawal = "0";
    }
  } else if (operator !== null) {
    
    operator = null;
  } else if (nomerkedua !== "") {
    
    if (nomerkedua.length > 1) {
      nomerkedua = nomerkedua.slice(0, -1);
    } else {
      nomerkedua = "0";
    }
  }
  updatedisplay();
}

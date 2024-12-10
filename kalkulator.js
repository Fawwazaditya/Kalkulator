let nomerawal = "0";
let operator = null;
let nomerkedua = "";

function updatedisplay() {
  // Perbaiki tampilan agar tidak menampilkan angka kedua (nomerawal) jika belum diinput
  let displayContent = "";

  if (nomerkedua !== "") {
    displayContent += nomerkedua;
  }

  if (operator !== null) {
    displayContent += ` ${operator} `;
  }

  // Hanya tampilkan angka kedua jika user sudah mengetik sesuatu
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
  if (nomerawal.length > 1) {
    nomerawal = nomerawal.slice(0, -1);
  } else {
    nomerawal = "0";
  }
  updatedisplay();
}

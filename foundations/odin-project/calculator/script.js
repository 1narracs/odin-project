// Diplay elements
const displayInput = document.getElementById("display-input-operand");
const displayCalculation = document.getElementById("display-calculation");
const displayOperator = document.getElementById("display-operator");
// Button elements
const btns = document.querySelectorAll(".btn");
const btnsNumbers = document.querySelectorAll(".btn-number");
const btnsOperators = document.querySelectorAll(".btn-operator");
const btnClear = document.getElementById("clear");
const btnEquals = document.getElementById("equals");
const btnDel = document.getElementById("delete");
// Variables for calculations
const calculation = {
  history: "",
  inputOperand: "",
  prevOperand: "",
  operator: "",
  result: "",
  operatorDisplay: "",
  calculationState: 0,
};

// Event Listener for AC button
btnClear.addEventListener("click", () => clearOperations());

// Delete button event listener
btnDel.addEventListener("click", () => {
  if (calculation.prevOperand !== "") {
    calculation.prevOperand = calculation.prevOperand.substring(
      0,
      calculation.prevOperand.length - 1
    );
  } else if (calculation.operator !== "") {
    calculation.operator = "";
  } else if (calculation.inputOperand.length > 0) {
    calculation.inputOperand = calculation.inputOperand.substring(
      0,
      calculation.inputOperand.length - 1
    );
  } else clearOperations();
});

// Event listener for Equals button
btnEquals.addEventListener("click", () => {
  // if (calculation.calculationState === 2) return;
  calculation.inputOperand = operate();
  calculation.history = [
    calculation.inputOperand,
    getOperatorDisplay(calculation.operator),
    calculation.prevOperand,
    "=",
  ].join(" ");
  calculation.calculationState = 2;
});

// Event Listeners for Numerical buttons
btnsNumbers.forEach((element) =>
  element.addEventListener("click", () => {
    if (element.value === "." && calculation.inputOperand.includes(".")) return;
    if (calculation.calculationState === 2) {
      calculation.prevOperand = calculation.inputOperand;
      calculation.inputOperand = "";
      calculation.history = [
        calculation.prevOperand,
        getOperatorDisplay(calculation.operator),
      ].join(" ");
      calculation.calculationState = 1;
    }
    if (calculation.inputOperand.length >= 8) return;
    calculation.inputOperand += element.value;
  })
);

// Event Listeners for Operator buttons
btnsOperators.forEach((element) =>
  element.addEventListener("click", () => {
    if (calculation.inputOperand === "") return;
    calculation.prevOperand = calculation.inputOperand;
    calculation.inputOperand = "";
    calculation.operator = element.value;
    calculation.history = [
      calculation.prevOperand,
      getOperatorDisplay(calculation.operator),
    ].join(" ");
    calculation.operatorDisplay = getOperatorDisplay(element.value);
    calculation.calculationState = 1;
  })
);

// Each button press updates the display, after performing the previous instructions
btns.forEach((element) =>
  element.addEventListener("click", () => updateDisplay())
);

// updates the displays
function updateDisplay() {
  displayInput.innerText = calculation.inputOperand;
  displayCalculation.innerText = calculation.history;
  displayOperator.innerText = calculation.operatorDisplay;
}

function getOperatorDisplay(value) {
  switch (value) {
    case "+":
      return "+";
    case "-":
      return "−";
    case "/":
      return "÷";
    case "*":
      return "×";
  }
}

// performs the operation based on stored variables
function operate() {
  if (calculation.operator === "") return calculation.inputOperand;
  if (calculation.inputOperand === "" && calculation.prevOperand === "")
    return 0;
  if (calculation.prevOperand === "") return calculation.inputOperand;
  let result = 0;
  switch (calculation.operator) {
    case "+":
      return Number(calculation.inputOperand) + Number(calculation.prevOperand);
    case "-":
      return calculation.prevOperand - calculation.inputOperand;
    case "*":
      return calculation.inputOperand * calculation.prevOperand;
    case "/":
      if (calculation.inputOperand == 0) return "8008135";
      return calculation.prevOperand / calculation.inputOperand;
  }
}

function clearOperations() {
  console.log("clearing operations...");
  calculation.inputOperand = "";
  calculation.prevOperand = "";
  calculation.operator = "";
  calculation.history = "";
  calculation.result = "";
  calculation.operatorDisplay = "";
  updateDisplay();
}

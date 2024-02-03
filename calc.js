var selectedOperation = '';

function selectOperation(operation) {
  selectedOperation = operation;
}

function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result;

  switch(selectedOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("resultBox").innerHTML = " " + result;
}

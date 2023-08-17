
function ac() {
    document.getElementById('display1').value = '';
    document.getElementById('display2').value = '';

  }


function calculate() {
    const expression = document.getElementById('display1').value;
    const result = evaluateExpression(expression);
    if (result === null) {
      document.getElementById('display2').value = 'Error';
    } else {
      document.getElementById('display2').value = result;
    }
  }
  function evaluateExpression(expression) {
const tokens = expression.match(/\d+|[-+*/]/g);

let value = null;
let operator = null;

for (const token of tokens) {
  if (!isNaN(token)) {
    const number = parseFloat(token);
    if (value === null) {
      value = number;
    } else {
      if (operator === '+') {
        value += number;
      } else if (operator === '-') {
        value -= number;
      } else if (operator === '*') {
        value *= number;
      } else if (operator === '/') {
        if (number === 0) {
          return null; // Division by zero error
        }
        value /= number;
      }
      operator = null;
    }
  } else {
    operator = token;
  }
}

return value;
}
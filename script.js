let firstNum = '';
let secondNum = '';
let operator = '';
let equalsPressed = false;

function addNum(num) {
  if (!operator) {
    firstNum += num;
    document.getElementById('display').innerText = firstNum;
  } else {
    secondNum += num;
    document.getElementById('display').innerText = secondNum;
  }
}

function setOperator(op) {
  operator = op;
  equalsPressed = false;
}

function calculate() {
  let result = 0;
  
  if (operator === '+' || operator === '-') {
    document.getElementById('captcha-popup').style.display = 'block';
    document.getElementById('captcha-question').innerText = `${firstNum} ${operator} ${secondNum} = ?`;
  }
  
  if (operator === '*' || operator === '/') {
    document.getElementById('paywall-popup').style.display = 'block';
  }
  
  if (equalsPressed) {
    if (operator === '+') result = parseFloat(firstNum) + parseFloat(secondNum);
    if (operator === '-') result = parseFloat(firstNum) - parseFloat(secondNum);
    if (operator === '*') result = parseFloat(firstNum) * parseFloat(secondNum);
    if (operator === '/') result = parseFloat(firstNum) / parseFloat(secondNum);
  
    document.getElementById('display').innerText = result.toString();
    firstNum = result.toString();
    secondNum = '';
  }

  equalsPressed = true;
}

function submitCaptcha() {
  document.getElementById('captcha-popup').style.display = 'none';
  calculate();
}

function pay() {
  window.close();
}

function clearCalc() {
  firstNum = '';
  secondNum = '';
  operator = '';
  document.getElementById('display').innerText = '';
}

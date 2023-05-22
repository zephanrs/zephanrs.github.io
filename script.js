let firstNum = '';
let secondNum = '';
let operator = '';

function addNum(num) {
  if (!operator) {
    firstNum += num;
    document.getElementById('display').defaultValue = firstNum;
  } else {
    secondNum += num;
    document.getElementById('display').defaultValue = secondNum;
  }
}

function setOperator(op) {
  operator = op;
  document.getElementById('display').defaultValue = operator;
}

function calculate() {
  let result = 0;
  
  if (operator === '+' || operator === '-') {
    document.getElementById('captcha').style.display = 'block';
    document.getElementById('captcha-question').defaultValue = `${firstNum} ${operator} ${secondNum} = ?`;
    return;
  }
  
  if (operator === '*' || operator === '/') {
    document.getElementById('paywall').style.display = 'block';
    return;
  }
  
  if (operator === '+') result = parseFloat(firstNum) + parseFloat(secondNum);
  if (operator === '-') result = parseFloat(firstNum) - parseFloat(secondNum);
  if (operator === '*') result = parseFloat(firstNum) * parseFloat(secondNum);
  if (operator === '/') result = parseFloat(firstNum) / parseFloat(secondNum);
  
  document.getElementById('display').value = result.toString();
  firstNum = result.toString();
  secondNum = '';
  operator = '';
}


function submitCaptcha() {
  document.getElementById('captcha').style.display = 'none';
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

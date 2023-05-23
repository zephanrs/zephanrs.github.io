let firstNum = '';
let secondNum = '';
let operator = '';

function addNum(num) {
  if (!operator) {
    firstNum += num;
    document.getElementById('display').value = firstNum;
  } else {
    secondNum += num;
    document.getElementById('display').value = secondNum;
  }
}

function setOperator(op) {
  operator = op;
  document.getElementById('display').value = operator;
}

function calculate() {
  let result = 0;

  if (operator === '+' || operator === '-') {
    document.getElementById('captcha').style.display = 'block';
    document.getElementById('captcha-question').innerText = `${firstNum} ${operator} ${secondNum} = ?`;
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

window.onload = function() {
  let numButtons = document.getElementsByClassName('num');
  for(let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', function() {
      addNum(numButtons[i].textContent);
    });
  }

  let operatorButtons = document.getElementsByClassName('operator');
  for(let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function() {
      setOperator(operatorButtons[i].dataset.op);
    });
  }

  document.getElementById('equals').addEventListener('click', calculate);
  document.getElementById('clear').addEventListener('click', clearCalc);
  document.getElementById('captcha-submit').addEventListener('click', submitCaptcha);
  document.getElementById('pay').addEventListener('click', pay);
}

function pay() {
  window.close();
}

function clearCalc() {
  firstNum = '';
  secondNum = '';
  operator = '';
  document.getElementById('display').defaultValue = '';
}

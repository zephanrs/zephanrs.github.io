let firstNum = '';
let secondNum = '';
let operator = '';

function addNum(num) {
  if (!operator) {
    firstNum += num;
  } else {
    secondNum += num;
  }
  document.getElementById('display').value += num;
}

function setOperator(op) {
  operator = op;
  document.getElementById('display').value += operator;
}

function calculate() {
  let result = 0;

  if (operator === '+' || operator === '-') {
    document.getElementById('captcha').style.display = 'block';
    document.getElementById('captcha-input').placeholder = `What is ${firstNum} ${operator} ${secondNum}?`;
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
  let captchaAnswer = document.getElementById('captcha-input').value;

  document.getElementById('captcha').style.display = 'none';
  document.getElementById('display').value = captchaAnswer;

  firstNum = captchaAnswer;
  secondNum = '';
  operator = '';
  document.getElementById('captcha-input').value = '';
}

function pay() {
  window.close();
}

function cancel() {
  document.getElementById('paywall').style.display = 'none';
}

function clearCalc() {
  firstNum = '';
  secondNum = '';
  operator = '';
  document.getElementById('display').value = '';
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
  document.getElementById('cancel').addEventListener('click', cancel);
}

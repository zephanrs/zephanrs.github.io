let number1 = '';
let number2 = '';
let operator = '';

function addNumber(num) {
  if (operator === '') {
    number1 += num;
    document.getElementById('display').innerText = number1;
  } else {
    number2 += num;
    document.getElementById('display').innerText = number2;
  }
}

function setOperator(oper) {
  if (oper === '*' || oper === '/') {
    document.getElementById('paywall').style.display = 'block';
    return;
  }

  operator = oper;
}

function closePaywall() {
  document.getElementById('paywall').style.display = 'none';
}

function calculate() {
  if (operator === '+') {
    let captcha = prompt("Prove you're not a robot. What's " + number1 + " + " + number2 + "?");
    document.getElementById('display').innerText = captcha;
  } else if (operator === '-') {
    let captcha = prompt("Prove you're not a robot. What's " + number1 + " - " + number2 + "?");
    document.getElementById('display').innerText = captcha;
  }
  
  number1 = '';
  number2 = '';
  operator = '';
}

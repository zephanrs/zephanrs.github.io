let firstNum = '';
let secondNum = '';
let operator = '';
let requiresCaptcha = false;
let equalsTriggered = false;

const display = document.getElementById('display');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (equalsTriggered) {
            firstNum = '';
            secondNum = '';
            operator = '';
            equalsTriggered = false;
        }
        if (operator) {
            secondNum += button.textContent;
        } else {
            firstNum += button.textContent;
        }
        display.value = firstNum + operator + secondNum;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        if (operator === '+' || operator === '/') {
            document.getElementById('captcha').style.display = 'block';
        } else if (operator === '*' || operator === '-') {
            document.getElementById('paywall').style.display = 'block';
        }
        display.value = firstNum + operator + secondNum;
    });
});

equalsButton.addEventListener('click', () => {
    if ((operator === '+' || operator === '/') && !requiresCaptcha) {
        display.value = 'Please solve the captcha.';
    } else {
        equalsTriggered = true;
    }
});

clearButton.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    display.value = '';
    document.getElementById('captcha').style.display = 'none';
    document.getElementById('paywall').style.display = 'none';
    requiresCaptcha = false;
    equalsTriggered = false;
});

document.getElementById('captcha-submit').addEventListener('click', () => {
    let captchaInput = document.getElementById('captcha-input').value;
    display.value = captchaInput;
    document.getElementById('captcha').style.display = 'none';
    document.getElementById('captcha-input').value = '';
    requiresCaptcha = false;
});

document.getElementById('pay').addEventListener('click', () => {
    alert('Payment functionality is not implemented in this demo.');
});

document.getElementById('cancel').addEventListener('click', () => {
    document.getElementById('paywall').style.display = 'none';
    operator = '';
    secondNum = '';
});

let firstNum = '';
let secondNum = '';
let operator = '';
let requiresCaptcha = false;

const display = document.getElementById('display');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById'clear');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
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
        operator = button.dataset.op;
        if (operator === '+' || operator === '/') {
            document.getElementById('captcha').style.display = 'block';
            requiresCaptcha = true;
        } else if (operator === '*' || operator === '-') {
            document.getElementById('paywall').style.display = 'block';
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (requiresCaptcha) {
        alert('Please complete the captcha first.');
        return;
    }
    let result;
    switch (operator) {
        case '+':
            result = Number(firstNum) + Number(secondNum);
            break;
        case '-':
            result = Number(firstNum) - Number(secondNum);
            break;
        case '*':
            result = Number(firstNum) * Number(secondNum);
            break;
        case '/':
            result = Number(firstNum) / Number(secondNum);
            break;
        default:
            return;
    }
    display.value = result.toString();
    firstNum = '';
    secondNum = '';
    operator = '';
});

clearButton.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    display.value = '';
});

document.getElementById('captcha-submit').addEventListener('click', () => {
    let captchaInput = document.getElementById('captcha-input').value;
    if (captchaInput === (firstNum + operator + secondNum)) {
        requiresCaptcha = false;
        document.getElementById('captcha').style.display = 'none';
        document.getElementById('captcha-input').value = '';
    } else {
        alert('Captcha answer incorrect.');
    }
});

document.getElementById('pay').addEventListener('click', () => {
    alert('Payment functionality is not implemented in this demo.');
});

document.getElementById('cancel').addEventListener('click', () => {
    document.getElementById('paywall').style.display = 'none';
    operator = '';
    secondNum = '';
});

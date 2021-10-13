const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const input = document.querySelector('input');
const keypad = document.querySelector('.keypad');

const circleBox1 = document.querySelector('.circleBox1');
const circleBox2 = document.querySelector('.circleBox2');
const circleBox3 = document.querySelector('.circleBox3');

const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');

let currentNumber = '';
let currentOperation = '+';
let currentResult = 0;
let currentValue = 0;

circleBox1.addEventListener('click', function () {
  body.classList.remove('dark', 'light');

  circle1.classList.remove('notVisible');
  circle2.classList.add('notVisible');
  circle3.classList.add('notVisible');
});
circleBox2.addEventListener('click', function () {
  body.classList.add('light');
  body.classList.remove('dark');

  circle1.classList.add('notVisible');
  circle2.classList.remove('notVisible');
  circle3.classList.add('notVisible');
});
circleBox3.addEventListener('click', function () {
  body.classList.add('dark');
  body.classList.remove('light');

  circle1.classList.add('notVisible');
  circle2.classList.add('notVisible');
  circle3.classList.remove('notVisible');
});

keypad.addEventListener('click', function (e) {
  if (!e.target.closest('button')) return;

  const key = e.target;
  const keyValue = e.target.textContent;
  console.log(`keyValue: ${keyValue}`);

  if (key.classList.contains('number')) {
    currentNumber += keyValue;
    console.log(`currentNumber: ${currentNumber}`);
    input.value = Number(currentNumber).toLocaleString();
  }

  if (key.classList.contains('operator')) {
    console.log(currentOperation);
    if (currentNumber) {
      calculate(Number(currentNumber));
    }
    currentOperation = key.textContent;
    currentNumber = '';
    console.log(currentNumber);
  }

  if (key.classList.contains('reset')) {
    currentNumber = '';
    currentOperation = '+';
    currentResult = 0;
    input.value = '0';
  }

  if (key.classList.contains('del')) {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
    if (currentNumber === '') {
      input.value = 0;
    } else {
      input.value = currentNumber;
    }
  }
});
function calculate(number) {
  switch (currentOperation) {
    case '+':
      addition(number);
      break;
    case '-':
      subtraction(number);
      break;
    case 'x':
      multiplication(number);
      break;
    case '/':
      division(number);
      break;
    default:
      input.value = currentResult.toLocaleString().substring(0, 12);
  }
}

function addition(number) {
  currentResult = currentResult + number;
  input.value = currentResult.toLocaleString().substring(0, 12);
}

function subtraction(num) {
  currentResult = currentResult - num;
  input.value = currentResult.toLocaleString().substring(0, 12);
}

function multiplication(num) {
  currentResult = currentResult * num;
  input.value = currentResult.toLocaleString().substring(0, 12);
}

function division(num) {
  currentResult = currentResult / num;
  input.value = currentResult.toString().substring(0, 12);
}

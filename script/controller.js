class Calculator {
  _displayInputSec = document.querySelector('.cal__display-input');
  _displayResultSec = document.querySelector('.cal__display-result');

  _numbers = document.querySelector('.cal__numbers');
  _operations = document.querySelector('.cal__operation');

  _equal = document.querySelector('.btn-equal');
  _answer = document.querySelector('.btn-answer');

  _delete = document.querySelector('.btn-delete');
  _Clear = document.querySelector('.btn-all-clear');

  _curOperation;
  _result;
  _lastAnswer;

  constructor() {
    const that = this;
    this._clearDisplay();
    this._clearResult();
    this._numbers.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn');
      if (!btn) return;

      if (
        btn.classList.contains('btn-dot') &&
        that._displayInputSec.textContent.includes('.')
      ) {
      } else {
        that._showNumber(btn);
      }
    });

    this._operations.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn');
      if (!btn) return;
      that._handleOperation(that._curOperation);
      that._curOperation = btn.dataset.operation;
      // if (that._result === 0 && (that._lastAnswer || that._lastAnswer === 0)) {
      //   that._result = that._lastAnswer;
      // }
      that._displayResult(that._result);
      that._clearDisplay();
    });

    this._equal.addEventListener('click', function () {
      that._handleOperation(that._curOperation);
      if (that._result || that._result === 0) {
        that._lastAnswer = that._result;
        that._displayResult(that._result);
      }
      that._clearDisplay();
      that._curOperation = undefined;
      that._result = undefined;
    });

    this._answer.addEventListener('click', function () {
      if (that._lastAnswer) {
        that._displayInputSec.textContent += that._lastAnswer;
      }
    });

    this._delete.addEventListener('click', function () {
      that._displayInputSec.textContent =
        that._displayInputSec.textContent.slice(0, -1);
    });
    this._Clear.addEventListener('click', function () {
      that._clearDisplay();
      that._clearResult();
    });
  }

  _clearResult() {
    this._displayResultSec.textContent = '';
    this._result = undefined;
    this._curOperation = undefined;
  }
  _clearDisplay() {
    this._displayInputSec.textContent = '';
  }
  _showNumber(btn) {
    this._displayInputSec.textContent += btn.dataset.number;
  }

  _handleOperation(operation) {
    const number = +this._displayInputSec.textContent;
    if (operation === '/') this._result = this._divide(this._result, number);
    else if (operation === '*')
      this._result = this._Multiply(this._result, number);
    else if (operation === '-')
      this._result = this._subtract(this._result, number);
    else if (operation === '+') this._result = this._add(this._result, number);
    else this._result = number;
  }

  _divide(num1, num2) {
    if (!num1 && num1 !== 0) return num2;
    if (!num2 && num2 !== 0) return num1;
    return num1 / num2;
  }

  _Multiply(num1, num2) {
    return num1 * num2;
  }

  _add(num1, num2) {
    return num1 + num2;
  }

  _subtract(num1, num2) {
    if (!num1 && num1 !== 0) return num2;
    if (!num2 && num2 !== 0) return num1;
    return num1 - num2;
  }

  _displayResult(result) {
    this._displayResultSec.textContent = result;
  }
}

new Calculator();

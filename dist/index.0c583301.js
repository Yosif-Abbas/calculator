class Calculator {
    _display = document.querySelector(".cal_display-input");
    _result = document.querySelector(".cal_display-result");
    _numbers = document.querySelector(".cal_numbers");
    Calculator() {
        this._addHandlerNumber(_showNumber);
    }
    _addHandlerNumber(handler) {
        this._numbers.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn");
            // if (!btn) return;
            handler(btn);
        });
    }
    _showNumber(btn) {
        console.log(btn);
        this._display.textContent += btn.getAttribute("value");
    }
}
new Calculator();

//# sourceMappingURL=index.0c583301.js.map

document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector(".screen input");
    const buttons = document.querySelectorAll(".number, .operators, .clear, .equal");

    let currentInput = "";
    let prevInput = "";
    let operator = "";

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = button.textContent;

            if (button.classList.contains("number")) {
                currentInput += buttonText;
                updateScreen();
            } else if (button.classList.contains("operators")) {
                if (currentInput !== "") {
                    prevInput = currentInput;
                    currentInput = "";
                    operator = buttonText;
                    updateScreen();
                }
            } else if (button.classList.contains("clear")) {
                clear();
                updateScreen();
            } else if (button.classList.contains("equal")) {
                try {
                    calculate();
                    updateScreen();
                } catch (error) {
                    currentInput = "Error";
                    updateScreen();
                }
            }
        });
    });

    function updateScreen() {
        if (operator !== "") {
            screen.value = prevInput + " " + operator + " " + currentInput;
        } else {
            screen.value = currentInput;
        }
    }

    function clear() {
        currentInput = "";
        prevInput = "";
        operator = "";
    }

    function calculate() {
        if (prevInput !== "" && currentInput !== "") {
            const num1 = parseFloat(prevInput);
            const num2 = parseFloat(currentInput);

            switch (operator) {
                case "+":
                    currentInput = (num1 + num2).toString();
                    break;
                case "-":
                    currentInput = (num1 - num2).toString();
                    break;
                case "*":
                    currentInput = (num1 * num2).toString();
                    break;
                case "/":
                    if (num2 !== 0) {
                        currentInput = (num1 / num2).toString();
                    } else {
                        throw new Error("Division by zero");
                    }
                    break;
                default:
                    throw new Error("Invalid operator");
            }

            prevInput = "";
            operator = "";
        }
    }
});

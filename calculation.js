document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector(".screen input");
    const buttons = document.querySelectorAll(".number, .operators, .clear, .equal");

    let currentInput = "";
    let prevInput = "";
    let operator = "";

    

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

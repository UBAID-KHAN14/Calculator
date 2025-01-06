const display = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        try {
            // Replace % for percentage calculation and evaluate the expression
            output = eval(output.replace("%", "/100"));
        } catch {
            output = "Error"; // Handle invalid expressions
        }
    } else if (btnValue === "AC") {
        output = ""; // Clear all
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1); // Remove last character
    } else {
        // Avoid adding operator at the beginning or two consecutive operators
        if (
            specialChars.includes(btnValue) &&
            (output === "" || specialChars.includes(output.slice(-1)))
        ) {
            return;
        }
        output += btnValue; // Append button value
    }
    display.value = output; // Update display
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.dataset.value; // Fetch data-value
        calculate(value);
    });
});

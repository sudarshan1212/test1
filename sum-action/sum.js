const core = require("@actions/core");

try {
    const num1 = parseInt(core.getInput("num1"));
    const num2 = parseInt(core.getInput("num2"));

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid inputs: Please provide two numbers");
    }

    const result = num1 + num2;

    core.setOutput("sum", result);
    console.log(`The sum of ${num1} and ${num2} is: ${result}`);
} catch (error) {
    core.setFailed(`Error: ${error.message}`);
}

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let calculateBmi = (weight, height) => {
    let bmi = weight / (height ** 2);
    return bmi.toFixed(2);
};
let calculateCategory = (bmi) => {
    if (bmi < 18.5)
        return chalk.yellow.italic("Underweight");
    else if (bmi < 25)
        return chalk.blue("Normal");
    else if (bmi < 30)
        return chalk.red("Overweight");
    else
        return chalk.redBright.bold("Obese");
};
let main = async () => {
    console.log(chalk.blue.bold("\n\t<<<<<****BMI Calculator****>>>>\n\t"));
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: chalk.magenta.bold("\nEnter your name:")
        },
        {
            type: "number",
            name: "userAge",
            message: chalk.magenta.bold("\nEnter your age:"),
        },
        {
            type: "list",
            name: "userGender",
            message: chalk.magenta.bold("\nSelect your gender:"),
            choices: ["Male", "Female"]
        },
        {
            type: "number",
            name: "weightInKg",
            message: chalk.magenta.bold("\nEnter your weight in (kg):")
        },
        {
            type: "number",
            name: "heightInMeters",
            message: chalk.magenta.bold("\nEnter your height in (meters):"),
        },
    ]);
    let name = chalk.green.italic(answer.userName);
    let age = chalk.green.italic(answer.userAge);
    let gender = chalk.green.italic(answer.userGender);
    let weight = answer.weightInKg;
    let height = answer.heightInMeters;
    if (weight && height) {
        let bmi = calculateBmi(weight, height);
        let category = calculateCategory(parseFloat(bmi));
        console.log(chalk.blueBright(`Hello, ${name} You are ${age} years old, and your BMI is:(${chalk.red.bold(bmi)}) (${category})(${gender})`));
    }
    else {
        console.log(chalk.red.bold("please enter valid weight and height"));
    }
};
main();

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Converstion = {
    GBP: {
        GBP: 1,
        EUR: 1.171,
        JPY: 191.154,
        PKR: 351.007,
        USD: 1.264,
    },
    PKR: {
        GBP: 0.003,
        EUR: 0.003,
        JPY: 0.539,
        PKR: 1,
        USD: 0.004,
    },
    USD: {
        GBP: 0.791,
        EUR: 0.924,
        JPY: 150.44,
        PKR: 279.24,
        USD: 1,
    },
    EUR: {
        GBP: 0.854,
        EUR: 1,
        JPY: 162.814,
        PKR: 302.28,
        USD: 1.082,
    },
    JPY: {
        GBP: 0.005,
        EUR: 0.006,
        JPY: 1,
        PKR: 1.856,
        USD: 0.007,
    },
};
async function startAgain() {
    let again;
    do {
        await convertAmount();
        again = await inquirer.prompt({
            type: "list",
            name: "continue",
            choices: ["Yes", "No"],
            message: "Do you want to continue...?"
        });
    } while (again.continue === "Yes");
}
startAgain();
async function convertAmount() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["GBP", "EUR", "JPY", "PKR", "USD"],
            message: chalk.blue("\n\tEnter Your Currency..\n\t"),
        },
        {
            type: "list",
            name: "to",
            choices: ["GBP", "EUR", "JPY", "PKR", "USD"],
            message: chalk.yellow("\n\tEnter Your Conversion Currency..\n\t"),
        },
        {
            type: "number",
            name: "amount",
            message: chalk.blue("\n\tEnter amount you want to convert...\n\t"),
        }
    ]);
    const { from, to, amount } = answers;
    if (from && to && amount) {
        let result = Converstion[from][to] * amount;
        // console.log(result);
        console.log(chalk.green(`\n\tYour Conversion amount ${from} is converted in ${to}. The Converted amount is ${result}\n\t`));
    }
    else {
        console.log(chalk.red("invalid Input"));
    }
}

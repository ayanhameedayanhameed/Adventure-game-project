#!/usr/bin/env node
//importing inquirer for input data from user
import inquirer from "inquirer";

//importing chalk for better user experience
import chalk from "chalk";


console.log(chalk.bold.green("= ".repeat(45)));
console.log(chalk.bold.underline.yellow("WELCOME TO CODE WITH AYAN ADVENTURE GAME PROJECT"));
console.log(chalk.green.bold("= ".repeat(45)));

//defining a class for player
class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

//defining a class for opponent
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

//player name
let player = await inquirer.prompt({
  name: "playerNAme",
  type: "input",
  message: "Please enter your name: ",
});
console.log(player.playerNAme);

//opponent selection
let opponent = await inquirer.prompt({
  name: "select",
  type: "list",
  message: "Please choose your opponent:",
  choices: ["Skeleton", "Zombie", "Vampire"],
});
console.log(opponent.select);

//gather data
let player1 = new Player(player.playerNAme);
let opponent1 = new Opponent(opponent.select);
do {
  //skeleton
  if (opponent.select == "Skeleton") {
    let ask = await inquirer.prompt([
      {
        name: "optionForAction",
        type: "list",
        message: "what do you want to do?",
        choices: ["Attack", "Drink portion", "Run for life....."],
      },
    ]);
    if (ask.optionForAction == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
        console.log(
          chalk.bold.green(`${opponent1.name} fuel is ${opponent1.fuel}`)
        );
        if (player1.fuel <= 0) {
          console.log(
            chalk.bold.italic.red("You loose, better luck next time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        opponent1.fuelDecrease();
        console.log(
          chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`)
        );
        console.log(
          chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`)
        );
        if (opponent1.fuel <= 0) {
          console.log(chalk.bold.italic.green("You Won"));
          process.exit();
        }
      }
    }
    if (ask.optionForAction == "Drink portion") {
      player1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(`You drink health your fuel is ${player1.fuel}`)
      );
    }
    if (ask.optionForAction == "Run for life") {
      console.log(chalk.bold.italic.red("you loose, Better luck next time"));
      process.exit();
    }
  }
  //zombie
  if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt([
      {
        name: "optionForAction",
        type: "list",
        message: "what do you want to do?",
        choices: ["Attack", "Drink portion", "Run for life....."],
      },
    ]);
    if (ask.optionForAction == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
        console.log(
          chalk.bold.green(`${opponent1.name} fuel is ${opponent1.fuel}`)
        );
        if (player1.fuel <= 0) {
          console.log(
            chalk.bold.italic.red("You loose, better luck next time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        opponent1.fuelDecrease();
        console.log(
          chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`)
        );
        console.log(
          chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`)
        );
        if (opponent1.fuel <= 0) {
          console.log(chalk.bold.italic.green("You Won"));
          process.exit();
        }
      }
    }
    if (ask.optionForAction == "Drink portion") {
      player1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(`You drink health your fuel is ${player1.fuel}`)
      );
    }
    if (ask.optionForAction == "Run for life") {
      console.log(chalk.bold.italic.red("you loose, Better luck next time"));
      process.exit();
    }
  }
  //vampire
  if (opponent.select == "Vampire") {
    let ask = await inquirer.prompt([
      {
        name: "optionForAction",
        type: "list",
        message: "what do you want to do?",
        choices: ["Attack", "Drink portion", "Run for life....."],
      },
    ]);
    if (ask.optionForAction == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
        console.log(
          chalk.bold.green(`${opponent1.name} fuel is ${opponent1.fuel}`)
        );
        if (player1.fuel <= 0) {
          console.log(
            chalk.bold.italic.red("You loose, better luck next time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        opponent1.fuelDecrease();
        console.log(
          chalk.bold.green(`${player1.name} fuel is ${player1.fuel}`)
        );
        console.log(
          chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`)
        );
        if (opponent1.fuel <= 0) {
          console.log(chalk.bold.italic.green("You Won"));
          process.exit();
        }
      }
    }
    if (ask.optionForAction == "Drink portion") {
      player1.fuelIncrease();
      console.log(
        chalk.bold.italic.green(`You drink health your fuel is ${player1.fuel}`)
      );
    }
    if (ask.optionForAction == "Run for life") {
      console.log(chalk.bold.italic.red("you loose, Better luck next time"));
      process.exit();
    }
  }
} while (true);

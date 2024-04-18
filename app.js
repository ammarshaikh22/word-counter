#! /usr/bin/env node
import inquirer from "inquirer";
const ques = await inquirer.prompt([
    { message: "Enter a sentence to count the words", type: "input", name: "words" }
]);
let countWords = ques.words.trim().split(" ");
console.log(countWords);
console.log(`your sentence length is ${countWords.length}`);

var inquirer = require("inquirer");
var fs = require('fs');
var generateMarkdown = require("./utils/generateMarkdown");

function init() {
    inquirer.prompt([
        {
            // NAME
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            // TITLE
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            // LINK
            type: "input",
            name: "link",
            message: "What is the url for the live page?"
        },
        {
            // INSTALLATION
            type: "input",
            name: "installation",
            message: "Please enter any installation instructions for the project:"
        
        },
        {
            // USAGE
            type: "input",
            name: "usage",
            message: "Please enter any instructions any example for using the project:"

        },
        {
            // CREDITS
            type: "input",
            name: "credit",
            message: "Please enter anyone that you would like to credit:"
        },
        {
            // LICENSE
            type: "checkbox",
            name: "license",
            message: "Which license would you like to use?",
            choices: [
                "MIT",
                "The Unlicense"
            ]
        },
        {
            // CONTRIBUTING
            type: "input",
            name: "contributing",
            message: "Please list any instructions for contributing to this project:"
        },
        {
            // TESTS
            type: "input",
            name: "tests",
            message: "Please give a brief description of testing:"
        }
    ]).then(function(data) {

        console.log("data.license", data.license);

        var filename = `${data.title.toLowerCase().split(' ').join('')} readme.md`;

        var readmeText = generateMarkdown(data);

        fs.writeFile(filename, readmeText, function(err) {
            if (err) {
                return console.log(err);
            }

            console.log(`Success! ${filename} was created.`);
        });
    });
}

init();







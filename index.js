const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const readme = require('./utils/generateMarkdown')

const writeFileAsync = util.promisfy(fs.writeFile);


const promptUser = () => {
    return inquirer.prompt([
        
        {
            type:'input',
            name: 'Title of Project',
            message: 'What is the Name of the Project?'
        },
        {
            type:'input',
            name: 'Description',
            message: 'Please give details on how this project works:'
        }, 
        {
            type:'input',
            name: 'Table of Contents',
            message: 'Please enter the Table of Contents here'
        },
        {
            type:'input',
            name: 'Installations',
            message: 'Please give Installation Instructions'
        },
        {
            type:'input',
            name: 'Usage',
            message: 'Please detail how to use this README Generator?'
        },
        {
            type:'list',
            name: 'License',
            message: 'Please select the License used for this project '
        },
        {
            type:'input',
            name: 'Contributions',
            message: 'Please feel free to add your contributions for improvement?'
        },
        {
            type:'input',
            name: 'Questions',
            message: 'Can you provide a link to your Github page?',
            message: 'What is your email address?'
        },
       

]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() => {

    
}

// Function call to initialize app
init();

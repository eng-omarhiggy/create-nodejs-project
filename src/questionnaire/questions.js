const inquirer = require('inquirer');
const path = require('path');
const os = require('os');

async function getProjectDetails(name) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
      default: name,
    },

    {
      type: 'input',
      name: 'description',
      message: 'How would you describe your project?',
    },

    {
      type: 'input',
      name: 'version',
      message: 'What version do you want to start with?',
      default: '0.1.0',
    },

    {
      type: 'input',
      name: 'keywords',
      message: 'Provide a comma-separated list of keywords:',
    },

    {
      type: 'list',
      name: 'license',
      message: 'Please select a license',
      choices: ['ISC', 'AGPL-3.0-only', 'AGPL-3.0-or-later', 'Apache-2.0', 'GPL-3.0-only', 'GPL-3.0-or-later', 'LGPL-3.0-only', 'LGPL-3.0-or-later', 'MIT'],
      default: 'MIT',
    },

    {
      type: 'input',
      name: 'author.name',
      message: 'What is your name?',
    },

    {
      type: 'input',
      name: 'author.email',
      message: 'What is your email?',
    },

    {
      type: 'input',
      name: 'author.url',
      message: 'What is your website?',
    },

    {
      type: 'confirm',
      name: 'isPrivate',
      message: 'Is this project private?',
      default: false,
    },

    {
      type: 'input',
      name: 'projectURL',
      message: 'What is your project website?',
    },

    {
      type: 'confirm',
      name: 'useGithub',
      message: 'Would you like to create a GitHub repository?',
    },

    {
      type: 'confirm',
      name: 'useTesting',
      message: 'Would you like to include testing?',
    },
  ]);
}

async function getGitRemoteDetails() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'git.url',
      message: 'What git remote will you be using?',
      default: '', // TODO include here the default github url
    },

    {
      type: 'input',
      name: 'issueTracker',
      message: 'Where is your issue tracker?',
      default: '', // TODO include here the default github url
    },
  ]);
}

async function getTestingDetails() {
  return inquirer.prompt([
    {
      type: 'checkbox',
      name: 'testPackages',
      message: 'Which test packages do you want to include?',
      choices: ['jest', 'mocha', 'chai', 'sinon', 'nock'],
    },
  ]);
}

async function getAuthFile() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'authPath',
      message: 'What is the path for the auth.json file?',
      default: path.join(os.homedir(), 'auth.json'),
    },
  ]);
}

async function getAuthToken(token) {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'token',
      message: 'What is your GitHub token?',
      default: token,
    },
  ]);
}

exports.getProjectDetails = getProjectDetails;
exports.getGitRemoteDetails = getGitRemoteDetails;
exports.getTestingDetails = getTestingDetails;
exports.getAuthFile = getAuthFile;
exports.getAuthToken = getAuthToken;

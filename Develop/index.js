const inquirer = require('inquirer');
const fs = require('fs');

// Prompt the user for information
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contributing guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    // Generate the README content based on the user's input
    const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license. [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, feel free to reach out to me via GitHub or email.

GitHub: [${answers.username}](https://github.com/${answers.username})

Email: ${answers.email}
`;

    // Write the README content to a file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });

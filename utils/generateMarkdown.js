// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let shield = `https://img.shields.io/badge/license-${license}-blue`;
  return shield;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = `https://opensource.org/licenses/${license}`;
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![License Badge](${renderLicenseBadge(data.license)})

## Table of Content

[Description](#Description)  
[Installation](#Installation) 
[Usage](#Usage)  
[Contributing](#Contributing)  
[Tests](#Tests)  
[Questions](#Questions)  


## Description 
${data.description}
## Installation 
${data.installation}
## Usage 
${data.usage}
## Contributing 
${data.contributing}
## Tests 
${data.tests}
## Questions 

For any questions  or concerns , I can be directly reached via github or email, my email is [${
    data.email
  }](mailto:${data.email}) and my github is [${
    data.username
  }](https://github.com/${data.username}) 

## license 
This work is licensed under [${renderLicenseSection(
    data.license
  )} License](${renderLicenseLink(data.license)})

`;
}

module.exports = generateMarkdown;

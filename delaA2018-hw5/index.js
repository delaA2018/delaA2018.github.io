'use strict';

// Define base URL for GitHub API
const GITHUB_API_BASEURL = 'https://api.github.com/users/';

document.addEventListener('DOMContentLoaded', init); // Execute init when DOM is loaded

// Initialize function
function init() {
  document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let gitHubUsername = document.getElementById('userName').value; // Get input value
    getOtherUserRepos(gitHubUsername); // Call getOtherUserRepos with input value
  });
  getUserRepos(); // Initialize fetching user repositories
}

// Function to fetch user repositories from GitHub API
function getUserRepos() {
  let gitHubUsername = 'delaA2018'; // GitHub username
  let url = GITHUB_API_BASEURL + gitHubUsername + '/repos?sort=created'; // Construct API URL
  fetch(url) // Fetch repository data
    .then(checkStatus) // Check fetch status
    .then((repoData) => { 
      let div = id('container'); // Get container element
      for (const item of repoData) { // Loop through repository data
        
        let githubContainer = document.createElement('div');
        githubContainer.className = 'github-container';

        let githubHeader = document.createElement('div');
        githubHeader.className = 'github-header';

        let title = document.createElement('h1');
        title.textContent = item['name'];
        githubHeader.appendChild(title);

        let githubDescription = document.createElement('div');
        githubDescription.className = 'github-description';

        let description = document.createElement('p');
        description.textContent = item['description'];
        githubDescription.appendChild(description);

        let githubStats = document.createElement('div');
        githubStats.className = 'github-stats';

        let ul = document.createElement('ul');

        let liCreated = document.createElement('li');
        liCreated.textContent = 'Created: ' + item['created_at'];
        ul.appendChild(liCreated);

        let liUpdated = document.createElement('li');
        liUpdated.textContent = 'Updated: ' + item['updated_at'];
        ul.appendChild(liUpdated);

        let liLanguages = document.createElement('li');
        liLanguages.textContent = 'Language(s): ';
        let ulLang = document.createElement('ul');
        let liLang = document.createElement('li');
        liLang.textContent = item['language'];
        ulLang.appendChild(liLang);
        liLanguages.appendChild(ulLang);
        ul.appendChild(liLanguages);

        githubStats.appendChild(ul);

        githubContainer.appendChild(githubHeader);
        githubContainer.appendChild(githubDescription);
        githubContainer.appendChild(githubStats);

        container.appendChild(githubContainer);
      }
    })
    // Code to catch any errors during fetching and prints them to the console
    .catch((error) => {
      console.error('Error: ', error);
    });
}

function getOtherUserRepos(gitHubUsername) {
  let url = GITHUB_API_BASEURL + gitHubUsername + '/repos?sort=created'; // Construct API URL
  fetch(url) // Fetch repository data
    .then(checkStatus) // Check fetch status
    .then((repoData) => { 
      let div = id('container'); // Get container element
      for (const item of repoData) { // Loop through repository data
        
        let githubContainer = document.createElement('div');
        githubContainer.className = 'github-container';

        let githubHeader = document.createElement('div');
        githubHeader.className = 'github-header';

        let title = document.createElement('h1');
        title.textContent = item['name'];
        githubHeader.appendChild(title);

        let githubDescription = document.createElement('div');
        githubDescription.className = 'github-description';

        let description = document.createElement('p');
        description.textContent = item['description'];
        githubDescription.appendChild(description);

        let githubStats = document.createElement('div');
        githubStats.className = 'github-stats';

        let ul = document.createElement('ul');

        let liCreated = document.createElement('li');
        liCreated.textContent = 'Created: ' + item['created_at'];
        ul.appendChild(liCreated);

        let liUpdated = document.createElement('li');
        liUpdated.textContent = 'Updated: ' + item['updated_at'];
        ul.appendChild(liUpdated);

        let liLanguages = document.createElement('li');
        liLanguages.textContent = 'Language(s): ';
        let ulLang = document.createElement('ul');
        let liLang = document.createElement('li');
        liLang.textContent = item['language'];
        ulLang.appendChild(liLang);
        liLanguages.appendChild(ulLang);
        ul.appendChild(liLanguages);

        githubStats.appendChild(ul);

        githubContainer.appendChild(githubHeader);
        githubContainer.appendChild(githubDescription);
        githubContainer.appendChild(githubStats);

        container.appendChild(githubContainer);
      }
    })
    // Code to catch any errors during fetching and prints them to the console
    .catch((error) => {
      console.error('Error: ', error);
    });
}


// Helper function to get element by ID
function id(idName) {
  return document.getElementById(idName);
}

// Function to check fetch status
function checkStatus(response) {
  if (!response.ok) {
    throw Error('Error in request: ' + response.statusText); // Check response status
  }
  return response.json(); // Return JSON data
}
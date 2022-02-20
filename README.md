This is a small frontend React application using the https://jsonplaceholder.typicode.com API. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Typescript](https://www.typescriptlang.org/), by running `npx create-react-app my-app --template typescript`. Additionally, it uses the following react libraries:
1. axios - Promise based HTTP client for the browser and node.js
2. React Router DOM - Enables dynamic routing in a web app
3. MUI - Prebuilt UI components implements Google’s Material Design and its grid system

The application has 2 pages:

### Entry list page:

Fetches a list of entries provided by this url: https://jsonplaceholder.typicode.com/users.

The following properties are displayed on the user list page:

1. username 
2. email
3. name 
4. link to website.

   When the user clicks on the fetched entry (the card or the table row), the user gets navigated to the entry page. 

### Entry details page:

The page gets displayed when the user has clicked on the entry he/she wants to visit.

Fetches the details from the endpoint https://jsonplaceholder.typicode.com/users/{id}, where the {id} is the entry id that has been selected.

The page displays the following properties:

1. name
2. username
3. email
4. address city
5. phone
6. website 
7. company name.

When the user clicks on the website that has been displayed he/she is navigated to the website in a new tab.
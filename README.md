This is a small frontend React application using the https://jsonplaceholder.typicode.com API. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Typescript](https://www.typescriptlang.org/), by running `npx create-react-app my-app --template typescript`. Additionally, it uses the following react libraries:
1. Axios - Promise based HTTP client for the browser and node.js
2. React Router DOM - Enables dynamic routing in a web app
3. MUI - Prebuilt UI components used to create the grid system
np
### How to run the application
Clone or download this repository, then run `npm install` and then `npm run start`.

The application has 2 pages:

### Entry List Page:

![Image One: Entry List Page](https://i.imgur.com/I41nhbG.png)

Fetches a list of entries provided by this url: https://jsonplaceholder.typicode.com/users.

The following properties are displayed on the user list page:

1. username 
2. email
3. name 
4. link to website.

When the user clicks on the fetched entry (the card or the table row), the user gets navigated to the entry page. 

### Entry Details Page:

![Image Two: Entry Details Page](https://i.imgur.com/yF1LbcK.png)

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
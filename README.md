
# **Wander Beyond**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## **Project Description**

To build a website that allows the user to plan a camping trip to a national park.

---

## **User Story**

- As the planner for a camping trip, I want to have access to an application that will help me plan a trip to a national park.
- WHEN I review the application's home page, THEN I am presented with a search option where I can search for a national park by name or location, an option to login to a personal account or create an account, and a navigation bar with options to view camping, hiking, biking, supplies.
- WHEN I click on the login page, THEN I will be routed to a login page where I can login using a unique username and password.
- WHEN I click on the login page and I do not have an account, THEN I can select an option to create an account.
- WHEN I select a national park from a returned search, THEN I am presented with that park's detailed page.
- WHEN I am presented with a national park's detailed page, THEN I am presented with the park's contact information that include the park's name, address, and phone number.
- WHEN I am presented with a national park's detailed page, THEN I am presented with any alerts that may be active at that time.
- WHEN I am presented with a national park's detailed page, THEN I am presented with available camping options.
- WHEN I am presented with a national park's detailed page, THEN I am presented with the amenities that are offered at the park.
- WHEN I am presented with a national park's detailed page, THEN I am presented with activities that are available at the park.
- WHEN I am logged into my account, THEN see a link to go to personal dashboard.
- WHEN I am logged into my account, THEN I am able to save a national park to my account for future access.
- WHEN I am logged into my account and click on saved park, THEN I am taken to that park's detail page.
- WHEN I am logged into my account, THEN have the option to delete any saved parks.

---

## **Table of Contents**


  * We can add another option to our Apollo Server configuration called `context`, which is a lot like middleware in Express.

  * This will allow us to intercept any request to the server and check if there's a valid JWT before the request gets to the resolver.

* Open [auth.js](server/utils/auth.js) and explain the `authMiddleware` function:


<!-- * [Credits](#credits) -->


  * We use the `return` statement to return the `req` object, either modified with user data or not modified at all, and the request will continue to go to its intended resolver function.

* Open [resolvers.js](server/schemas/resolvers.js) and explain the following:

  * Any time we need to implement authentication on a query or mutation, we can add a third parameter called `context` to the resolver function.


## License

[MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)
 

  * If there is a `user` property, we can assume the user's token has been verified and the `user` property now holds data about the user that we stored in the token itself.

---

## Usage

See the deployed version here! [Deployed link](####)

![image](./public/assets/favicon.ico)

---

## **Wireframe**

[Figma][1]

[1]:  "Wander Beyond Wireframe"

---

## **Technology to be used**

- React for frontend
- Javascript
- JWT for authentication
- Material UI for styling
- MongoDB
- Mongoose ODM
- GraphQL
- Express.js 
- Node.js
- National Park API

---

## **Task Breakdown**

- 

---

## **Questions**

If you feel you have any questions, please feel free to reach out to us at stonge.ms@gmail.com, manning.joseph.4342@gmail.com,
or Miguellozano@gmail.com

---

## **Authors**

* Matthew St. Onge

* Joseph Manning

* Miguel Lozano


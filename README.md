# E-commerce-Back-End

## Description ##
An application that allows you to create an employee database to keep track of all departments, roles and employees.

## Installation ##
To install this application you fist need to clone the repository from the link below and then access the integrated terminal. 
Once in the terminal run this command to install all needed dependencies.
```sh
npm install
```
After running the command edit the .env-example file to include your MySQL password and be sure to remove the "-example" from the file name.

Now you'll need to login to your MySQL shell using the command in the terminal.
```sh
mysql -u root -p
```
After you login you'll need to create the data base by entering this command in your MySQL shell.
```sh
source db/schema.sql
```
After running the source command in the MySQL shell go back to the main terminal and run this command to seed the database.
```sh
node seeds/index.js
```
After seeding the database run this command to execute the code.
```sh
node server.js
```

## User Story ##
~~~
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
~~~
## Acceptance Criteria ##
~~~
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
~~~

## Links ##
Link to repository: https://github.com/MarshPupp/E-commerce-Back-End

## Walkthrough ##
Here is the link to the walkthrough video: https://watch.screencastify.com/v/QH5rkh0OLuqshRNoQLcO

## Acknowledgements ##
* Source code was from the Develop folder of the coding-boot-camp/fantastic-umbrella repository. Linked here: https://github.com/coding-boot-camp/fantastic-umbrella
* Insomnia docs were referenced (https://docs.insomnia.rest/insomnia/get-started)
* MDN docs were referenced (https://developer.mozilla.org/en-US/)
* W3Schools were referenced (https://www.w3schools.com/css/default.asp)
* Chat GPT for Read Me format and help

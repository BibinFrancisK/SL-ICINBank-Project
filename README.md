# ICIN Bank - Simplilearn Capstone Project
This application uses <b>Angular frontend</b>, <b>Spring Boot API</b>, and <b>MySQL</b>.
The whole application is containerized using <b>Docker</b>.

## Features of the application
- Users can:
	- Register or log in to the application to maintain a record of activities
	- Deposit and withdraw money from the account
	- View transactions and balance in the primary and savings account
	- Transfer funds between different accounts and add recipients
	- Request cheque books for different accounts
  
-Admin can:
	- Authorize the roles and guidelines for the user
	- Grant access to the user regarding money transfer, deposits, and withdrawal
	- Block the user account in case of any threat
	- Authorize the cheque book requests

## Technologies Used
	- Java 8, SpringBoot framework for back-end logic 
	- MySQL for database management
	- Angular 2, HTML/CSS for front-end development 
	- Selenium and JUnit for automation and testing
	- Git, GitHub, Jenkins, Docker, and AWS for DevOps

## How to run the application using Docker?
	- Pull the docker images by running the following commands on your terminal
		- > docker pull bibinfrancisk/icin-bank:0.0.1.MYSQL
		- > docker pull bibinfrancisk/icin-bank:0.0.1.ANGULAR
		- > docker pull bibinfrancisk/icin-bank:0.0.1.SPRINGBOOT
	- Open a terminal and change the directory to the project's base directory
	- Run the following command on the terminal
		- > docker-compose up
	- To use the application, open a browser and type
		- > http://localhost:4200/admin  :: for admin
		- > http://localhost:4200/login  :: for user




















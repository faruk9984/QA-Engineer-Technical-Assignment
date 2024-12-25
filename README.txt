Detailed setup instructions:
 Open VS code - Clone the GitHub Repo
 Open the Project
 Goto Terminal
 Run the command: npm install cypress --save-dev
 Run the command: npm i --save-dev cypress-mochawesome-reporter
 
Test execution guide:
Open the Cypress Test Runner: npx cypress open
Run Tests in Headless Mode: npx cypress run
Run a specific test file: npx cypress run --spec cypress/e2e/tests/registerTest.cy.js
Generate HTML Report: npx cypress run

Project structure explanation: 
project-folder/
├── cypress/
│   ├── e2e/                # Test files
│   │   ├── user_registration.cy.js
│   ├── fixtures/  
│   │   ├── example.json          
│   │   └── registerData.json    
│   ├── pages/          
│   │   └── registerNewUser.js      
│   ├── support/            
│   │   ├── e2e.js           
│   │   └── commands.js      
├── cypress.config.js        
├── package.json             
└── README.md   
            
Dependencies list:
Cypress
Cypress Mochawesome Reporter

Configuration instructions:
Cypress Configuration: cypress.config.js
Test Data: 
fixtures/ folder for reusable test data.

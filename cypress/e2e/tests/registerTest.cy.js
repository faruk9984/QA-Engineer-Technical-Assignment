///<reference types="cypress" />

import { registerNewUser } from "../../pages/registerNewUser"
const registernewuser = new registerNewUser()
import registerData from '../../fixtures/registerData.json'


describe('Test Scenarios to Automate', () => {

    beforeEach(() => {
        // cy.visit(baseUrl);
        registernewuser.openURL()
        cy.wait(3000)
      });

    it('Register Test 1', () => {
        // registernewuser.openURL()
        registernewuser.clickSignup()
        cy.wait(1000);
        registernewuser.insertUsername(registerData.username)
        cy.wait(1000);
        registernewuser.insertPassword(registerData.password)
        cy.wait(1000);
        registernewuser.clickSignupButton()
        cy.wait(3000)
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('Sign up successful.');
          });
        cy.wait(5000);
 
    })
    it('Verify duplicate username 2', () => {

        registernewuser.clickSignup()
        cy.wait(3000);
        cy.get('#sign-username').type('{ctrl+a}'+registerData.duplicateUsername);
        cy.wait(1000)
        cy.get('#sign-password').type('{ctrl+a}'+registerData.password);
        cy.wait(1000)
        cy.get('button[onclick="register()"]').click();
        cy.wait(2000);
        cy.on('window:alert', (alertText2) => {
            expect(alertText2).to.include('This user already exist.');
          });
        cy.wait(3000)
 
    })

    it('Verify password requirements 3', () => {

        registernewuser.clickSignup()
        cy.wait(3000);
        cy.get('#sign-username').type('{ctrl+a}'+registerData.username);
        cy.wait(1000)
        // cy.get('#sign-password').type('{ctrl+a}'+registerData.invalidPassword);
        // cy.wait(1000)
        cy.get('button[onclick="register()"]').click();
        cy.wait(2000);
        cy.on('window:alert', (alertText3) => {
            expect(alertText3).to.include('Please fill out Username and Password.'); 
          });
        cy.wait(3000)
 
    })

    it('Verify Product Interactions and Shopping Cart Flow 4', () => {
        registernewuser.clickProductDetails()
        registernewuser.clickAddToCart()
        registernewuser.clickProductDetails2()
        registernewuser.clickAddToCart2()
        registernewuser.clickProductDetails3()
        registernewuser.clickAddToCart3()
        registernewuser.remoteItemFromCart()
        registernewuser.totalAmountCheeck()
        registernewuser.placeOrder()

    })

  })
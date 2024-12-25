export class registerNewUser {

    weblocators = {
        clicksignup: "#signin2",
        username: "#sign-username",
        password: "#sign-password",
        signup: 'button[onclick="register()"]',


        samsung: "Samsung galaxy s6",
        samsungvalid: '.name',
        samsungprice: '.price-container',
        nokia: "Nokia lumia 1520",
        nokiavalid: '.name',
        nokiaprice: '.price-container',
        nexus: "Nexus 6",
        nexusvalid: '.name',
        nexusprice: '.price-container',
        addToCard: ".btn-success",
        addToCard2: "Add to cart",
        cart: 'Cart',
        deleteitem: "#tbodyid .success:nth-child(1)",
        delete: "Delete",


        totalprice: '#totalp',
        placeorder: 'Place Order',
        ordername: '#name',
        ordercountry: '#country',
        ordercity: '#city',
        ordercard: '#card',
        ordermonth: '#month',
        orderyesr: '#year',
        orderpurchase: 'Purchase',
        orderconfirmsms: '.sweet-alert',
        orderconfirmok: 'Purchase'



    }

    openURL() {
        cy.visit(Cypress.env('URL'))
        cy.wait(2000)
    }
    clickSignup() {
        cy.get(this.weblocators.clicksignup).click()
    }
    insertUsername(Username) {
        cy.get(this.weblocators.username).type(Username)
        cy.wait(1000)
    }
    insertPassword(Password) {
        cy.get(this.weblocators.password).type(Password)
        cy.wait(1000)
    }
    clickSignupButton() {
        cy.get(this.weblocators.signup).click()
    }
    clickProductDetails() {
        cy.contains(this.weblocators.samsung).click()
        cy.wait(3000)
        cy.get(this.weblocators.samsungvalid).should('contain.text', 'Samsung galaxy s6')
        cy.get(this.weblocators.samsungprice).should('exist')
    }
    clickAddToCart() {
        cy.get(this.weblocators.addToCard).contains(this.weblocators.addToCard2).click()
        cy.wait(3000)
        cy.on('window:alert', (alertText4) => {
            expect(alertText4).to.include('Product added');
        });
        cy.wait(3000)
        cy.get('a[href="index.html"]:nth-last-child(1)').click()
        cy.wait(2000)
    }
    clickProductDetails2() {
        cy.contains(this.weblocators.nokia).click()
        cy.wait(3000)
        cy.get(this.weblocators.nokiavalid).should('contain.text', 'Nokia lumia 1520')
        cy.get(this.weblocators.nokiaprice).should('exist')
    }
    clickAddToCart2() {
        cy.get(this.weblocators.addToCard).contains(this.weblocators.addToCard2).click()
        cy.wait(3000)
        cy.on('window:alert', (alertText5) => {
            expect(alertText5).to.include('Product added');
        });
        cy.wait(3000)
        cy.get('a[href="index.html"]:nth-last-child(1)').click()
        cy.wait(2000)
    }
    clickProductDetails3() {
        cy.contains(this.weblocators.nexus).click()
        cy.wait(3000)
        cy.get(this.weblocators.nexusvalid).should('contain.text', 'Nexus 6')
        cy.get(this.weblocators.nexusprice).should('exist')
    }
    clickAddToCart3() {
        cy.get(this.weblocators.addToCard).contains(this.weblocators.addToCard2).click()
        cy.wait(3000)
        cy.on('window:alert', (alertText6) => {
            expect(alertText6).to.include('Product added');
        });
        cy.wait(4000)
        cy.get('a[href="index.html"]:nth-last-child(1)').click()
        cy.wait(2000)
    }
    remoteItemFromCart() {
        cy.contains(this.weblocators.cart).click()
        cy.wait(10000)
        cy.get(this.weblocators.deleteitem).contains(this.weblocators.delete).click()
        cy.wait(7000)
    }
    totalAmountCheeck() {
        let total = 0;
        cy.get('tr.success').each(($el) => {
            // const price = parseFloat($el.find('.price').text())
            const price = parseFloat($el.find('td:nth-of-type(3)').text())
            total += price
        }).then(() => {
            cy.wait(7000)
            cy.get('#totalp').should('have.text', total.toString())
            cy.wait(2000)
        })
        console.log(total)
        const totalPrice = cy.get(this.weblocators.totalprice)
        console.log("Total Price = ", totalPrice)
        cy.wait(2000)
    }

    placeOrder() {
        cy.contains(this.weblocators.placeorder).click()
        cy.wait(4000)
        cy.get(this.weblocators.ordername).type('Faruq QA',{force: true})
        cy.wait(1000)
        cy.get(this.weblocators.ordercountry).type('USA')
        cy.wait(1000)
        cy.get(this.weblocators.ordercity).type('New York')
        cy.wait(1000)
        cy.get(this.weblocators.ordercard).type('98765432')
        cy.wait(1000)
        cy.get(this.weblocators.ordermonth).type('12')
        cy.wait(1000)
        cy.get(this.weblocators.orderyesr).type('2025')
        cy.wait(1000)
        cy.contains(this.weblocators.orderpurchase).click()
        cy.wait(3000)
        cy.get(this.weblocators.orderconfirmsms).should('contain', 'Thank you for your purchase!')
        cy.wait(1000)
        cy.contains(this.weblocators.orderconfirmok).click()
    }


}
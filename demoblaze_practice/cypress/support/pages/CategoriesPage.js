const locators = require('../../fixtures/locators.json')

class CategoriesPage{
    clickLaptopOption(){return cy.get(locators.laptopsOption).click()}
    checkLaptopPage(){return cy.get(locators.laptopSony).contains('Sony vaio i5')}
    clickMonitorsSection(){return cy.get(locators.monitorsOption).click()}
    checkMonitorsSection(){return cy.get(locators.appleMonitor).contains('Apple monitor 24')}
    clickPhonesSection(){return cy.get(locators.phonesOption).click()}
    checkPhonesSection(){return cy.get(locators.phoneSamsung).contains('Samsung galaxy s6')}

    clickAddProduct(){return cy.get(locators.addToCartButton).click()}
    clickCartMenu(){return cy.get(locators.cartLink).click()}
    clickPlaceOrder(){return cy.get(locators.buttonPlaceOrder).click()}
    fillName(){return cy.get(locators.nameFieldForm).type('Ximena Smith')}
    fillCountry(){return cy.get(locators.countryFieldForm).type('Brazil')}
    fillCity(){return cy.get(locators.cityFieldForm).type('Rio de Janeiro')}
    fillCreditCard(){return cy.get(locators.creditCard).type('dsjdkw324')}
    fillMonth(){return cy.get(locators.monthFieldForm).type('October')}
    fillYear(){return cy.get(locators.yearFieldForm).type(2024)}
    clickPurchaseButton(){return cy.get(locators.purchaseButton).click()}
    checkSuccessfulMessageBuy(){return cy.get(locators.successfulLogo)
        .should('be.visible')}
    clickDeleteProductLink(){return cy.get(locators.deleteProductLink).click()}
    checkPriceProductCart(){return cy.get(locators.priceProductCart).should('have.value', '')}


}
export default CategoriesPage;
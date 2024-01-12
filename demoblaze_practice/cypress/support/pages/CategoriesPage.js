const locators = require('../../fixtures/categoriesLocators.json')

class CategoriesPage{
    clickLaptopOption(){return cy.get(locators.laptopsOption).click()}
    checkLaptopPage(text){return cy.get(locators.laptopSony).contains(text)}
    clickMonitorsSection(){return cy.get(locators.monitorsOption).click()}
    checkMonitorsSection(text){return cy.get(locators.appleMonitor).contains(text)}
    clickPhonesSection(){return cy.get(locators.phonesOption).click()}
    checkPhonesSection(text){return cy.get(locators.phoneSamsung).contains(text)}

    clickAddProduct(){return cy.get(locators.addToCartButton).click()}
    clickCartMenu(){return cy.get(locators.cartLink).click()}
    clickPlaceOrder(){return cy.get(locators.buttonPlaceOrder).click()}
    fillName(text){return cy.get(locators.nameFieldForm).type(text)}
    fillCountry(text){return cy.get(locators.countryFieldForm).type(text)}
    fillCity(text){return cy.get(locators.cityFieldForm).type(text)}
    fillCreditCard(text){return cy.get(locators.creditCard).type(text)}
    fillMonth(text){return cy.get(locators.monthFieldForm).type(text)}
    fillYear(number){return cy.get(locators.yearFieldForm).type(number)}
    clickPurchaseButton(){return cy.get(locators.purchaseButton).click()}
    checkSuccessfulMessageBuy(){return cy.get(locators.successfulLogo)
        .should('be.visible')}
    clickDeleteProductLink(){return cy.get(locators.deleteProductLink).click()}
    checkPriceProductCart(){return cy.get(locators.priceProductCart).should('have.value', '')}


    beingOnLaptopPage(text){
        this.clickLaptopOption();
        this.checkLaptopPage(text);
    }

    beingOnMonitorPage(text){
        this.clickMonitorsSection();
        this.checkMonitorsSection(text);
    }

    fillForm(text1,text2,text3,text4,text5,number){
        this.fillName(text1);
        this.fillCountry(text2);
        this.fillCity(text3);
        this.fillCreditCard(text4);
        this.fillMonth(text5);
        this.fillYear(number);
    }

    addingProductToCard(text){
        this.checkPhonesSection(text).click();
        this.clickAddProduct();
    }


}
export default CategoriesPage;
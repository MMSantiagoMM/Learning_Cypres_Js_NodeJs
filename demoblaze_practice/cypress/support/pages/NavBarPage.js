const locators = require('../../fixtures/locators.json');

class NavBarPage{
    
    clickHomeLink(){return cy.get(locators.homeNavBar).click()}
    checkNameBrand(){return cy.get(locators.nameBrand).should('be.visible')}
    clickContactLink(){return cy.get(locators.contactNavBar).click()}
    checkModalOpened(){return cy.get(locators.modalContac).should('be.visible')}
    clickAboutUsLink(){return cy.get(locators.aboutUsNavBar).click()}
    checkButtonVideo(){return cy.get(locators.buttonVideoAboutUs).should('be.visible')}
    clickCartLink(){return cy.get(locators.cartLink).click()}
    checkIsButtonDisplayed(){return cy.get(locators.buttonPlaceOrder).should('be.visible')}
    clickLogInLink(){return cy.get(locators.logInNavBar).click()}
    checkIsLogInButtonDisplayed(){return cy.get(locators.logInButton).should('be.visible')}
    clickSignUpLink(){return cy.get(locators.signNavBar).click()}
    checkSignUpButtonDisplayed(){return cy.get(locators.signUpButton).should('be.visible')}





}
export default NavBarPage;
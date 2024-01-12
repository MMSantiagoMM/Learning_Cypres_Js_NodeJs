const locators = require('../../fixtures/navigationLocators.json');
const beVisible = "be.visible";

class NavBarPage{
    
    clickHomeLink(){return cy.get(locators.homeNavBar).click()}
    checkNameBrand(){return cy.get(locators.nameBrand).should(beVisible)}
    clickContactLink(){return cy.get(locators.contactNavBar).click()}
    checkModalOpened(){return cy.get(locators.modalContac).should(beVisible)}
    clickAboutUsLink(){return cy.get(locators.aboutUsNavBar).click()}
    checkButtonVideo(){return cy.get(locators.buttonVideoAboutUs).should(beVisible)}
    clickCartLink(){return cy.get(locators.cartLink).click()}
    checkIsButtonDisplayed(){return cy.get(locators.buttonPlaceOrder).should(beVisible)}
    clickLogInLink(){return cy.get(locators.logInNavBar).click()}
    checkIsLogInButtonDisplayed(){return cy.get(locators.logInButton).should(beVisible)}
    clickSignUpLink(){return cy.get(locators.signNavBar).click()}
    checkSignUpButtonDisplayed(){return cy.get(locators.signUpButton).should(beVisible)}





}
export default NavBarPage;
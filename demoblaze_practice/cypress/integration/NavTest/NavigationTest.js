import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import NavBarPage from "../../support/pages/NavBarPage.js";
const navBarPage = new NavBarPage();

Given('Visit the DemoBlaze homepage',()=>{
    cy.visit("/");
});

When('User click in the Home link',()=>{
    navBarPage.clickHomeLink();
});

Then('The main page is visible',()=>{
    navBarPage.checkNameBrand();
})



// Given('Visit the DemoBlaze homepage',()=>{
//     cy.visit('/');
// })

When('User click in the contact link',()=>{
    navBarPage.clickContactLink();
})

Then('A modal is opened in the main page',()=>{
    navBarPage.checkModalOpened();
})



// Given('Visit the DemoBlaze homepage',()=>{
//     cy.visit('/');
// })

When('User click in the about us link',()=>{
    navBarPage.clickAboutUsLink();
})

Then('The video can be played',()=>{
    navBarPage.checkButtonVideo();
})



Given('Visit the DemoBlaze homepage',()=>{
    cy.visit('/');
})

When('User click in the cart link',()=>{
    navBarPage.clickCartLink();
})

Then('The place order button is desplayed',()=>{
    navBarPage.checkIsButtonDisplayed();
})



// Given('Visit the DemoBlaze homepage',()=>{
//     cy.visit('/');
// })

When('User click in the login link',()=>{
    navBarPage.clickLogInLink();
})

Then('The login button is desplayed',()=>{
    navBarPage.checkIsLogInButtonDisplayed();
})



// Given('Visit the DemoBlaze homepage',()=>{
//     cy.visit('/');
// })

When('User click in the sign up link',()=>{
    navBarPage.clickSignUpLink();
})

Then('The sign up button is desplayed',()=>{
    navBarPage.checkSignUpButtonDisplayed();
})


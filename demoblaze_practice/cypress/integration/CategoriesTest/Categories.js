import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import CategoriesPage from '../../support/pages/CategoriesPage.js';
const locators = require('../../fixtures/categoriesLocators.json')
const categoriesPage = new CategoriesPage();

Given('The user is in the main page',()=>{
    cy.visit('/');
});

When('User click on laptop option',()=>{
    categoriesPage.beingOnLaptopPage(locators.laptopSonyName);
})

When('User click on monitors option',()=>{
    categoriesPage.beingOnMonitorPage(locators.monitorAppleName);
})

When('User click in the phones section',()=>{
    categoriesPage.clickPhonesSection();
})

Then('The phones section is visible',()=>{
    categoriesPage.checkPhonesSection(locators.phoneSamsungName);
})


// Given('The user is in the main page',()=>{
//     cy.visit('/');
// })

When('User click on monitors option',()=>{
    categoriesPage.clickMonitorsSection();
})

When('User click on Apple monitor',()=>{
    categoriesPage.checkMonitorsSection(locators.monitorAppleName).click();
})

When('User add product to cart',()=>{
    categoriesPage.clickAddProduct();
})

When('User goes to the cart menu option',()=>{
    categoriesPage.clickCartMenu();
})

When('User click place order button',()=>{
    categoriesPage.clickPlaceOrder();
})

When('User fill all fields of the form',()=>{
    categoriesPage.fillForm(
        locators.nameInForm,locators.countryInForm,
        locators.cityInForm,locators.creditCardInForm,
        locators.monthInForm,locators.yearInForm
        );
})

When('User click purchase button to finish the order',()=>{
    
    categoriesPage.clickPurchaseButton();
})

Then('The successful message is displayed',()=>{
  
    categoriesPage.checkSuccessfulMessageBuy();
})


// Given('Removing element from a cart',()=>{
//     cy.visit('/');
// })

When('User add a product to the cart',()=>{
    categoriesPage.addingProductToCard(locators.phoneSamsungName);
})

When('User goes to the cart section',()=>{
    categoriesPage.clickCartMenu();
})

When('User delete the product of the cart',()=>{
    categoriesPage.clickDeleteProductLink();
})

Then('The cart is empty',()=>{
    categoriesPage.checkPriceProductCart();
})




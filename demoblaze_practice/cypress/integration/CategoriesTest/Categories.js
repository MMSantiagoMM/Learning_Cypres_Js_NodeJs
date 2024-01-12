import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import CategoriesPage from '../../support/pages/CategoriesPage.js';
const categoriesPage = new CategoriesPage();

Given('The user is in the main page',()=>{
    cy.visit('/');
});

When('User click on laptop option',()=>{
    categoriesPage.clickLaptopOption();
    categoriesPage.checkLaptopPage();
})

When('User click on monitors option',()=>{
    categoriesPage.clickMonitorsSection();
    categoriesPage.checkMonitorsSection();
})

When('User click in the phones section',()=>{
    categoriesPage.clickPhonesSection();
})

Then('The phones section is visible',()=>{
    categoriesPage.checkPhonesSection();
})


// Given('The user is in the main page',()=>{
//     cy.visit('/');
// })

When('User click on monitors option',()=>{
    categoriesPage.clickMonitorsSection();
})

When('User click on Apple monitor',()=>{
    categoriesPage.checkMonitorsSection().click();
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
    categoriesPage.fillName();
    categoriesPage.fillCountry();
    categoriesPage.fillCity();
    categoriesPage.fillCreditCard();
    categoriesPage.fillMonth();
    categoriesPage.fillYear();
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
    categoriesPage.checkPhonesSection().click();
    categoriesPage.clickAddProduct();
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




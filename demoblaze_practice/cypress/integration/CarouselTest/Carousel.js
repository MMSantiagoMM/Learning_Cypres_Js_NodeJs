import {Given,When,Then, Before} from "cypress-cucumber-preprocessor/steps"
import CarouselPage from '../../support/pages/CarouselPage.js';
const carouselPage = new CarouselPage();

Before(()=>{
    carouselPage.checkStatusCode();
})

Given("I am in the DemoBlaze homepage",()=>{
    cy.visit("/");
})

When("User click the right arrow",()=>{
    carouselPage.clickRightArrow();
})

When("User click the left arrow",()=>{
    
    carouselPage.clickLeftArrow();
})

Then("The second image is visible",()=>{
    carouselPage.checkSecondImageVisible();
    
})


// Given("I am in the DemoBlaze homepage",()=>{
//     cy.visit("/");
// })

When("User click twice to the right arrow",()=>{
    carouselPage.clickTwiceRighArrow();
})

Then("The third image is visible",()=>{
    carouselPage.isVisibleThirdImage();
})


// Given("I am in the DemoBlaze homepage",()=>{
//     cy.visit("/");
// })

When("User check the status code",()=>{
    carouselPage.checkStatusCode();
})

When("User click twice to the left arrow",()=>{
    carouselPage.clickTwiceRighAndTwiceLeftArrow();
})

Then("The first image is visible",()=>{
    carouselPage.isVisibleFirstImage();
})



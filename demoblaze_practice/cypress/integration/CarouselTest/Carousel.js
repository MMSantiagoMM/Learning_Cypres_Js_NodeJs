import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import CarouselPage from '../../support/pages/CarouselPage.js';
const carouselPage = new CarouselPage();


Given("Visit the DemoBlaze homepagee",()=>{
    cy.visit("/");
})

When("User click the right arrow",()=>{
    carouselPage.clickRightArrow();
})

When("User click the left arrow",()=>{
    cy.wait(2000);
    carouselPage.clickLeftArrow();
})

Then("The second image is visible",()=>{
    carouselPage.isVisibleSecondImage();
    carouselPage.isNotVisibleFirstImage();
})


Given("I am in the DemoBlaze homepage",()=>{
    cy.visit("/");
})

When("User click twice to the right arrow",()=>{
    carouselPage.clickRightArrow();
    cy.wait(1000);
    carouselPage.clickRightArrow();
})

Then("The third image is visible",()=>{
    carouselPage.isVisibleThirdImage();
})


Given("I am in the DemoBlaze homepage",()=>{
    cy.visit("/");
})

When("User check the status code",()=>{
    carouselPage.checkStatusCode();
})

When("User click twice to the left arrow",()=>{
    carouselPage.clickRightArrow();
    cy.wait(1000);
    carouselPage.clickRightArrow();
    cy.wait(1000);
    carouselPage.clickLeftArrow();
    cy.wait(1000);
    carouselPage.clickLeftArrow();
})

Then("The first image is visible",()=>{
    carouselPage.isVisibleFirstImage();
})



const carouselLocators = require('../../fixtures/locators.json')

class CarouselPage{

    clickRightArrow(){return cy.get(carouselLocators.rightArrow).click();}
    clickLeftArrow(){return cy.get(carouselLocators.leftArrow).click();}
    isVisibleSecondImage(){return cy.get(carouselLocators.secondImage).should('be.visible')}
    isNotVisibleFirstImage(){return cy.get(carouselLocators.firtImage).should('not.exist')}
    isVisibleThirdImage(){return cy.get(carouselLocators.thirdImage).should('be.visible')}
    isVisibleFirstImage(){return cy.get(carouselLocators.firtImage).should('be.visible')}
    checkStatusCode(){
        cy.request({
            method: 'GET',
            url: 'https://www.demoblaze.com'
        }).then((response)=>{
            return expect(response.status).to.eq(200);
        })
    }


}
export default CarouselPage;
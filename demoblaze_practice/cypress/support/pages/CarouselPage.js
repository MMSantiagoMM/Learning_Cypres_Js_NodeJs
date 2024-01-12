const carouselLocators = require('../../fixtures/carouselLocators.json')
const beVisible = "be.visible";
const notExist = "not.exist";


class CarouselPage{

    

    clickRightArrow(){return cy.get(carouselLocators.rightArrow).click();}
    clickLeftArrow(){
        cy.wait(2000);
        return cy.get(carouselLocators.leftArrow).click();
    }
    isVisibleSecondImage(){return cy.get(carouselLocators.secondImage).should(beVisible)}
    isNotVisibleFirstImage(){return cy.get(carouselLocators.firtImage).should(notExist)}
    isVisibleThirdImage(){return cy.get(carouselLocators.thirdImage).should(beVisible)}
    isVisibleFirstImage(){return cy.get(carouselLocators.firtImage).should(beVisible)}
    checkStatusCode(){
        cy.request({
            method: 'GET',
            url: 'https://www.demoblaze.com'
        }).then((response)=>{
            return expect(response.status).to.eq(200);
        })
    }
    checkSecondImageVisible(){
        this.isVisibleSecondImage();
        this.isNotVisibleFirstImage();
    }

    clickTwiceRighArrow(){
        this.clickRightArrow();
        cy.wait(1000);
        this.clickRightArrow();
    }

    clickTwiceRighAndTwiceLeftArrow(){
        this.clickRightArrow();
        cy.wait(1000);
        this.clickRightArrow();
        cy.wait(1000);
        this.clickLeftArrow();
        
        this.clickLeftArrow();
    }


}
export default CarouselPage;
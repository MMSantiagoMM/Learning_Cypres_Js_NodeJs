Feature: Carousel Feature

    Through this feature the user should be able to navigate on the carousel

  Background: Being in the main page
    Given I am in the DemoBlaze homepage
    
  @smoke
  Scenario: Swipe corousel one position to right side
    #Given I am in the DemoBlaze homepage
    When User click the right arrow
    When User click the left arrow
    Then The second image is visible
  

  @smoke
  Scenario: Swipe corousel another position to the right side
    #Given I am in the DemoBlaze homepage
    When User click twice to the right arrow
    Then The third image is visible
  
  @smoke
  Scenario: Swipe carousel to first position
    #Given I am in the DemoBlaze homepage
    When User check the status code
    When User click twice to the left arrow
    Then The first image is visible

Feature: Categories Feature

Through this feature the user should be able navigate in the Categories section and perfom different action with
the products, like a select product, add product to the cart, buying cart and removing elements from cart


Scenario: Navigate among different categories in the categories section
    Given The user is in the main page
    When User click on laptop option
    When User click on monitors option
    When User click in the phones section
    Then The phones section is visible

Scenario: Buying a product
    Given The user is in the main page
    When User click on monitors option
    When User click on Apple monitor
    When User add product to cart
    When User goes to the cart menu option 
    When User click place order button
    When User fill all fields of the form  
    When User click purchase button to finish the order
    Then The successful message is displayed

Scenario: Removing element from a cart
    Given The user is in the main page
    When User add a product to the cart
    When User goes to the cart section
    When User delete the product of the cart
    Then The cart is empty
/// <reference types="Cypress" />


describe('My second test suite' , function()
{

it('My second test case',function() {


cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)

cy.get('.products').as('Productlocator')

//iterating and selecting
cy.get('@Productlocator').find('.product').each(($el, index, $list) => {
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes("Cashews"))
{
   // $el.find("button").click()    
//cy.wrap($el).find('.product-action').click()
cy.wrap($el).find("button").click()
}
})


cy.get('.cart-icon').click()
//cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.get('.button').contains('Place Order').click()



 })

})
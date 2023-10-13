/// <reference types="Cypress" />


describe('My first test suite' , function()
{

it('My first test case',function() {


cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)
//parent child chaining
cy.get('.products').as('Productlocator')
cy.get('@Productlocator').find('.product ').eq(3).contains('ADD TO CART').click().then(function()
{
    console.log('sf')
})

//iterating and selecting
cy.get('@Productlocator').find('.product').each(($el, index, $list) => {
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes("Cashews"))
{
   // $el.find("button").click()    
//cy.wrap($el).find('.product-action').click()
cy.wrap($el).find("button ").click()
}
})

//assert if logo text is corrctly displyed
cy.get('.brand').should('have.text','GREENKART')

//to print in cypress log
cy.get('.brand.greenLogo').then(function(logo)
{
    cy.log(logo.text())
})
//cy.log(logo.text())
//cy.log(cy.get('.brand').text())





 })

})
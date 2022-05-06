import Helper from '../../support/helper'
import CounterPage from '../../support/PageObjects/counterpage'
const helper = new Helper()

describe('Counter Page', () => {
  const page = new CounterPage()

  beforeEach(() => {
    cy.visit(page.url())
  })

  it('has correct headers', () => {
    page.brand().should('have.text', page.brandName())
    page.header().should('have.text', 'About')
    page.header().should('have.attr', 'href')
    .and('match', new RegExp(page.aboutLink()))
  })

  
  it('has correct navigation menu',() => {
    page.navigationItems().invoke('text').then(helper.cleanupWhiteSpaces)
    .should('contain', 'Home')
    .should('contain', 'Counter')
    .should('contain', 'Fetch data')
  })
  
  it('default view has right heading and description', () => {
    page.title().should('have.text', 'Counter')
    page.description().should('have.text','Add two numbers. Maximum value is 100.Current result: 0')

  })

  it('addition functionality works correctly', () => {
    page.inputA().type('12')
    page.inputB().type('3')
    page.addButton().click()

    page.description().should('have.text','Add two numbers. Maximum value is 100.Current result: 15')
  })
  
   // fails accessibility checks
   it('should pass accessibility check', () => {
    cy.contains('Counter')
    cy.injectAxe()
    cy.checkA11y()
  })
})

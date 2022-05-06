import HomePage from '../../support/PageObjects/homepage'
import Helper from '../../support/helper'
const helper = new Helper()

describe('Home Page', () => {
  const page=new HomePage()

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
    .should('contain', page.navigationMenuNames()[0])
    .should('contain', page.navigationMenuNames()[1])
    .should('contain', page.navigationMenuNames()[2])
  })

   it('default view has right heading and description', () => {
    page.title().should('have.text', 'Hello, world!')
    page.survey().should('have.text','How is Blazor working for you?')
  })

   // fails accessibility checks
  it('should pass accessibility check', () => {
    cy.contains('Welcome to your new app.')
    cy.injectAxe()
    cy.checkA11y()
  })
})
  
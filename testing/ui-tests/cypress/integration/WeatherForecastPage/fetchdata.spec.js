import FetchDataPage from '../../support/PageObjects/fetchdatapage'
import Helper from '../../support/helper'
const helper = new Helper()

describe('Weather Forecast Page', () => {
  const page=new FetchDataPage()

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
    page.title().should('have.text', 'Weather forecast')
    page.description().should('have.text','This component demonstrates fetching data from the server.Nothing here...')
    page.fetchButton().should('have.text', 'Fetch')
  })

  it('clicking fetch button shows weather forecast results', () => {
    page.fetchButton().click()
    page.resultsTable().should('not.be.empty')
    page.resultsTableHeaders().invoke('text').then(helper.cleanupWhiteSpaces)
    .should('contain', 'Date')
    .should('contain', 'Temp. (C)')
    .should('contain', 'Temp. (F)')
    .should('contain', 'Summary')


    page.resultsTableRows().children().should('have.length',5)

    for (let i = 1; i <= 5; i++) {
      page.resultsTableRows().get(`tr:nth-child(${i}) td`).invoke('text').then(helper.cleanupWhiteSpaces)
      .should('match', /^[0-9][0-9]?\/[0-9][0-9]?\/[0-9]{4}.*[0-9][0-9]?.*[0-9][0-9]?(?:Freezin|Bracing|Chilly|Cool|Mild|Warm|Balmy|Hot|Sweltering|Scorching)$/)  
    } 
  })

   // fails accessibility checks
  it('should pass accessibility check', () => {
    cy.contains('Welcome to your new app.')
    cy.injectAxe()
    cy.checkA11y()
  })
})
  
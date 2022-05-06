import Common from './common'
import config from '../../../cypress.json'

class FetchDataPage extends Common {
    url(){
        return config.baseUrl + config.fetchData
    }
 
    title() {
        return cy.get('h1')
    }

    description() {
        return cy.get('p')
    }

    fetchButton(){
        return cy.get('button.btn.btn-primary')
    }

    emptyResults(){
        return cy.get('p em')
    }

    resultsTable(){
        return cy.get('table')
    }

    resultsTableHeaders(){
        return cy.get('table thead tr th')
    }

    resultsTableRows(){
        return cy.get('table tbody')
    }

    resultsTableFirstRow(){
        return cy.get('table tbody tr:nth-child(1) td')
    }

    resultsTableColumns(){
        return cy.get('table tbody td')
    }
}
    
export default FetchDataPage
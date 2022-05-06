import Common from './common'
import config from '../../../cypress.json'

class CounterPage extends Common {
    url(){
        return config.baseUrl + config.counterPage
    }
 
    title() {
        return cy.get('h1')
    }

    description() {
        return cy.get('p')
    }

    addButton(){
        return cy.get('button.btn.btn-primary')
    }

    inputA(){
        return cy.get('input#valueA')
    }

    inputB(){
        return cy.get('input#valueB')
    }

}
    
export default CounterPage
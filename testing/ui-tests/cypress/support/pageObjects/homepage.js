import Common from '../pageObjects/common'
import config from '../../../cypress.json'

class HomePage extends Common {
    url(){
        return config.baseUrl;
    }

    title() {
        return cy.get('h1')
    }

    aboutLink(){
       return 'https://docs.microsoft.com/aspnet/'
    }

    header(){
        return cy.get('div.top-row.px-4 a')
    }

    survey(){
        return cy.get('div.alert.alert-secondary.mt-4 strong')
    }
}
    

export default HomePage
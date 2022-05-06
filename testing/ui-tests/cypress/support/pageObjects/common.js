class Common {

    brand(){
        return cy.get('div .navbar-brand')
    }

    brandName(){
        return 'moula-qa-eng-challenge'
    }

    aboutLink(){
       return 'https://docs.microsoft.com/aspnet/'
    }

    header(){
        return cy.get('div.top-row.px-4 a')
    }

    navigationBar(){
        return cy.get('.sidebar')
    }

    navigationTitle(){
        return cy.get('.sidebar.top-row')
    }

    navigationItems(){
        return cy.get('div.nav-item.px-3')
    }

    navigationMenuNames(){
        return ['Home', 'Counter', 'Fetch data']
    }
}
    
export default Common
class loginElement {
    signInButton(){
        return cy.get('#SubmitLogin')
    }
    emailInput(){
        return cy.get('#email')
    }
    passInput(){
        return cy.get('#passwd')
    }
    emailCreateInput(){
        return cy.get('#email_create')
    }
    emailCreateButton(){
        return cy.get('#SubmitCreate')
    }
}

export default loginElement
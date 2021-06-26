class createAccountElement {
    genderMale(){
        return cy.get('#uniform-id_gender1')
    }
    genderFemale(){
        return cy.get('#uniform-id_gender2')
    }
    firstNameInput(){
        return cy.get('#customer_firstname')
    }
    lastNameInput(){
        return cy.get('#customer_lastname')
    }
    emailInput(){
        return cy.get('#email')
    }
    passInput(){
        return cy.get('#passwd')
    }
    addressInput(){
        return cy.get('#address1')
    }
    cityInput(){
        return cy.get('#city')
    }
    zipInput(){
        return cy.get('#postcode')
    }
    phoneInput(){
        return cy.get('#phone_mobile')
    }
    daySelect(){
        return cy.get('#days')
    }
    monthSelect(){
        return cy.get('#months')
    }
    yearSelect(){
        return cy.get('#years')
    }
    countrySelect(){
        return cy.get('#id_country')
    }
    stateSelect(){
        return cy.get('#id_state')
    }
    registerButton(){
        return cy.get('#submitAccount')
    }

}
export default createAccountElement
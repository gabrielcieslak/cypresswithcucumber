// Given access automationpraticle sign in page
// When fill in email in create account
// And click in create account button
// And fill in all required informations
// And click register button
// Then I should have a new account
// Given access automationpraticle sign in page
// When fill in email and login
// And click in sing in button
// Then I should be logged

import homeElement from '../Page Elements/homeElements'
import createAccountElement from '../Page Elements/createAccountElements'
import loginElement from '../Page Elements/loginElements'

const faker = require('faker')
const home = new homeElement()
const createAccount = new createAccountElement()
const login = new loginElement()

const userCreate = {
    name:faker.name.firstName(),
    lastname:faker.name.lastName(),                
    pass: 'testpass',
    address: 'Av. Teste',
    city: 'Testovia',
    zip : '00000',
    phone: '5541996524866'
}
let email = userCreate.name + '.'+ userCreate.lastName +'@cypresstest.com'

Given("access automationpraticle sign in page",()=>{
    cy.visit('/')
    home.signIn().click()
})
When("fill in email in create account",()=>{
    login.emailCreateInput().type(email)
    
})
And("click in create account button",()=>{
    login.emailCreateButton().click()
})
And("fill in all required informations",()=>{
    createAccount.firstNameInput().type(userCreate.name)
    createAccount.lastNameInput().type(userCreate.lastname)
    createAccount.passInput().type(userCreate.pass)
    createAccount.addressInput().type(userCreate.address)
    createAccount.cityInput().type(userCreate.city)
    createAccount.zipInput().type(userCreate.zip)
    createAccount.stateSelect().invoke('show').select('1')
    createAccount.phoneInput().type(userCreate.phone)
})
And("click register button",()=>{
    createAccount.registerButton().click()
})
Then("I should have a new account",()=>{
    cy.log(email)
})

// Login
When("fill in email and login",()=>{
    login.emailInput().type(email)
    login.passInput().type(userCreate.pass)
})
And("click in sing in button",()=>{
    login.signInButton().click()
})
Then("I should be logged",()=>{
    cy.log(email)
})
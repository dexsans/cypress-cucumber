// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {given} = require('cypress-cucumber-preprocessor')

import HomePage from "../pageObjects/homepage";

const url = 'https://facebook.com';

given('I open Facebook page', () => {
    cy.visit(url)

    const homepage = new HomePage()

    const emailOrPhone = homepage.getEmailOrPhone()
    cy.get(emailOrPhone.xpath).type('email@gmail.com')

    const pwd = homepage.getPassword()
    cy.get(pwd.xpath).type('password')

    const loginBtn = homepage.getLoginBtn()
    cy.get(loginBtn.xpath).click()
})
import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage.js'

const loginPage = new loginPage

describe('Orange HRM Tests', () => {

  const selectorList = {
    dashBoard: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    myInfoNickName: "[name='firstName']",
    //myInfoMiddleName: "[name='middleName']",
    //myInfoLastName: "[name='lastName']",
    genericField: ".oxd-input--active",
    dates: "[placeholder='yyyy-dd-mm']",
    closeButton: ".--close",
    submitButton: "[type='submit']",
    saveSuccess: ".oxd-toast-close",
    arrowsMyInfo: ".oxd-select-text--arrow",
    nacionality: ".oxd-select-dropdown > :nth-child(27)",
    martialStatus: ".oxd-select-dropdown > :nth-child(3)",
    gender:".oxd-radio-wrapper"
  }
 
  it.only('Login Success', () => {
    loginPage.accessLoginPage()
    /* cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashBoard)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.myInfoNickName).clear().type('NickNameTest')
    cy.get(selectorList.genericField).eq(1).clear().type('MiddleNameTest')
    cy.get(selectorList.genericField).eq(2).clear().type('LastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('EmplyoeeId')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherId333')
    cy.get(selectorList.genericField).eq(5).clear().type('DLTest')
    cy.get(selectorList.dates).eq(0).clear().type("2033-05-04")
    cy.get(selectorList.closeButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get(selectorList.saveSuccess)
    cy.get(selectorList.arrowsMyInfo).eq(0).click()
    cy.get(selectorList.nacionality).click()
    cy.get(selectorList.arrowsMyInfo).eq(1).click()
    cy.get(selectorList.martialStatus).click()
    cy.get(selectorList.dates).eq(1).clear().type("2001-05-04")
    cy.get(selectorList.closeButton).click()
    cy.get(selectorList.gender).eq(1).click()
    cy.get(selectorList.submitButton).eq(1).click()
    cy.get(selectorList.saveSuccess) */
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username) 
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})  
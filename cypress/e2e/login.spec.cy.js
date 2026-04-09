import userData from '../fixtures/users/userData.json'


describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar',
    wrongCredentialAlert: "[role='alert']",
    dashBoard: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    myInfoNickName: "[name='firstName']",
    //myInfoMiddleName: "[name='middleName']",
    //myInfoLastName: "[name='lastName']",
    genericField: ".oxd-input--active",
    licenseExpire: "[placeholder='yyyy-dd-mm']",
    closeButton: ".--close",
    submitButton: "[type='submit']",
    saveSuccess: ".oxd-toast-close"
  }
 
  it.only('Login Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashBoard)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.myInfoNickName).clear().type('NickNameTest')
    cy.get(selectorList.genericField).eq(1).clear().type('MiddleNameTest')
    cy.get(selectorList.genericField).eq(2).clear().type('LastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('EmplyoeeId')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherId333')
    cy.get(selectorList.genericField).eq(5).clear().type('DLTest')
    cy.get(selectorList.licenseExpire).eq(0).clear().type("2001-05-04")
    cy.get(selectorList.closeButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get(selectorList.saveSuccess)


  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username) 
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})  
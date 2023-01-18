describe('My First Test', () => {

  it('Visits the Login Page', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

  })
  it('test successfully login', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type("tomsmith")

    cy.get('#password').type("SuperSecretPassword!")

    cy.get(".fa").click()

  })
  it('test login with wrong password ', () => {
    
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type("tomsmith")

    cy.get('#password').type("supersecretpassword!")

    cy.get(".fa").click()
    
  })
  it('test login with wrong username ', () => {
    
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type("tomsmit")

    cy.get('#password').type("SuperSecretPassword!")

    cy.get(".fa").click()
    
  })



})



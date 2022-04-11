describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  })

  it('should update display of running total with number buttons', () =>{
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('.display').should('contain', '21');
  })

  it('should update display with result of adding', () => {
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '29');
  })

  it('should update display with result of subtraction', () => {
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '13');
  })

  it('should update display with result of multiplication', () => {
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '168');
  })
  it('should update display with result of division', () => {
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3');
  })

  it('should chain together multiple operations', () => {
    cy.get('#number3').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '145');
  })

  it('should display negative numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-47');
  })

  it('should display decimals', () => {
    cy.get('#number3').click();
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.8')
  })

  it('should display very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '90000000000000000000');
  })

  it('should deal with division by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error');
  })

})
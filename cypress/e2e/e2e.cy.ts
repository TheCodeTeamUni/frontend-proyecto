import { faker } from '@faker-js/faker';

/*
Initialization
*/

describe('e2e', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.wait(1000);
  });

  after(() => {});

  /*
Register Aspirant
*/

  it('Register Aspirant', () => {
    cy.contains('About Us');
    cy.get(
      'body > div.main-wrapper > app-root > app-landing > main > header > div > div > div.col-xxl-5 > div > div.d-grid.gap-3.d-sm-flex.justify-content-sm-center.justify-content-xxl-start.mb-3 > a'
    )
      .contains('Join Now')
      .click();

    cy.get(
      'body > div.main-wrapper > app-root > app-register-type > div > div > div > div > main > div > div:nth-child(1) > div > div.card-body > button'
    )
      .contains(' Sign up for free ')
      .click();
    var fakeNames = faker.internet.userName();
    cy.get('#username').type(fakeNames);
    var fekeEmails = faker.internet.email();
    cy.get('#email').type(fekeEmails);
    cy.get('#password').type('PassCumple1220');
    cy.get('#confirmPassword').type('PassCumple1220');

    cy.get(
      'body > div.main-wrapper > app-root > app-register > div > div > div > div > div.login-right > div > form > div.form-group.mb-0'
    )
      .contains('Register')
      .click();

    cy.url().should('include', '/login');
  });

  /*
Register Company
*/

  it('Register Company', () => {
    cy.contains('About Us');
    cy.get(
      'body > div.main-wrapper > app-root > app-landing > main > header > div > div > div.col-xxl-5 > div > div.d-grid.gap-3.d-sm-flex.justify-content-sm-center.justify-content-xxl-start.mb-3 > a'
    )
      .contains('Join Now')
      .click();

    cy.get(
      'body > div.main-wrapper > app-root > app-register-type > div > div > div > div > main > div > div:nth-child(2) > div > div.card-body > button'
    )
      .contains('Get started')
      .click();
    var fakeCompany = faker.company.bsBuzz();
    cy.get('#username').type(fakeCompany);
    var fekeEmails = faker.internet.email();
    cy.get('#email').type(fekeEmails);
    cy.get('#password').type('PassCumple1220');
    cy.get('#confirmPassword').type('PassCumple1220');

    cy.get(
      'body > div.main-wrapper > app-root > app-register > div > div > div > div > div.login-right > div > form > div.form-group.mb-0'
    )
      .contains('Register')
      .click();

    cy.url().should('include', '/login');
  });

  /*
Login Aspirant
*/

  it('Login Aspirant and see Aspirant Dashboard', () => {
    cy.contains('About Us');
    cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a')
      .contains('Login')
      .click();

    cy.get('#email').type('usuarioprueba0@mail.com');
    cy.get('#password').type('PassCumple1220');
    cy.get(
      'body > div.main-wrapper > app-root > app-login > div > div > div > div > div.login-right > div > form > div:nth-child(4) > button'
    )
      .contains('Login')
      .click();
    cy.url().should('include', '/layout/dashboard/dashboard-aspirant');
  });

  /*
Login Company
*/

  it('Login Company and see Company Dashboard', () => {
    cy.contains('About Us');
    cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a')
      .contains('Login')
      .click();

    cy.get('#email').type('apps@gmail.com');
    cy.get('#password').type('PassCumple1220');
    cy.get(
      'body > div.main-wrapper > app-root > app-login > div > div > div > div > div.login-right > div > form > div:nth-child(4) > button'
    )
      .contains('Login')
      .click();
    cy.url().should('include', '/layout/dashboard/dashboard-company');
  });
});

import { faker } from '@faker-js/faker';

/*
Initialization
*/

describe('e2e', () => {
  const carrerasTI = [
    'Ingeniería en Informática',
    'Ciencias de la Computación',
    'Ingeniería de Software',
    'Seguridad Informática',
    'Redes de Computadoras',
    'Desarrollo Web',
    'Analista de Sistemas',
    'Administración de Sistemas',
    'Ingeniería en Sistemas',
    'Bases de Datos',
    'Diseño de Interfaz de Usuario (UI/UX)',
    'Inteligencia Artificial',
    'Ciberseguridad',
    'Analítica de Datos',
    'Gestión de Proyectos de TI',
    'Arquitectura de Software',
    'Desarrollo de Aplicaciones Móviles',
    'Desarrollo Front-End',
    'Desarrollo Back-End',
    'Realidad Virtual y Aumentada',
    'Computación en la Nube (Cloud Computing)',
    'Ingeniería de Automatización',
    'Bioinformática',
    'Ingeniería en Telecomunicaciones',
    'Gestión de Servicios de TI',
  ];

  // Genera un índice aleatorio para seleccionar una carrera universitaria
  const indiceAleatorio = Math.floor(Math.random() * carrerasTI.length);

  // Selecciona una carrera universitaria al azar
  const carreraUniversitariaAleatoria = carrerasTI[indiceAleatorio];

  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.wait(1000);
    cy.contains('About Us');
    cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a')
      .contains('Login')
      .click();
    cy.get('#email').type('servicios@nodexsas.com');
    cy.get('#password').type('PassCumple123');
    cy.get(
      'body > div.main-wrapper > app-root > app-login > div > div > div > div > div.login-right > div > form > div:nth-child(4) > button'
    )
      .contains('Login')
      .click();
      cy.wait(1000);
  });

  after(() => {});

  it('Add  Project', () => {
    cy.get(':nth-child(4) > [href="#"] > :nth-child(2)').click();
    cy.get(':nth-child(4) > ul > li > a').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .form-group > .form-control').type(
      carreraUniversitariaAleatoria
    );
    cy.wait(1000);
    cy.get('.col-sm-8 > .form-group > .form-control').type(
    "esto es una descripción"
    );
    cy.wait(1000);
    cy.get('input[formControlName="startDate"]').type('2023-01-04');
    cy.wait(1000);
    cy.get('input[formControlName="endDate"]').type('2023-05-12');
    cy.wait(1000);
    cy.get(':nth-child(6) > .form-group > .form-control').type('5')
    cy.get('.aspirant-submit > .btn').click();
  });



it('Search Aspirant', () => {
    cy.get(':nth-child(5) > [href="#"] > :nth-child(2)').click();
    cy.get(':nth-child(5) > ul > li > a').click();
    cy.get('select[formControlName="skill"]').select('Python');
    cy.get('.form-group > .btn').click()

  });

it('Add Interview', () => {
    cy.get(':nth-child(5) > [href="#"] > :nth-child(2)').click();
    cy.get(':nth-child(5) > ul > li > a').click();
    cy.get('select[formControlName="skill"]').select('Python');
    cy.get('.form-group > .btn').click()
    cy.get(':nth-child(2) > :nth-child(3) > .table-avatar > .avatar > .avatar-img').click()
    cy.get('[data-bs-target="#add-interview"]').click()
    cy.get('#add-interview > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > :nth-child(1) > .mb-3 > .form-control').type('2023-11-04');
    cy.get(':nth-child(2) > .mb-3 > .form-control').type('12:00')
    cy.get('#add-interview > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > .col-md-12 > .mb-3 > #rol').select('IT Project Manager')
    cy.get('#add-interview > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > .col-md-12 > .mb-3 > #note').type('Esto es una nota');
    cy.get('#add-interview > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > .col-md-12 > .mb-3 > #note').click()
  });

it('Add Aspirant to Project', () => {
    cy.get(':nth-child(5) > [href="#"] > :nth-child(2)').click();
    cy.get(':nth-child(5) > ul > li > a').click();
    cy.get('select[formControlName="skill"]').select('Python');
    cy.get('.form-group > .btn').click()
    cy.get(':nth-child(2) > :nth-child(3) > .table-avatar > .avatar > .avatar-img').click()
    cy.get('.message-btns').click()
    cy.get('#project').select('AI');
    cy.get('#add-aspirant-project > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > .col-md-12 > .mb-3 > #rol').select('IT Project Manager')
    cy.get('#add-aspirant-project > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > .col-md-12 > .mb-3 > #note').type('Esto es una nota')
    cy.get('#add-aspirant-project > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > .col-md-12 > .mb-3 > #note').click

  });


   it('Add Aspirant Performance', () => {
    cy.get(':nth-child(5) > [href="#"] > :nth-child(2)').click();
    cy.get(':nth-child(5) > ul > li > a').click();
    cy.get('select[formControlName="skill"]').select('Python');
    cy.get('.form-group > .btn').click()
    cy.get(':nth-child(2) > :nth-child(3) > .table-avatar > .avatar > .avatar-img').click()
    cy.wait(1000);
  });

  it('Add Test Result', () => {
    cy.get(':nth-child(7) > [href="#"]').click();
    cy.get(':nth-child(7) > ul > li > a').click()
    cy.get(':nth-child(2) > .form-group > .form-control').select('Alejandra Miranda')
  });


});

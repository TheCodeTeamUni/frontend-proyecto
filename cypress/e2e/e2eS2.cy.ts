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
    cy.get('#email').type('usuarioprueba123@mail.com');
    cy.get('#password').type('PassCumple123');
    cy.get(
      'body > div.main-wrapper > app-root > app-login > div > div > div > div > div.login-right > div > form > div:nth-child(4) > button'
    )
      .contains('Login')
      .click();
  });

  after(() => {});

  /*Add Personal Information*/

  it('Add Personal Information', () => {
    cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click();
    cy.get(':nth-child(3) > ul > :nth-child(1) > a').click();
  });

  /*Add Education Item*/

  it('Add Education Item', () => {
    cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click();
    cy.get(':nth-child(3) > ul > :nth-child(2) > a').click();
    cy.get('select[formControlName="typeEducation"]').select('Formal');
    cy.get('select[formControlName="level"]').select('Postgraduate');
    cy.get(':nth-child(4) > .form-group > .form-control').type(
      carreraUniversitariaAleatoria
    );
    cy.get(':nth-child(5) > .form-group > .form-control').type('uniandes');
    cy.get('select[formControlName="grade"]').select('No');
    cy.get('input[formControlName="startDate"]').type('2023-11-04');
    cy.wait(1000);
    cy.get('.aspirant-submit > .btn').click();
    cy.wait(1000);
  });

  /*Add Work Item*/

  it('Add Work Item', () => {
    cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click();
    cy.get(':nth-child(3) > ul > :nth-child(3) > a').click();

    //Campos del formulario
    cy.get('input[formControlName="company"]').type('Globant');
    cy.get('select[formControlName="position"]').select('Business Analyst');
    cy.get('select[formControlName="actualJob"]').select('Yes');
    cy.get('input[formControlName="startDate"]').type('2023-11-04');
    cy.wait(1000);
    cy.get('.aspirant-submit > .btn').click();
    cy.wait(1000);
  });

  /*Add Skill Item*/

  it('Add Skill Item', () => {
    cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click();
    cy.get(':nth-child(3) > ul > :nth-child(4) > a').click();
    cy.get('select[formControlName="skill"]').select('Django');
    cy.get('mat-slider[formControlName="level"]').as('slider');

    // Mueve el slider a una nueva posición (por ejemplo, 50)
    cy.get('@slider').invoke('val', 50).trigger('input');
    cy.get('select[formControlName="experience"]').select(
      '1 año de experiencia'
    );
    cy.wait(1000);
    cy.get('.aspirant-submit > .btn').click();
  });
});

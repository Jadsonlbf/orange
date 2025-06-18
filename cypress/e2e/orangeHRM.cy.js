//funcionalidade e2e
describe('DESAFIO', () => {
//CASO DE TESTE 
  it('BRASIL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//ESCREVER LOGIN
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click() .type('Admin');
//escrever senha 
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123');
//cliclar em login 
cy.get('.oxd-button').click();
//cliclar em admin
cy.get(':nth-child(1) > .oxd-main-menu-item').click();
//cliclar em organization
cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
//cliclar em location
cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
//cliclar em add 
cy.get('.orangehrm-header-container > div > .oxd-button').click();
//rolar para o topo 
cy.scrollTo('bottom');
//cliclar e prenecher o nome 
cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Santo aleixo04');
//cliclar e preencher city
cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('recife');
//preencher state provinci
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('caetes');
//preencher zip postal cod
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('1900174');
//preencher o phone 
cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('85100888');
//preencher o fax 
cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('123456789');
//preencher o address
cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').click().type('rua 1 ao lado da rua 2');
//prenecher o notes 
cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').click().type('nada com coisa nenhuma ');
//cliclar na seta de paises 
cy.get('.oxd-select-text-input').click()
cy.wait(3000)
//ver se as opções estão visíveis 
cy.get('div[role="listbox"]', { timeout: 3000 }).should('be.visible');
//rolar o scrooll pra baixo 
cy.get('div[role="listbox"]').scrollTo('bottom');
//escolher a opção brazil e cliclar 
cy.contains('div[role="option"]', 'Brazil').click();
//cliclar em save 
cy.get('.oxd-button--secondary').click()
cy.wait(2000)
//validação do elemento brazil 
cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(4) > div').should('exist');












  })
})
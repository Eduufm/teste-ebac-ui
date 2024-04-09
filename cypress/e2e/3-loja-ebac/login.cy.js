/// <referece types="cypress"/>

describe('Funcionalidade: Login', () =>{

    it('Deve fazer login com sucesso', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('edu.teste@gamil.com') 
        cy.get('#password').type('edu.teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, edu.teste (não é edu.teste? Sair)')
    })
})
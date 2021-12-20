/// <reference types="Cypress" />
import LoginElements from "../elements/LoginElements"

const url = Cypress.config("baseUrl")
const element = new LoginElements()


class LoginPage {

    acessarSite() {
        cy.visit(url)
    }

    preencherEmail(email) {      
        cy.get(element.campoEmail()).type(email)      
    }

    preencherSenha(senha) {
        cy.get(element.campoSenha()).type(senha) 
    }

    clicarNoBotaoEnviar() {
        cy.get(element.botaoDeEnviar()).click()
    }

    verificarLogin() {
        cy.get(element.mensagemDeAlerta()).should('have.text', 'Bem vindo, Wilson!')
    }
}

export default new LoginPage()
/// <reference types="Cypress" />
import CadastroErrosElements from "../elements/CadastroErrosElements"

const url = Cypress.config("baseUrl")
const element = new CadastroErrosElements()


class CadastroPage {

    acessarTelaDeCadastro(){
        cy.visit(url)
        cy.get(element.urlCadastro()).click()
    }

    preencherNome(nome){
        if (nome == ''){
            cy.get(element.campoNome()).type('nome').clear()
        } else{
            cy.get(element.campoNome()).type(nome) 
        }
    }
    preencherEmail(email){
        if (email == ''){
            cy.get(element.campoEmail()).type('email').clear()
        } else{
            cy.get(element.campoEmail()).type(email) 
        }
    }
    preencherSenha(senha){
        if (senha == ''){
            cy.get(element.campoSenha()).type('senha').clear()
        } else{
            cy.get(element.campoSenha()).type(senha) 
        }
    }
    apertarBotaoCadastrar(){
        cy.get(element.botaoDeEnviar()).click()
    }
    verificarMensagemDeConfirmacao(mensagem){
        cy.get(element.mensagemDeAlerta()).should('have.text', mensagem)
    }
}

export default new CadastroPage()
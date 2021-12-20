/* global Given, Then, When */

import LoginPage from '../pages/LoginPage'

Given(/^que acesso a pagina de Login$/, () => {
    LoginPage.acessarSite()
});

When(/^preencho o campo de email com "([^"]*)"$/, (email) => {
	LoginPage.preencherEmail(email)
});

When(/^preencho o campo de senha com "([^"]*)"$/, (senha) => {
	LoginPage.preencherSenha(senha)
});

When(/^clico no botao Enviar$/, () => {
	LoginPage.clicarNoBotaoEnviar()
});


Then(/^sou redirecionado para minha conta$/, () => {
	LoginPage.verificarLogin()
});

/* global Given, Then, When */

import CadastroPage from '../pages/CadastroErrosPage'


Given(/^que eu acesso a tela de Cadastro$/, () => {
	CadastroPage.acessarTelaDeCadastro()
});


When(/^preencho o primeiro campo com meu "([^"]*)"$/, (nome) => {
	CadastroPage.preencherNome(nome)
});

When(/^preencho o segundo campo com meu "([^"]*)"$/, (email) => {
	CadastroPage.preencherEmail(email)
});

When(/^preencho o terceiro campo com minha "([^"]*)"$/, (senha) => {
	CadastroPage.preencherSenha(senha)
});

When(/^aperto o botão cadastrar$/, () => {
	CadastroPage.apertarBotaoCadastrar()
});

Then(/^recebo uma mensagem de confirmação "([^"]*)"$/, (mensagem) => {
	CadastroPage.verificarMensagemDeConfirmacao(mensagem)
});

#language:pt

Funcionalidade: CadastroErros

     Como usuário, desejo realizar um cadastro na plataforma 
     para conseguir realizar um Login e ter acesso as
     funcionalidades da plataforma. Entretanto, preencho 
     de maneira errada os campos necessários

Esquema do Cenario: Realizar Cadastro preenchendo todos os campos de maneira errada
    Dado que eu acesso a tela de Cadastro
    Quando preencho o primeiro campo com meu "<nome>"
    E preencho o segundo campo com meu "<email>"
    E preencho o terceiro campo com minha "<senha>"
    E aperto o botão cadastrar
    Entao recebo uma mensagem de confirmação "<mensagem>"

Exemplos:
| nome   | email                | senha | mensagem                       |
| Joan   | joan@hotmail.com     | 123   | Endereço de email já utilizado |
|        | wilson@hotmail.com   | 123   | Nome é um campo obrigatório    |
| Joan   |                      | 123   | Email é um campo obrigatório   |
| Joan   | wilson@hotmail.com   |       | Senha é um campo obrigatório   |







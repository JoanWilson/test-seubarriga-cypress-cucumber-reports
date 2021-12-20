Feature: Login

     Como usuário, desejo realizar um Login na plataforma 
     para conseguir ter acesso as funcionalidades da plataforma

Scenario: Realizar Login
    Given que acesso a pagina de Login
    When preencho o campo de email com "wilson@wilson"
    And preencho o campo de senha com "admin"
    And clico no botao Enviar
    Then sou redirecionado para minha conta
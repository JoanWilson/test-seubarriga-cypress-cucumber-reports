class CadastroErrosElements {
    urlCadastro = () => { return ':nth-child(2) > a' }
    campoNome = () => { return '#nome' }
    campoEmail = () => { return '#email' }
    campoSenha = () => { return '#senha' }
    botaoDeEnviar = () => { return '.btn' }
    mensagemDeAlerta = () => { return '.alert' }
}

export default CadastroErrosElements
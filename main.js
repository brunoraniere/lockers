console.log("olá mundo")
const form = document.getElementById('form-contato')

function validarNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    
    e.preventDefault();

    const nome = document.getElementById('nome')
    const telefone = document.getElementById('telefone')
    const email = document.getElementById('email')
    const mensagem = document.getElementById('mensagem')
    const mensagemSucesso = `Email enviado para ${email.value} \nDestinatário: ${nome.value.split(' ')[0]}\nTelefone: ${telefone.value}`;

    formEValido = validarNome(nome.value)
    if(formEValido){
        alert(mensagemSucesso)

        nome.value = ''
        telefone.value = ''
        email.value = ''
        mensagem.value = ''

    } else {
        alert("O nome não está completo")
    }
})

console.log(form);
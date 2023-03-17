console.log("olá mundo")
const form = document.getElementById('form-contato')
const nome = document.getElementById('nome')
let formEValido = false;

function validarNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    
    const telefone = document.getElementById('telefone')
    const email = document.getElementById('email')
    const mensagem = document.getElementById('mensagem')
    const mensagemSucesso = `Destinatário: <strong>${nome.value.split(' ')[0]}</strong><br>Email: <strong>${email.value.split('@')[0]}</strong><br>Domínio: <strong>${'@' + email.value.split('@')[1]}</strong><br>\nTelefone: <strong>${telefone.value}</strong>`;

    formEValido = validarNome(nome.value)
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        mensSuc
        nome.value = ''
        email.value = ''
        telefone.value = ''
        mensagem.value = ''

    } else {
        nome.style.border = '1px solid red'
        document.querySelector('.error').style.display = "block";
    }
})

nome.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validarNome(e.target.value);

    if(!formEValido){
        nome.classList.add('error1');
        document.querySelector('.error').style.display = "block";
    } else{
        nome.classList.remove('error1');
        document.querySelector('.error').style.display = "none";
    }
});
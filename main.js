const form = document.getElementById('form');


function validaN (numeroA, numeroB){
    return numeroA >= numeroB;
}
form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroA = parseInt(document.getElementById('numero-A').value);
    const numeroB = parseInt(document.getElementById('numero-B').value);
    const MensagemErro = `<b>O Número B não pode ser igual ou inferior ao Número A</b>`;
    const MensagemSucesso = `<b>Enviado!!</b>`;

    formEvalido = validaN (numeroA, numeroB);
    if (formEvalido){
        const ContainerMensagemErro = document.querySelector('.error-message');
        ContainerMensagemErro.innerHTML = MensagemErro;
        ContainerMensagemErro.style.display = 'block';
        document.querySelector('.sucess-message').style.display = 'none';
        
    }
    else {
        const ContainerMensagemSucesso = document.querySelector('.sucess-message');
        ContainerMensagemSucesso.innerHTML = MensagemSucesso;
        ContainerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    
    }
});
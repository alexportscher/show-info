function initialize() {

    // Essas variáveis são para conseguir acessar as informações informadas.
    var nomeValue = document.querySelector('#nomeInput').value;
    var sobrenomeValue = document.querySelector('#sobrenomeInput').value;
    var birthdayValue = document.querySelector('#birthdayInput').value;

    // Essas variáveis são as responsáveis por localizar os campos que iremos preencher com as credenciais informadas.
    var nome = document.querySelector('#nome');
    var sobrenome = document.querySelector('#sobrenome');
    var birthday = document.querySelector('#birthday');
    var idade = document.querySelector('#idade');
    var idade_check = document.querySelector('#idade-check');


    // Essas variáveis são as responsáveis por nos informar outras informações indiretas.
    var nascimento = new Date(birthdayValue);
    var atual = new Date();

    var ano = nascimento.getFullYear();
    var ano2 = atual.getFullYear();

    var idadeCheck = ano2 - ano;


    // Variável para acessar o card que informa as credenciais.
    var result = document.querySelector('#result');

    if(nomeValue == '' || sobrenomeValue == '' || birthdayValue == '') {
        alert('Os campos estão incompletos')
        return;
    }


    // Verificando se o usuário é menor ou maior de idade
    var checkText;
    if(idadeCheck < 18) {
        checkText = 'Menor de idade'
        idade_check.classList.add('text-danger')
        idade_check.classList.remove('text-success')
    } else {
        checkText = 'Maior de idade'
        idade_check.classList.remove('text-danger')
        idade_check.classList.add('text-success')
    }

    // Inserindo as informações.
    nome.innerHTML = nomeValue;
    sobrenome.innerHTML = sobrenomeValue;
    birthday.innerHTML = birthdayValue;
    idade.innerHTML = idadeCheck;
    idade_check.innerHTML = checkText;




    // Linha de Código para fazer as credenciais aparecerem.
    result.classList.remove('invisible');

}
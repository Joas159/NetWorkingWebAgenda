//01
const opItem01 = document.querySelector('#opItem01');
const cadUsuario = document.querySelector('.cadUsuario');
const cadContato = document.querySelector('.cadContato');
const cadCompromisso = document.querySelector('.cadCompromisso');
const cadTematica = document.querySelector('.cadTematica');

//02
const divItem02 = document.querySelector('.divItem02 a');
const listPessoas = document.querySelector('.listPessoas');
const listTarefa = document.querySelector('.listTarefa');
const listTematica = document.querySelector('.listTematica');

//03
const divItem03 = document.querySelector('.divItem03 a');
const alterarSenha = document.querySelector('.alterarSenha');
const alterarFoto = document.querySelector('.alterarFoto');
const fechaSessao = document.querySelector('.fechaSessao');

opItem01.addEventListener('click', () => {
    cadUsuario.classList.toggle('escondido');
    cadContato.classList.toggle('escondido');
    cadTematica.classList.toggle('escondido');
    cadCompromisso.classList.toggle('escondido');
});

divItem02.addEventListener('click', () => {
    listPessoas.classList.toggle('escondido');
    listTarefa.classList.toggle('escondido');
    listTematica.classList.toggle('escondido');
});

divItem03.addEventListener('click', () => {
    alterarSenha.classList.toggle('escondido');
    alterarFoto.classList.toggle('escondido');
    fechaSessao.classList.toggle('escondido');
});
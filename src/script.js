//01
const opItem01 = document.querySelector('#opItem01');
const cadUsuario = document.querySelector('.cadUsuario');
const cadContato = document.querySelector('.cadContato');
const cadCompromisso = document.querySelector('.cadCompromisso');
const cadAtualizacao = document.querySelector('.cadAtualizacao');

//02
const divItem02 = document.querySelector('.divItem02 a');
const listPessoas = document.querySelector('.listPessoas');
const listTarefa = document.querySelector('.listTarefa');

//03
const divItem03 = document.querySelector('.divItem03 a');
const alterarSenha = document.querySelector('.alterarSenha');
const alterarFoto = document.querySelector('.alterarFoto');
const fechaSessao = document.querySelector('.fechaSessao');

const btnencerrarCadUsuario = document.querySelector('#encerrarCadUsuario');
const btnencerrarCadPessoa = document.querySelector('#encerrarCadPessoa');
const btnencerrarCadCompromisso = document.querySelector('#encerrarCadCompromisso');
const btnencerrarCadAtualizacao = document.querySelector('#encerrarCadAtualizacao');
// --------------

const formCadUsuario = document.querySelector('.formCadUsuario');
const formCadPessoa = document.querySelector('.formCadPessoa');
const formCadCompromisso = document.querySelector('.formCadCompromisso');
const formCadAtualizacao = document.querySelector('.formCadAtualizacao');

//=======================================================================================
opItem01.addEventListener('click', () => {
    cadUsuario.classList.toggle('escondido');
    cadContato.classList.toggle('escondido');
    cadCompromisso.classList.toggle('escondido');
    cadAtualizacao.classList.toggle('escondido');
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

//---------------
//Cadastro de Usuário
cadUsuario.addEventListener('click', () => {
    formCadUsuario.classList.remove('escondido');
    cadContato.classList.add('escondido');
    cadCompromisso.classList.add('escondido');
    cadAtualizacao.classList.add('escondido');
    divItem02.classList.add('escondido');
    listPessoas.classList.add('escondido');
    listTarefa.classList.add('escondido');
    divItem03.classList.add('escondido');
    alterarSenha.classList.add('escondido');
    alterarFoto.classList.add('escondido');
    opItem01.classList.add('escondido');
});

btnencerrarCadUsuario.addEventListener('click', () => {
    formCadUsuario.classList.add('escondido');
    cadContato.classList.remove('escondido');
    cadCompromisso.classList.remove('escondido');
    cadAtualizacao.classList.remove('escondido');
    divItem02.classList.remove('escondido');
    listPessoas.classList.remove('escondido');
    listTarefa.classList.remove('escondido');
    divItem03.classList.remove('escondido');
    alterarSenha.classList.remove('escondido');
    alterarFoto.classList.remove('escondido');
    opItem01.classList.remove('escondido');
});

//Cadastro de Pessoa
cadContato.addEventListener('click', () => {
    formCadPessoa.classList.remove('escondido');
    cadCompromisso.classList.add('escondido');
    cadUsuario.classList.add('escondido');
    cadAtualizacao.classList.add('escondido');
    divItem02.classList.add('escondido');
    listPessoas.classList.add('escondido');
    listTarefa.classList.add('escondido');
    divItem03.classList.add('escondido');
    alterarSenha.classList.add('escondido');
    alterarFoto.classList.add('escondido');
    opItem01.classList.add('escondido');
});

btnencerrarCadPessoa.addEventListener('click', () => {
    formCadPessoa.classList.add('escondido');
    cadCompromisso.classList.remove('escondido');
    cadUsuario.classList.remove('escondido');
    cadAtualizacao.classList.remove('escondido');
    divItem02.classList.remove('escondido');
    listPessoas.classList.remove('escondido');
    listTarefa.classList.remove('escondido');
    divItem03.classList.remove('escondido');
    alterarSenha.classList.remove('escondido');
    alterarFoto.classList.remove('escondido');
    opItem01.classList.remove('escondido');
});

//Cadastro de Compromisso
cadCompromisso.addEventListener('click', () => {
    formCadCompromisso.classList.remove('escondido');
    cadContato.classList.add('escondido');
    cadUsuario.classList.add('escondido');
    cadAtualizacao.classList.add('escondido');
    divItem02.classList.add('escondido');
    listPessoas.classList.add('escondido');
    listTarefa.classList.add('escondido');
    divItem03.classList.add('escondido');
    alterarSenha.classList.add('escondido');
    alterarFoto.classList.add('escondido');
    opItem01.classList.add('escondido');
});

btnencerrarCadCompromisso.addEventListener('click', () => {
    formCadCompromisso.classList.add('escondido');
    cadContato.classList.remove('escondido');
    cadUsuario.classList.remove('escondido');
    cadAtualizacao.classList.remove('escondido');
    divItem02.classList.remove('escondido');
    listPessoas.classList.remove('escondido');
    listTarefa.classList.remove('escondido');
    divItem03.classList.remove('escondido');
    alterarSenha.classList.remove('escondido');
    alterarFoto.classList.remove('escondido');
    opItem01.classList.remove('escondido');
});

//Cadastro de Atualização
cadAtualizacao.addEventListener('click', () => {
    formCadAtualizacao.classList.remove('escondido');
    cadContato.classList.add('escondido');
    cadUsuario.classList.add('escondido');
    cadCompromisso.classList.add('escondido');
    divItem02.classList.add('escondido');
    listPessoas.classList.add('escondido');
    listTarefa.classList.add('escondido');
    divItem03.classList.add('escondido');
    alterarSenha.classList.add('escondido');
    alterarFoto.classList.add('escondido');
    opItem01.classList.add('escondido');
});

btnencerrarCadAtualizacao.addEventListener('click', () => {
    formCadAtualizacao.classList.add('escondido');
    cadContato.classList.remove('escondido');
    cadCompromisso.classList.remove('escondido');
    cadUsuario.classList.remove('escondido');
    divItem02.classList.remove('escondido');
    listPessoas.classList.remove('escondido');
    listTarefa.classList.remove('escondido');
    divItem03.classList.remove('escondido');
    alterarSenha.classList.remove('escondido');
    alterarFoto.classList.remove('escondido');
    opItem01.classList.remove('escondido');
});

//---------------


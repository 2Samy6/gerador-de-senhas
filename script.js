// Seleção de elementos do DOM
const senhaGeradaInput = document.getElementById('senhaGerada');
const botaoGerar = document.getElementById('gerar');
const botaoCopiar = document.getElementById('copiar');
const tamanhoInput = document.getElementById('tamanho');
const incluirNumerosCheckbox = document.getElementById('numeros');
const incluirSimbolosCheckbox = document.getElementById('simbolos');
const incluirMaiusculasCheckbox = document.getElementById('maiusculas');
const forcaSenhaSpan = document.getElementById('forcaSenha');

//definição de caracteres
const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const caracteresMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const caracteresNumeros = '0123456789';
const caracteresSimbolos = '!@#$%^&*()_+[]{}|;:,.<>/?';

// função para avaliar a força da senha
function verificarForca(senha) {
    let pontuacao = 0;
    const tamanho = senha.length;

    //critério 1: comprimento
    if (tamanho >= 8) {
         pontuacao++;
    }
    if (tamanho >= 12) {
         pontuacao++;
    }
    //critério 2: inclusão de Maiúsculas (pelo menos uma)
    if (/[A-Z]+/.test(senha)) {
         pontuacao++;
    }
    //critério 3: inclusão de números (pelo menos um)
    if (/[0-9]+/.test(senha)) {
         pontuacao++;
    }
    //critério 4: inclusão de símbolos (pelo menos um)
    if (/[^A-Za-z0-9]+/.test(senha)) {
         pontuacao++;
    }

    return pontuacao;
}
function atualizarIndicador(pontuacao) {
    //remove as classes de cor existentes
    forcaSenhaSpan.classList.remove('forca-vermelha', 'forca-amarela', 'forca-verde');

    //define o texto e a cor com base na pontuação
    if (pontuacao <= 2) {
        forcaSenhaSpan.textContent = 'Fraca';
        forcaSenhaSpan.classList.add('forca-vermelha');
    } else if (pontuacao <= 4) {
        forcaSenhaSpan.textContent = 'Média';
        forcaSenhaSpan.classList.add('forca-amarela');
    } else {
        forcaSenhaSpan.textContent = 'Forte';
        forcaSenhaSpan.classList.add('forca-verde');
    }
}

//================================
// LÓGICA PRINCIPAL
//================================

// adicionar evento ao botão gerar
botaoGerar.addEventListener('click', () => {

    const tamanho = parseInt(tamanhoInput.value);
    const incluirNumeros = incluirNumerosCheckbox.checked;
    const incluirSimbolos = incluirSimbolosCheckbox.checked;
    const incluirMaiusculas = incluirMaiusculasCheckbox.checked;

    let caracteresDisponiveis = caracteresMinusculas;
    let senha = ''; //a senha começa vazia
    let caracteresObrigatorios = []; // array para garantir inclusão de pelo menos um caractere de cada tipo selecionado

    if (incluirMaiusculas) {
        caracteresDisponiveis += caracteresMaiusculas;
        caracteresObrigatorios.push(caracteresMaiusculas);
    }
    if (incluirNumeros) {
        caracteresDisponiveis += caracteresNumeros;
        caracteresObrigatorios.push(caracteresNumeros);
    }
    if (incluirSimbolos) {
        caracteresDisponiveis += caracteresSimbolos;
        caracteresObrigatorios.push(caracteresSimbolos);
    }
    //validação de entrada
    if (tamanho <= 0 || caracteresDisponiveis.length === 0) {
        alert('Defina um tamanho válido e selecione pelo menos um tipo de caractere.');
        senhaGeradaInput.value = "erro";
        return;
    } 

// =============
// GERAÇÃO DA SENHA
// =============

    caracteresObrigatorios.forEach(pool => {
        let indiceAleatorio = Math.floor(Math.random() * pool.length);
        senha += pool[indiceAleatorio];
    });

    //preencher o restante da senha
    let caracteresRestantes = tamanho - senha.length;
    for (let i = 0; i < caracteresRestantes; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresDisponiveis.length);
        senha += caracteresDisponiveis[indiceAleatorio];
    }
    //embaralhar a senha para evitar padrões previsíveis
    senha = senha.split('').sort(() => 0.5 - Math.random()).join('');
    //exibir a senha gerada
    senhaGeradaInput.value = senha;

    //atualizar o validador de força da senha
    const pontuacao = verificarForca(senha);
    atualizarIndicador(pontuacao);

});
// adicionar evento ao botão copiar
botaoCopiar.addEventListener('click', () => {
    const textoParaCopiar = senhaGeradaInput.value;

    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        alert('Senha copiada para a área de transferência!');
    }).catch(err => {
        alert('Erro ao copiar a senha: ', err);
    });
}); 

# 🔒 Gerador de Senhas Seguro (PassGen)

Este projeto é um Gerador de Senhas Front-End desenvolvido com o objetivo de praticar e consolidar fundamentos de HTML, CSS e JavaScript. Ele gera senhas aleatórias baseadas nas preferências do usuário.

## ✨ Funcionalidades:

* **Geração Aleatória:** Cria senhas com base no comprimento definido pelo usuário.
* **Controle de Complexidade:** Opções para incluir/excluir Letras Maiúsculas, Números e Símbolos.
* **Garantia de Força:** A lógica de geração garante que a senha inclua pelo menos um caractere de cada tipo selecionado, evitando senhas fracas.
* **Validador de Força:** Exibe visualmente a força da senha (Fraca, Média, Forte) mudando a cor do indicador (usando **JavaScript e CSS**).
* **Cópia Rápida:** Botão para copiar a senha gerada para a área de transferência usando a moderna **Clipboard API**.

---

## 🧠 Conceitos e Aprendizados Chave

Este projeto solidificou a aplicação dos seguintes conceitos práticos em Desenvolvimento Web:

### JavaScript

* **Manipulação de DOM:** Uso eficiente de `getElementById`, `.value`, `.checked` e `.textContent` para leitura e escrita de dados da interface.
* **Event Handling:** Implementação de `.addEventListener('click', ...)` para tornar a interface interativa.
* **Lógica de Geração:** Uso combinado de `Math.random()` e `Math.floor()` com laços `for` para geração de dados aleatórios e lógicos.
* **Estruturas de Controle:** Aplicação de `if/else if` para controle de fluxo e pontuação de força.
* **Regex (Expressões Regulares):** Utilização do `.test()` para validar de forma concisa se a senha gerada atende aos critérios de complexidade (ex: `/[A-Z]+/.test(senha)`).
* **Arrays & Strings:** Manipulação de strings para criar pools de caracteres e uso de `.split().sort().join('')` para **embaralhar** a senha.
* **Melhores Práticas:** Implementação da **Clipboard API** (`navigator.clipboard.writeText()`) com Promises (`.then().catch()`) para cópia segura, substituindo o obsoleto `document.execCommand`.

### HTML & CSS

* **HTML Semântico:** Uso correto de tags `<label>` para melhorar a acessibilidade e usabilidade dos formulários.
* **CSS Layout:** Aplicação de **Flexbox** para centralizar o conteúdo (`body`) e alinhar elementos (`.resultado`).
* **Estilização Dinâmica:** Criação de classes CSS modulares (`.forca-verde`, etc.) manipuladas pelo JavaScript para feedback visual instantâneo.

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estrutura da interface e dos inputs. |
| **CSS3** | Estilização moderna e responsiva do layout. |
| **JavaScript (ES6+)** | Toda a lógica de geração, validação (Regex) e manipulação do DOM. |

# Formulário para cadastro de endereço
 
## introdução
Este projeto é um sistema de cadastro de endereços desenvolvido com HTML, CSS, JavaScript e Bootstrap. A principal funcionalidade do sistema é preencher automaticamente os campos de endereço com base no CEP informado, utilizando a API do ViaCEP para realizar essa consulta. O sistema também permite limpar os campos do formulário e validar o CEP inserido. O uso do Bootstrap garante um layout responsivo e organizado, facilitando a experiência do usuário.

Segue o GIf representando do nosso projeto pronto:

<img src="img/cep.gif" >
<img src="img/imagemcep.png">
 
## Funcionalidades
 
-  'use strict';
 
Descrição: Ativa o modo estrito em JavaScript, o que ajuda a evitar erros silenciosos. Ele impede a utilização de variáveis não declaradas e obriga a sintaxe mais segura.
 
 
 
- limparFormulario()
 
Descrição: Essa função limpa os campos do formulário de cadastro de endereço. Ela zera os valores de todos os campos relacionados ao endereço (Rua, Bairro, Cidade, Estado, Complemento, CEP e Número) após uma consulta ou cadastro, garantindo que o formulário esteja em branco para uma nova inserção.
 
 
 
- eNumero(numero)
 
Descrição: Verifica se a string fornecida como argumento contém apenas números. Ela usa uma expressão regular (/^[0-9]+$/) para validar se o campo de CEP está preenchido com apenas números. Essa função é importante para garantir que o CEP inserido tenha apenas números válidos.
 
 
 
- cepValido(cep)
 
Descrição: Verifica se o CEP digitado pelo usuário é válido. A função confirma se o CEP tem exatamente 8 caracteres e se é composto apenas de números, utilizando a função eNumero. Esse controle garante que o valor do CEP inserido esteja no formato esperado antes de realizar a consulta à API.
 
 
 
- preencherFormulario(endereco)
 
Descrição: Essa função preenche automaticamente os campos do formulário com os dados obtidos da consulta à API ViaCEP. Ela recebe um objeto endereco e insere os valores retornados (como logradouro, bairro, cidade e estado) nos respectivos campos do formulário. Dessa forma, quando o usuário digita um CEP válido, os demais campos são preenchidos automaticamente, facilitando o cadastro.
 
 
 pesquisarCep()
 
Descrição: Esta função é responsável pela consulta à API do ViaCEP com base no CEP fornecido. Ela executa os seguintes passos:
 
° Limpa os campos do formulário usando limparFormulario().
 
° Valida o CEP inserido através de cepValido(). Se o CEP for válido, uma requisição assíncrona (fetch) é enviada para a URL da API ViaCEP no formato https://viacep.com.br/ws/${cep}/json/.
 
° A resposta da API é convertida para o formato JSON.
 
° Caso o CEP não seja encontrado, a função exibe uma mensagem de erro através de alert('CEP não encontrado').
 
° Se o CEP for válido e encontrado, a função preencherFormulario(endereco) é chamada, preenchendo os campos do formulário com os dados retornados.
 
Explicação sobre a URL e Fetch: A URL é construída dinamicamente com o CEP fornecido pelo usuário, utilizando a API pública do ViaCEP. O método fetch() envia uma requisição HTTP GET para a URL gerada e espera a resposta da API. Em seguida, os dados são convertidos em JSON para serem manipulados no código JavaScript. O uso de await permite que a requisição seja concluída antes de prosseguir, garantindo que os dados estejam prontos antes de tentar preencher o formulário.
 
 
- document.getElementById('CEP').addEventListener('focusout', pesquisarCep)
 
Descrição: Esse trecho de código adiciona um evento que aciona a função pesquisarCep() sempre que o campo CEP perde o foco (quando o usuário sai do campo após inserir o CEP). Isso permite que a consulta à API ViaCEP seja feita automaticamente, sem a necessidade de um botão adicional para enviar a requisição.
 
 
 
## Fontes consultadas
 
- [ViaCep](https://viacep.com.br/) e [ViaCep Json](https://viacep.com.br/ws/86031150/json/):
 
Descrição: O site ViaCEP é uma API gratuita que permite consultar informações de endereço a partir de um CEP. No projeto, essa API foi usada para preencher automaticamente os campos de "Rua", "Bairro", "Cidade" e "Estado" com base no CEP fornecido. A URL específica usada (https://viacep.com.br/ws/86031150/json/) mostra o formato da resposta da API, retornando os dados do CEP em formato JSON.
 
 
 
- [Bootstrap](https://getbootstrap.com/):
 
Descrição: O Bootstrap foi utilizado para facilitar a estilização do formulário HTML. Ele forneceu componentes CSS prontos e responsivos o que torna o design mais adaptável a diferentes dispositivos. Em nosso projeto, o Bootstrap foi usado para criar e estilizar o layout do formulário de cadastro de endereço sem a necessidade de estilização manual.
 
 
- [W3 schools](https://www.w3schools.com/jsref/met_form_reset.asp)
 
 limparFormulario():
 
 A função que limpa os campos de um formulário pode ser encontrada explicada no site W3Schools. Ele ensina como usar o método reset() para limpar todos os campos de um formulário de uma vez. Além disso, a função que  criamos para limpar manualmente cada campo também é abordada com exemplos de manipulação de elementos individuais.
 
 
 - [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
 
 Validação de CEP (cepValido()):
 
 Nesse site possui vários exemplos de como validar um CEP corretamente. O uso de uma função para garantir que o CEP tenha 8 dígitos é uma prática comum, e esse artigo aborda diferentes métodos para essa validação.
 
 
 
 
 
 
## Autores
 
- [Murilo Tonassi](https://github.com/murilo-tonassi)
- [Nicolas Tonassi](https://github.com/nicolas-tonassi)
- [Pamela Souza](https://github.com/PamelaSouzaSilva)
- [Naillim Novaski](https://github.com/naillimnovaski)
# form-cadEndereco
 
## introdução
 
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
 
## Fontes consultadas
 
- [ViaCep](https://viacep.com.br/) e [ViaCep Json](https://viacep.com.br/ws/86031150/json/):
 
Descrição: O site ViaCEP é uma API gratuita que permite consultar informações de endereço a partir de um CEP. No projeto, essa API foi usada para preencher automaticamente os campos de "Rua", "Bairro", "Cidade" e "Estado" com base no CEP fornecido. A URL específica usada (https://viacep.com.br/ws/86031150/json/) mostra o formato da resposta da API, retornando os dados do CEP em formato JSON.
 
 
 
- [Bootstrap](https://getbootstrap.com/):
 
Descrição: O Bootstrap foi utilizado para facilitar a estilização do formulário HTML. Ele forneceu componentes CSS prontos e responsivos o que torna o design mais adaptável a diferentes dispositivos. Em nosso projeto, o Bootstrap foi usado para criar e estilizar o layout do formulário de cadastro de endereço sem a necessidade de estilização manual.
 
 
 
## Autores
 
- [Murilo Tonassi](https://github.com/murilo-tonassi)
- [Nicolas Tonassi](https://github.com/nicolas-tonassi)
- [Pamela Souza](https://github.com/PamelaSouzaSilva)
- [Naillim Novaski](https://github.com/naillimnovaski)
'use strict'; // Ativa o modo restrito
// Código para consumo de API da ViaCEP
//https://viacep.com.br/


// Limpar consulta do form já realizada 
const limparFormulario = () =>{

    document.getElementById('Rua').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Estado').value = '';
    document.getElementById('Complemento').value = '';
    document.getElementById('CEP').value = '';
    document.getElementById('Nú').value = '';
  

}

// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('Rua').value = endereco.Rua; // Coloca o valor de logradouro da API dentro do campo logradouro do formulário
    document.getElementById('Bairro').value = endereco.Bairro;
    document.getElementById('Cidade').value = endereco.Cidade;
    document.getElementById('Estado').value = endereco.Estado;
}


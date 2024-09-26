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
    document.getElementById('Número').value = '';
  

}

// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); // Expressão Regular
// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('Rua').value = endereco.Rua; // Coloca o valor de logradouro da API dentro do campo logradouro do formulário
    document.getElementById('Bairro').value = endereco.Bairro;
    document.getElementById('Cidade').value = endereco.Cidade;
    document.getElementById('Estado').value = endereco.Estado;
}

// Fução para consumo de API ViaCEP
const pesquisarCEP = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres);
        }  

    }else{
        alert('CEP incorreto');
    }
 }

 // Executa a ação de preenchimento do formulário ao deixar o campo do CEP 
 document.getElementById('CEP').addEventListener('focusout', pesquisarCEP);

//npm i, npm run dev , crl + c
//https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
// (=>) = function

//Gett chama o dado | Post salva o dado

const { request, response } = require('express');
const express = require('express');

//Criando um servidor web através do express
const app = express();

//configurar a aplicação para receber dados no formato jsom
app.use(express.json());

//Configurando uma requisição com o método GET para 
//a raiz da aplicação 
app.get("/", function(request, response){
    console.log("Primeira requisição recebida!");
    response.status(200).json({ message : "Reposta enviada em JSON"});
});

//EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma 
//informação pelo corpo da requisição
app.get("/:categoria/:produto", (request, response) => {
    // const categoria = request.params.categoria;
    // const produto = request.params.produto;
    const {categoria, produto} = request.params
    response.status(200).json({ categoria,produto});
    //console.log(categoria, produto);
});

//EXERCÍCIO - Criar uma nova rota/funcionalidade com método POST
//Para receber uma infromação pelo corpo da requisição
//POSTMAN, INSOMnIA E RESTCLIENT 
app.post("/", (request, response) => {
    response.status(201).json({ message: "Categoria cadastrada!", categoria : request.body})
});

//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});
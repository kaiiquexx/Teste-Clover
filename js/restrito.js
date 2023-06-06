let data = [
    {
        "dtRecord": "01/03/2023 10:10:35",
        "nome": "Neymar",
        "eMail": "neymar@neymar.com",
        "assunto": "Dúvidas",
        "mensagem": "Mensagem 1 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    },

    {
        "dtRecord": "07/04/2023 12:15:35",
        "nome": "Claudia Junior",
        "eMail": "claudia@claudia.com",
        "assunto": "Opções de Entrega",
        "mensagem": "Mensagem 2 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    },

    {
        "dtRecord": "08/04/2023 13:15:35",
        "nome": "Ageu Duarte Junior",
        "eMail": "ageu@ageu.com.br",
        "assunto": "Telefone de Contato",
        "mensagem": "Mensagem 3 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    },

    {
        "dtRecord": "2023-05-01 14:15:35",
        "nome": "Ageu Duarte Junior",
        "eMail": "ageu@ageu.com.br",
        "assunto": "Endereço para Retirada",
        "mensagem": "Mensagem 4 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    },

    {
        "dtRecord": "2023-05-01 15:15:35",
        "nome": "Ageu Duarte Junior",
        "eMail": "ageu@ageu.com.br",
        "assunto": "Oportunidades de trabalho",
        "mensagem": "Mensagem 5 | SENAI - SESI - Alunos do curso desenvolvimento de sistemas"
    }
];

let table = document.getElementById("myTable");
let rowCount = table.rows.length;

for (let i = 0; i < data.length; i++) {
    const reg = data[i];

    let row = table.insertRow(rowCount);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = data[i].dtRecord;
    cell2.innerHTML = data[i].nome;
    cell3.innerHTML = data[i].eMail;
    cell4.innerHTML = data[i].assunto;
    cell5.innerHTML = data[i].mensagem;

    rowCount++;
}

let divContainer = document.getElementById("container-mensagens");

for (let i = 0; i < data.length; i++) {

    // Criando as novas divs de mensagens
    const newDivMsg = document.createElement("div");
    const newDivMsgTitulo = document.createElement("div");
    const newDivMsgContent = document.createElement("div");
    newDivMsg.classList.add("restrito-mensagem");
    newDivMsgTitulo.classList.add("restrito-mensagem-titulo");
    newDivMsgContent.classList.add("restrito-mensagem-conteudo");

    // Adicionando as DIVs filhas dentro da DIV principal
    newDivMsg.appendChild(newDivMsgTitulo);
    newDivMsg.appendChild(newDivMsgContent);

    // Criando os elementos de texto
    const newTxtData = document.createElement("p");
    newTxtData.innerHTML = "Data: " + data[i].dtRecord;
    const newTxtNome = document.createElement("p");
    newTxtNome.innerHTML = "Nome: " + data[i].nome;
    const newTxtEmail = document.createElement("p");
    newTxtEmail.innerHTML = "eMail: " + data[i].eMail;
    const newTxtAssunto = document.createElement("p");
    newTxtAssunto.innerHTML = "Assunto: " + data[i].assunto;
    const newTxtMensagem = document.createTextNode(data[i].mensagem)

    // Adicionando os elementos de texto dentro da DIV de Título da Mensagem
    newDivMsgTitulo.appendChild(newTxtData);
    newDivMsgTitulo.appendChild(newTxtNome);
    newDivMsgTitulo.appendChild(newTxtEmail);
    newDivMsgTitulo.appendChild(newTxtAssunto);

    // Adicionando o Elemento de texto da Mensagem dentro da DIV do Conteúdo da Mensagem
    newDivMsgContent.appendChild(newTxtMensagem);

    // Adicionando a DIV da Mensagem 
    divContainer.appendChild(newDivMsg);
}
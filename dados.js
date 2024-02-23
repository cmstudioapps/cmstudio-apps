var nome = localStorage.getItem("nome")

var acessando = window.location.href;
var data = new Date()
var mes = data.toLocaleString('pt-BR', { month: 'long' });
console.log(mes);
var hora = data.getHours()+":"+data.getMinutes()
var dia = data.getDate() + "/" + mes + "/" + data.getFullYear() + " Hora: " + hora;


if (nome === null) {

 nome = prompt("Digite seu Nome")
localStorage.setItem("nome",nome)

}

fetch('https://api.sheetmonkey.io/form/pQQpZrU83ib6ocCX93j2oS', {
    
    method: 'post',
    headers: {
      
      'Accept': 'application/json',
      'Content-type': 'application/json'
      
    },
    body: JSON.stringify({
      
      Usuário: nome,
      aceessando: acessando,
      Data: dia
      
      
      
    })
   
  })
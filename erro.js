var dialog = document.createElement("dialog")
document.body.appendChild(dialog)
dialog.id = "dialogoA"
//css:
var style = document.createElement("style")
document.head.appendChild(style)

//Textos do tipo erro:

//Titulo:
 var h2 = document.createElement("h2")
 dialog.appendChild(h2)

h2.id = "Titulo"
h2.innerHTML = "ATENÇÃO"
//Mensagem de erro:

var h4 = document.createElement("h4")
dialog.appendChild(h4)

 h4.innerHTML = "Ocorreu um erro inesperado, se o erro persistir reporte ou tente mais tarde!"

//botão para confirmar
  var bt = document.createElement("button")
  dialog.appendChild(bt)
  
  bt.innerHTML = "Continuar"
  
  bt.addEventListener("click",() => {
    
    dialog.close()
    
  })
 

//Características:

style.innerHTML = `

 #dialogoA {
   
   background-color: white;
   color: black;
   text-align: center;
   padding: 10px;
   border: none;
   border-radius: 20px;
   margin-top: 50%;
   margin-right: auto;
   margin-left: auto;
 }

 #Titulo {
   
   color: red;
   font-weight: bold;
   
 }

`

//A caixa de aviso vai aparecer quando essa função for chamada:

function erro() {
  
  dialog.showModal()
  
  
}

console.log("Você está usando um código fornecido por Caio, para fazelo funcionar é so chamar a função erro()")
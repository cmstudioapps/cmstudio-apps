if (window.location.hostname !== 'https://pratique-js.gamejolt.io') {
    throw new Error('Acesso não autorizado!');
}

var codigo = localStorage.getItem("codigo")



if (codigo) {
  
  document.getElementById("codigo").innerHTML = codigo
  
  
}


function executar() {
 codigo = document.getElementById('codigo').value
  if (!codigo.includes("main.js")) {
  try {
    eval(codigo)
  }
  catch (e) {
    var a = e
    alert("Ouve um erro no seu código: ",a)
  }
  } else {
    
    alert("Você não tem permissão para acessar os códigos desta aplicação.")
    
    
  }

  
}

function salvar() {
  
  
  var codigo = document.getElementById('codigo').value
  
  localStorage.setItem("codigo",codigo)
  
  
  
}

function URRL() {

  var url = window.location.href
if (url.includes("editor.js")) {
  window.location.replace("https://pratique-js.gamejolt.io")
  }
  
}

setInterval(URRL,20)
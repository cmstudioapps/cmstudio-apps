
var concordo = localStorage.getItem("termo")




var bt = document.getElementById("concordo")
var estilo = document.createElement("style")
document.head.appendChild(estilo)


if (concordo !== null) {
    
    bt.style.backgroundColor = "greenyellow"
    bt.style.color = "black"
    bt.innerHTML = "Eu concordei"
    
  }

  
  
  
  
  estilo.innerHTML = `
  
  body {
  
  background-image: url('fundoB.png');
  
    color: white;
    
    background-size: 100% 100%;
    
  background-repeat: no-repeat;
  
  background-attachment: fixed;
  
  }
  `
  



function sim() {
  if (concordo !== null) {
  window.location.href = "formu.html"
  } else {
    
    window.scrollTo({
  top: 1000,
  behavior: 'smooth' // Isso adiciona uma animação suave à rolagem
});
    
  }
  
}

function concordei() {
  
  concordo = true
  localStorage.setItem("termo",concordo)
  window.scrollTo({
  top: 30,
  behavior: 'smooth' // Isso adiciona uma animação suave à rolagem
});
  
}


function delicado() {
  
  window.open("https://delicado-acessorios.gamejolt.io")
  
}

  
  
  
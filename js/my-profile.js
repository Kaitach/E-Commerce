
//  function perfilimg(id) {
//     sessionStorage.setItem("foti", id);
//   }
// var perfilimg = sessionStorage.getItem("foti");


    
    
let  hola = JSON.parse(sessionStorage.getItem('datos'));
document.getElementById('Perfil').innerHTML = `     
  
<div class="mb-2"  class="container" >

     <h1 class="mb-4" >  Bienvenido usuario: ` + hola.usuario +  ` <button id="changeBackground">  <img  id="img1"  class="perfilimg" src="img/monosonrie.jpeg" > </button> </h1>  
    <h1 class="mb-2" >  Esperamos su estadia en nuestra web sea grata </h1>  
  </div>
  `


// aca tratando de hacer un cambio de imagen con un click

  // const cambiodefoto = document.getElementById("changeBackground");

// changeBackground.addEventListener("click", () => {
        
//         document.getElementById("img1").src="img/monosonrie.jpeg";
//         sessionStorage.setItem("foti", 0);
// });
  


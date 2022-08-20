document.addEventListener("DOMContentLoaded", function () {

  let hola1 = JSON.parse(sessionStorage.getItem('datosg'));
  if (!hola1) {
    let hola = JSON.parse(sessionStorage.getItem('datos'));
  
    document.getElementById('Perfil').innerHTML = `     
    
  <div class="mb-2"  class="container" >
  
       <h1 class="mb-4" >  Bienvenido usuario: ` + hola.name + `   <img  id="img1"  class="perfilimg" src=` + hola.picture + ` > </button> </h1>
       <h1 class="mb-4" >  Su correo es: ` + hola.email + `  </h1>    
       <h1 class="mb-4" >  Su  id : ` + hola.sub + `  </h1>     
      <h1 class="mb-2" >  Esperamos su estadia en nuestra web sea grata </h1>  
    </div>
    `
  }
  else {
    document.getElementById('Perfil').innerHTML = `     
    
  <div class="mb-2"  class="container" >
  
       <h1 class="mb-4" >  Bienvenido usuario: ` + hola1.name + `   <img  id="img1"  class="perfilimg" src=` + hola1.picture + ` > </button> </h1>
       <h1 class="mb-4" >  Su correo es: ` + hola1.email + `  </h1>    
       <h1 class="mb-4" >  Su  id : ` + hola1.sub + `  </h1>        
  
      <h1 class="mb-2" >  Esperamos su estadia en nuestra web sea grata </h1>  
    </div>
    `
  }
            
});
        

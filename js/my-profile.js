
        
let  hola = JSON.parse(sessionStorage.getItem('datos'));
document.getElementById('Perfil').innerHTML = `     
  
<div class="mb-2"  class="container" >

     <h1 class="mb-4" >  Bienvenido usuario: ` + hola.name +  `   <img  id="img1"  class="perfilimg" src=`+hola.picture+` > </button> </h1>
     <h1 class="mb-4" >  Su correo es: ` + hola.email +  `  </h1>    
    <h1 class="mb-2" >  Esperamos su estadia en nuestra web sea grata </h1>  
  </div>
  `

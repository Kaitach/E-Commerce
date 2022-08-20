function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

let hola = JSON.parse(sessionStorage.getItem('datos'));

  
    document.getElementById('Perfil').innerHTML = `     
    
  <div   class="text-primary" class="mb-2"  class="container" >
  
       <h1 class="text-primary" >  Bienvenido usuario: ` + hola.usuario + `   <img  id="img1"  class="perfilimg" src=` + hola.foto + ` > </button> </h1>
       <hr>
       <h1 class="text-primary" >  Su correo es: ` + hola.email + `  </h1> 
       <hr>      
       <h1 class="text-primary" >  Su  direccion : ` + hola.direccion + `  </h1> 
       <hr>
       <h1 class="text-primary" >  Su  id : ` + hola.sub + `  </h1>    
       <hr>
       <h1 class="text-primary">  Esperamos su estadia en nuestra web sea grata </h1>  
        <hr>
    </div>
    <button   class="btn btn-primary" onclick=cambiar()> Cambiar datos</button>

    `
  
function cambiar() {
  const datos = {            
    usuario: prompt("Ingrese su nuevo nombre"),
    email: prompt("Ingrese su nuevo correo"),
    direccion: prompt("Ingrese su nueva direccion"),
    foto: "img/monosonrie.jpeg",
    sub: 32432432    
  }
  sessionStorage.setItem("datos", JSON.stringify(datos));
  showAlertSuccess();
  setTimeout(function () {const url = "my-profile.html"; location.href = url;}, 2000);


}

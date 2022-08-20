


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 

      });


function handleCredentialResponse(response) {
  const responsePayload = decodeJwtResponse(response.credential);
  localStorage.setItem("datos", JSON.stringify(responsePayload));
  window.location.href = "index.html";
  
}

function decodeJwtResponse (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};

  
      function user(id) {
        sessionStorage.setItem("user", id);
      }

      function validarFormulario(evento) {
        evento.preventDefault();
        let datos = {}
        var usuario = document.getElementById('Inputuser').value;
        var clave = document.getElementById('Password').value;

        if(usuario.length == 0  || clave.length < 6 )  {
          alert('No has escrito nada en el usuario');
          return;
        }
      else {
          name= usuario.split("@")[0];
          const datos = {
            name: name,
            email: usuario,         
            picture: "img/monosonrie.jpeg",
            sub: 785412
          }
          sessionStorage.setItem("datos", JSON.stringify(datos));
          location.href = "index.html";

          }     
};

function visitas(id) {
  sessionStorage.setItem("visi", id);
}
var visitas = sessionStorage.getItem("visi");

if (visitas > 1) {
  window.location.replace("index.html");    
}

  






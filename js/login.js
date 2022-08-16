


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 

      });
  
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
        else{
          datos.usuario = usuario;
          datos.clave = clave;
          sessionStorage.setItem("datos", JSON.stringify(datos));
          location.href ="index.html";
         
        
          }
            
};
function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); 
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        Inputuser = profile.getName();
        Contraseña = Contraseña();
        regBtn = SubmitEvent();
        
};
  


function handleCredentialResponse(response) {
  const responsePayload = decodeJwtResponse(response.credential);
  window.location.href = "index.html";
  console.log("ID: " + responsePayload.sub);
  console.log('Full Name: ' + responsePayload.name);
  console.log('Given Name: ' + responsePayload.given_name);
  console.log('Family Name: ' + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);
  console.log(document.cookie)
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};



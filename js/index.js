document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    document.getElementById("Salir").addEventListener("click", function() {
        sessionStorage.clear();
    });
});

function visitas(id) {
    sessionStorage.setItem("visi", id);
  }
var visitas = sessionStorage.getItem("visi");

if (visitas <= 0) {
    window.location.replace("login.html");
    sessionStorage.setItem("visi", 1);
    console.log(sessionStorage.visita)
}


 

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
});

localStorage.setItem("visita", 0);
console.log(localStorage.visita)
if (localStorage.getItem("localStorage.visita" ) <= 0) {
    window.location.replace("login.html");
    localStorage.visita = Number(localStorage.visita) + 1;
    console.log(localStorage.visita)
}

localStorage.visita = Number(localStorage.visita) + 1;
 

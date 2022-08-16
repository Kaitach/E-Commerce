const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";





let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

let datoMenu = JSON.parse(sessionStorage.getItem('datos'));
document.getElementById('dropdown').innerHTML =  `  <button class="btn btn-secondary dropdown-toggle" type="button"   id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">     
` + datoMenu.usuario + ` </button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <img  id="img1" class="perfilimg" src="img/monosonrie.jpeg" >
    <a class="dropdown-item" href="cart.html">Carrito</a>
    <a class="dropdown-item" href="my-profile.html">Mi Perfil</a>
    <a class="dropdown-item" href="sell.html">Vender</a>
    <a class="dropdown-item" id="Salir" class="nav-link" href="login.html">Salir</a>  
</ul>
</div>
<li class="nav-item">
</li>
</ul>
`

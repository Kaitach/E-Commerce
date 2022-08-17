// Variables 
let idproducto = [];
var categoriaid = localStorage.getItem("catID");

// funncion para setear el id del producto lo usaremos para product information
function setproID(id) {
  localStorage.setItem("pro", id);
  window.location = "product-info.html"
}

// aca cargamos el json 
async function listado() {
  fetch(
    `https://japceibal.github.io/emercado-api/cats_products/` +
      categoriaid +
      `.json`
  )
    .then((res) => res.json())
    .then((data) => {
      productos(data.products);
    });
  
   
}

// aca hacemos la magia para que nos muestre en nuestro HTML  el listado de productos

function productos(idproducto) {
  console.log(idproducto);
  let productosHTML = "";
  for (let i = 0; i < idproducto.length; i++) {
    const producto = idproducto[i];
    
                 
    productosHTML +=
      `            <div onclick="setproID(${producto.id})" class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-4">
                            <img src=" ${producto.image}  " alt="` +idproducto.ID +`" class="img-thumbnail">
                     </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-2">  ${producto.name} -   ${producto.currency}  ${producto.cost}  </h4>                                
                                <small class="text-muted">${producto.soldCount} Vendidos</small>
                            </div>
                            <p class="mb-9">${producto.description}</p>
                        </div>
                    </div>
                </div>
                
                `;
    document.getElementById("productos").innerHTML = productosHTML;
    }
    
}

// ejecutamos la funciones 

listado();
productos();

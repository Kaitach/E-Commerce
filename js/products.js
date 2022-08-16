let idproducto = [];
var categoriaid = localStorage.getItem("catID");

function setproID(id) {
  localStorage.setItem("pro", id);
  window.location = "product-info.html"
}
async function listado() {
  fetch(
    `https://japceibal.github.io/emercado-api/cats_products/` +
      categoriaid +
      `.json`
  )
    .then((res) => res.json())
    .then((data) => {
      listautos(data.products);
    });
    console.log(listautos)
}

function listautos(idproducto) {
  console.log(idproducto);
  let htmlContentToAppend = "";
  for (let i = 0; i < idproducto.length; i++) {
    const producto = idproducto[i];
    
                 
    htmlContentToAppend +=
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
    document.getElementById("productos").innerHTML = htmlContentToAppend;
    }
    
}

listado();
listautos();

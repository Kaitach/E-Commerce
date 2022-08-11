let idproducto = [];
var categoriaid = localStorage.getItem("catID")
async function listado() {
  fetch(`https://japceibal.github.io/emercado-api/cats_products/`+categoriaid+`.json`)
    .then((res) => res.json())
    .then((data) => {
      listautos(data.products);
    });
}

function listautos  (idproducto) {
        console.log(idproducto);
        let htmlContentToAppend = "";
        for (let i = 0; i < idproducto.length; i++) {
            const producto = idproducto[i+0];
            
            htmlContentToAppend +=
                `
                    <div class="row">
                        <div class="col-3">
                            <img src=" ${producto.image}  " alt="` +
                idproducto.ID +
                `" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">  ${producto.name}   </h4>
                                <h4 class="mb-1"> ${producto.currency} </h4>
                                <h4 class="mb-1"> ${producto.cost}</h4>
                                <small class="text-muted">${producto.soldCount} Vendidos</small>
                            </div>
                            <p class="mb-1">${producto.description}</p>
                        </div>
                    </div>
                </div>
                
                `;
            document.getElementById("productos").innerHTML =
                htmlContentToAppend;
        }
    };

listado();
listautos();

// variables globales
let idproducto = [];
let productoid = localStorage.getItem("pro");
let producto = [];

// function relacionadoid(id) {
//     localStorage.setItem("relacionado", id);
//     window.location = "product-info.html"
//   }
function setproID(id) {
  localStorage.setItem("pro", id);
  window.location = "product-info.html";
}

function calificar(num){

    let estrellas = "";
    for (let i=1; i <=5; i++){   
        if (i <= num){ 
        estrellas += `<i class='fas fa-star' style='color: #f3da35'></i>`;
      }else{
        estrellas += `<i class="far fa-star"></i>`;
      };
    };
     return estrellas;
 };

// fetch
async function comentarios() {
    fetch(
      `https://japceibal.github.io/emercado-api/products_comments/` + productoid + `.json`
    )
      .then((res) => res.json())
      .then((data) => {
        comentari(data);
      });
  }
comentarios()
async function listado() {
  fetch(
    `https://japceibal.github.io/emercado-api/products/` + productoid + `.json`
  )
    .then((res) => res.json())
    .then((data) => {
      listautos(data);
    });
}

listado();

// funcion que muestra los productos por separado

function listautos(idproducto) {
  console.log(idproducto);

  let nombre = "";
  nombre += `           
        <h2 class="title h1">   ${idproducto.name}  </h2>
        <hr>                        
        `;
  document.getElementById("productonombre").innerHTML = nombre;

  let htmlContentToAppend = "";
  htmlContentToAppend += `      
        
        <div    class="col10" class="row">          
        <div  class="slider-frame"  class="row"  > 
        <h4 class="title h4" >      Costo: ${idproducto.currency}  ${idproducto.cost}  </h4>               
        <ul>
            <li>
                <img src="${idproducto.images[0]}"  >
            </li>
            <li>
                <img src="${idproducto.images[1]}" >
            </li>
            <li>
                <img src="${idproducto.images[2]}">
            </li>
            <li>
                <img src="${idproducto.images[3]}">
            </li>
        </ul>
        <h4 class="title h4" >      Descripción:  &nbsp&nbsp  ${idproducto.description}  </h4>
        <h4 class="title h4" >      Unidades vendidas:  &nbsp&nbsp  ${idproducto.soldCount}  </h4>
    </div>
       </div>                   
                  </div>
                  </div>                  
              
              `;
    
    
    
    document.getElementById("productos").innerHTML = htmlContentToAppend;
    




// aca tenemos los productos relacionados 
     
  let relacionadoE = "";
  for (let i = 0; i < idproducto.relatedProducts.length; i++) {
    const productore = idproducto.relatedProducts[i];
    relacionadoE +=
      ` <div class="card" id="cardRelacionado">
         <h1> Producto Relacionado </h1>
            <img src="` +
      productore.image +
      `" alt="Denim Jeans" style="width:100%">
                <h1>` +
      productore.name +
      `</h1>
         

            <div class="container" id="botonRelacionados">
            <p><button onclick="setproID(${productore.id})" >Ir a producto</button></p>
        
            </div>
            </div>`;

    document.getElementById("relacionados").innerHTML = relacionadoE;
    }
    


}

listautos();
// comentarios del producto

function comentari(idcomentario) {
    console.log(idcomentario);


    let coment = "";
    for (let i = 0; i < idcomentario.length; i++) {
        const comentario = idcomentario[i];
        coment += `      
        <div class="row justify-content-center" class="col-sm-9" >
            <div  class="col-8">
                <div class="card card-white post">
                        <div class="float-left image">                        
                        <div >
                            <div class="title h5" ><b>`+comentario.user+`  </b><div id="estrellas">` + calificar(comentario.score) +  `</div>
                            
                            </div>
                        </div>
                    </div> 
                    <div class="col-sm-10"> `+ comentario.description +`
                    <h6 class="col-sm-9"> `+ comentario.dateTime+`</h6>

                    <br>    
                    </div>
                </div>
            
        </div>
    </div>
            `;
  
  
  
        document.getElementById("comentarios").innerHTML = coment;
    }
};
comentari();

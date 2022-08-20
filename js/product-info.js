// variables globales
let idproducto = [];
let productoid = localStorage.getItem("pro");
let producto = [];

// usamos el localStorage 
function setproID(id) {
  localStorage.setItem("pro", id);
  window.location = "product-info.html";
}


function precio(id) {
  localStorage.setItem("precios", id);
  window.location = "cart";
}

//  funcion para calificar con estrellas 
function calificar(est){

  let calificacion = "";
  for (let i=1; i <=5; i++){   
        if (i <= est){ 
        calificacion += `<i class='fas fa-star' style='color: #f3da35'></i>`;
      }else{
        calificacion += `<i class="far fa-star"></i>`;
      };
    };
     return calificacion;
};
 


// aca cargamos el json 

async function comentarios() {
    fetch(
      `https://japceibal.github.io/emercado-api/products_comments/` + productoid + `.json`
    )
      .then((res) => res.json())
      .then((data) => {
        comentari(data);
      });
}
  


async function listado() {
  fetch(
    `https://japceibal.github.io/emercado-api/products/` + productoid + `.json`
  )
    .then((res) => res.json())
    .then((data) => {
      listautos(data);
    });
}



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
        <h4 class="text-primary" >    <b>     Costo: ${idproducto.currency}  ${idproducto.cost}  <button  onclick=hola() onclick="precio(${idproducto.cost})" class="btn btn-outline-primary"   >Agregar al carrito</button>  </h4>               
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
        <h4  class="text-info" >    <b>   Descripción:  &nbsp&nbsp  ${idproducto.description}    </b>
        </h4>
        <h4  class="text-muted" >     Unidades vendidas:  &nbsp&nbsp <b>  ${idproducto.soldCount} </b> </h4> 
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
      ` <div  class="card" id="cardRelacionado">
         <h1> Producto Relacionado </h1>
            <img  onclick="setproID(${productore.id})" src="` +
      productore.image +
      `" alt="Denim Jeans" style="width:100%">
                <h1>` +
      productore.name +
      `</h1>
         

            <div class="container" id="botonRelacionados">
        
            </div>
            </div>`;

    document.getElementById("relacionados").innerHTML = relacionadoE;
    }
    


}


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



//  funcion que crea los comentarios  del usuario 
function enviarcomentario() {
  let now = new Date()
  let opinion = document.getElementById("opinion").value;  
  let valor = 0
  if (document.getElementById("radio1").checked ){
    valor = document.getElementById("radio1").value }
  else if (document.getElementById("radio2").checked ){
    valor = document.getElementById("radio2").value 
  }
  else if (document.getElementById("radio3").checked){
    valor = document.getElementById("radio3").value
  }
  else if (document.getElementById("radio4").checked ) {
    valor = document.getElementById("radio4").value
  } else if (document.getElementById("radio5").checked ){
    valor = document.getElementById("radio5").value
  }
  else {
    return;
      }
        
        

  let opi = ""; 
      opi += `      
      <div class="row justify-content-center" class="col-sm-9" >
      <div  class="col-8">
          <div class="card card-white post">
                  <div class="float-left image">                        
                  <div >
                      <div class="title h5" ><b>`+ datoMenu.usuario + `  </b><div id="estrellas">` + calificar(valor) +  `</div>
                      
                      </div>
                  </div>
              </div> 
              <div class="col-sm-10"> `+ opinion+`
              <h6 class="col-sm-9"> `+ now+`</h6>

              <br>    
              </div>
          </div>
      
  </div>
</div>
          `;
      document.getElementById("comentarioNuevo").innerHTML += opi;
  document.getElementById("opinion").value = " ";
  document.getElementById("radio1").checked = false;
  document.getElementById("radio2").checked = false;
  document.getElementById("radio3").checked = false;
  document.getElementById("radio4").checked = false;
  document.getElementById("radio5").checked = false;
};

// ejecutamos las funciones 
comentarios()
listado();
listautos();
comentari();

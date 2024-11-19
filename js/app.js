//importar los metodos de api.js
import { getcanino, getcaninoByID, updateCanino, deleteCanino  } from "./api";

// Traer todos los productos y mostarlos en la pagina principal
document.addEventListener ("DOMContentLoaded", async () => {
    const caninoList = document.getElementById("canino-List"); 

    const canino = await getcanino();
    caninoList.innerHTML = canino.map(canino => `
       <div class="col-xs-12 col-sm-6 col-md-3 card">
       <div class="card-body d-flex flex-column justify-content-end">
       <h5 class="card-tittle">${product.name}</h5>
       <p class="card-text">${product.price}</p>
       <a onclick="viewProduct(&{product.id})" class="btn btn-primary"> Ver mas </a>
       </div>
       </div> 
    `).join("");
 });


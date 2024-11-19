const API_URL = "http://localhost:3000/api/canino";

//obtener todos los caninos
export const getcanino = async () => {
const response = await fetch(API_URL);
return response.json();
};

//obtener canino por ID
export const getcaninoByID = async (id) => {
const response = await fetch(`${API_URL}/${id}`)
return response.json();
};

//crear un producto
export const addCanino = async (canino) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json" } ,
        body: JSON.stringify(canino)    
    });
    return response.json();
     };


 //actualizar un canino
 export const updateCanino = async ( id, canino) => {
    const response = await fetch(`${API_URL}/${id}` ,{
        method: "PUT",
        headers: {"Content-Type": "application/json" } ,
        body: JSON.stringify(canino)    
    });
    return response.json();
     };

     //borrar un producto
     export const deleteCanino = async (id) => {
     return fetch(`${API_URL}/${id}`, {
        method: "DELETE",
     });

      }


// Colocamos la ruta del servidor 
const API_URL = "http://localhost:3000/api/products";

// Obtener todos los Caninos
export const getProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Obtener Canino por ID
export const getProductByID = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

// Crear un Canino
export const addProduct = async (product) => {
  const respone = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  return respone.json();
};

// Actualizar un Canino
export const updateProduct = async (id, product) => {
  const respone = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  return respone.json();
};

// Borrar un Canino
export const deleteProduct = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products);
//   })
//   .then(() => {
//     console.log('hola')
//   })
//   .catch(error => console.log(error));

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));

/**Metodo POST */
{
  const API = "https://api.escuelajs.co/api/v1";

  function postData(urlApi, data) {
    const response = fetch(urlApi, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  const data = {
    title: "212",
    price: 212,
    description: "A description",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  };

  postData(`${API}/products`, data)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// fetch("./product.json") // fetches the Json data
//   .then((r) => r.json()) // Grabs the objects by doing r.json()
//   .then((r) => {
//     // r in this iteration is the objects that we got from r.json()
//     const products = r.products; // We go into r.products which has all of our objects in our JSON file
//     let productContainer = document.querySelector(".product-container"); // Selects the contianer that will hold all the products
//     products.forEach((element) => {
//       // Loops over the array
//       productContainer.innerHTML += `<p class="product">${element.image} ${element.title} ${element.price}</p>`; // Changes the innerHTML and +=(keeps adding onto the container) a p tag with the name and the age inside
//     });
//   });

let http = new XMLHttpRequest();
http.open("get", "product.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output = "";
    for (let item of products) {
      output += `
            <div class="product">
               <img src="${item.image}" alt="${item.description}">
               <p class="title">${item.title}</p>
               <p class="description">${item.description}</p>
               <p class="price">
                  <span>${item.price}</span>
               </p>
               <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
            </div>
         `;
    }
    document.querySelector(".products").innerHTML = output;
  }
};

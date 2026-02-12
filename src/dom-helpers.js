const detailsSection = document.querySelector("#product-details");
const productsList = document.querySelector("#products-list");
const productCount = document.querySelector("#product-count");

export const renderProducts = (products) => {
  const li = document.createElement("li");
  productsList.innerHTML = "";
  productCount.textContent = products.length;

  products.forEach((product) => {
    li.dataset.productId = product.id;

    const img = document.createElement("img");
    img.src = product.thumbnail;
    img.alt = product.title;

    const h3 = document.createElement("h3");
    h3.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    li.append(img, h3, price);
    productsList.append(li);
  });
};

export const renderProductDetails = (product) => {
  detailsSection.classList.remove('hidden');

  const productDetails = document.querySelector('#product-details');
  const img = document.querySelector('#product-thumbnail');
  const price = document.querySelector('#product-price');
  const title = document.querySelector('#product-title');
  const description = document.querySelector('#product-description');
  const rating = document.querySelector('#product-rating');
  title.textContent = product.title;
  price.textContent = product.price;
  description.textContent = product.description;
  rating.textContent = product.rating;
  img.src = product.thumbnail;
  img.alt = `${product.title} image`;
  productDetails.classList.remove('hidden');
};

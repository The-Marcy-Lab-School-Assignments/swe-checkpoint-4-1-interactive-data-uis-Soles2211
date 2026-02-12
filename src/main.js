import { getProducts, getProductById } from "./fetch-helpers";
import { renderProducts, renderProductDetails } from "./dom-helpers";

const errorMessage = document.querySelector("#error-message");

getProducts().then((products) => {
  if (products.error) {
    errorMessage.textContent = products.error.message;
  } else {
    renderProducts(products.data);
  }
});

const productsList = document.querySelector("#products-list");
productsList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;

  getProductById(li.dataset.productId).then((products) => {
    if (products.error) {
      errorMessage.textContent = products.error.message;
    } else {
      renderProductDetails(products.data);
    }
  });
});

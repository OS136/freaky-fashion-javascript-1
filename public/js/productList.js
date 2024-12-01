const tableBody = document.querySelector("#productTable tbody");

async function loadProducts() {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const products = await response.json();
  tableBody.innerHTML = "";
  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${product.name}</td>
          <td>${product.SKU}</td>
          <td>${product.price}</td>
        `;
    tableBody.appendChild(row);
  });
}

const form = document.getElementById("productForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(form);

    const url = formData
      .get("productName")
      .trim()
      .toLocaleLowerCase()
      .replace(/ /g, "-")
      .replace("å", "a")
      .replace("ä", "a")
      .replace("ö", "o");

    const product = {
      productName: formData.get("productName"),
      productPrice: formData.get("productPrice"),
      productSKU: formData.get("productSKU"),
      productDescription: formData.get("productDescription"),
      productPicture: formData.get("productPicture"),
      productDate: new Date().toISOString().split("T")[0],
      productUrl: url,
      productBrand: "Chinchin",
    };

    const response = await fetch("/admin/products/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      window.location.href = "/admin/products";
    } else {
      console.error("Failed to add product");
    }
  } catch (error) {
    throw new Error(error);
  }
});

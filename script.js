fetch("products.json")
  .then(response => response.json())
  .then(data => {
    let container = document.createElement("div");
    container.id = "product-container";
    document.body.appendChild(container);

    data.forEach(product => {
      let card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <p>Category: ${product.category}</p>
      `;

      container.appendChild(card);
    });
  });
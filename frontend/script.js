function loadProducts() {
    fetch("http://localhost:8080/products")
        .then(response => response.json())
        .then(products => {

            let productList = document.getElementById("productList");

            document.getElementById("productCount").textContent =
                `Products Available: ${products.length}`;

            productList.innerHTML = "";

            products.forEach(product => {

                let productDiv = document.createElement("div");
                productDiv.className = "product";

                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price}</p>
                    <span class="category">${product.category}</span>
                    <p>${product.description}</p>

                    <button class="edit-btn" onclick="editProduct(${product.id})">
                        Edit
                    </button>

                    <button class="delete-btn" onclick="deleteProduct(${product.id})">
                        Delete
                    </button>
                `;

                productList.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error("Error loading products:", error);
        });
}


function searchProducts() {

    let searchText = document.getElementById("searchInput").value.toLowerCase();

    let products = document.querySelectorAll(".product");
    let found = false;

    products.forEach(product => {

        let productText = product.textContent.toLowerCase();

        if (productText.includes(searchText)) {
            product.style.display = "block";
            found = true;
        } else {
            product.style.display = "none";
        }
    });

    let noProducts = document.getElementById("noProducts");

    if (!found) {
        noProducts.textContent = "No products found.";
    } else {
        noProducts.textContent = "";
    }
}


function addProduct() {

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let category = document.getElementById("productCategory").value;
    let description = document.getElementById("productDescription").value;

    if (name === "" || price === "" || category === "" || description === "") {
        alert("Please fill all fields.");
        return;
    }

    let product = {
        name: name,
        price: Number(price),
        category: category,
        description: description
    };

    fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(() => {

            document.getElementById("productName").value = "";
            document.getElementById("productPrice").value = "";
            document.getElementById("productCategory").value = "";
            document.getElementById("productDescription").value = "";

            loadProducts();
        })
        .catch(error => {
            console.error("Error adding product:", error);
        });
}


function editProduct(id) {

    let name = prompt("Enter new product name:");
    let price = prompt("Enter new price:");
    let category = prompt("Enter new category:");
    let description = prompt("Enter new description:");

    if (name === null || price === null || category === null || description === null) {
        return;
    }

    let product = {
        name: name,
        price: Number(price),
        category: category,
        description: description
    };

    fetch(`http://localhost:8080/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(() => {
            loadProducts();
        })
        .catch(error => {
            console.error("Error updating product:", error);
        });
}


function deleteProduct(id) {

    let confirmDelete = confirm("Are you sure you want to delete this product?");

    if (!confirmDelete) {
        return;
    }

    fetch(`http://localhost:8080/products/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            loadProducts();
        })
        .catch(error => {
            console.error("Error deleting product:", error);
        });
}


loadProducts();


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
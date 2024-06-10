document.addEventListener('DOMContentLoaded', function() {
    const selectOneDropdown = document.getElementById('selectOneDropdown');
    const searchByItemDropdown = document.getElementById('searchByItemDropdown');
    const productTable = document.getElementById('productTable');
    const productTableBody = productTable.querySelector('tbody');

    const productsArray = [
        { productId: "1", productName: "Chai", unitPrice: "18.0000", unitsInStock: "39", categoryId: 1, supplier: "Exotic Liquids", discontinued: "false" },
        { productId: "2", productName: "Chang", unitPrice: "19.0000", unitsInStock: "17", categoryId: 1, supplier: "Exotic Liquids", discontinued: "false" },
        { productId: "3", productName: "Aniseed Syrup", unitPrice: "10.0000", unitsInStock: "13", categoryId: 2, supplier: "Exotic Liquids", discontinued: "false" },
        // Add more products as needed...
    ];

    const categoriesArray = [
        { categoryId: 1, description: "Soft drinks coffees teas beers and ales", name: "Beverages" },
        { categoryId: 2, description: "Sweet and savory sauces relishes spreads and seasonings", name: "Condiments" },
        { categoryId: 3, description: "Desserts candies and sweet breads", name: "Confections" },
        { categoryId: 4, description: "Cheeses", name: "Dairy Products" },
        { categoryId: 5, description: "Breads crackers pasta and cereal", name: "Grains/Cereals" },
        { categoryId: 6, description: "Prepared meats", name: "Meat/Poultry" },
        { categoryId: 7, description: "Dried fruit and bean curd", name: "Produce" },
        { categoryId: 8, description: "Seaweed and fish", name: "Seafood" }
    ];

    // Populate searchByItemDropdown with categories
    categoriesArray.forEach(category => {
        const option = document.createElement('option');
        option.value = category.categoryId;
        option.text = category.name;
        searchByItemDropdown.add(option);
    });

    selectOneDropdown.addEventListener('click', function() {
        // Clear existing rows in the table
        productTableBody.innerHTML = '';

        // Populate table with products from the array
        productsArray.forEach(product => {
            const row = document.createElement('tr');

            Object.values(product).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });

            productTableBody.appendChild(row);
        });

        productTable.style.display = 'table';
    });

    searchByItemDropdown.addEventListener('change', function() {
        const selectedCategoryId = parseInt(this.value);

        if (!isNaN(selectedCategoryId)) {
            const filteredProducts = productsArray.filter(product => product.categoryId === selectedCategoryId);
            productTableBody.innerHTML = '';

            filteredProducts.forEach(product => {
                const row = document.createElement('tr');

                Object.values(product).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });

                productTableBody.appendChild(row);
            });

            productTable.style.display = 'table';
        } else {
            productTable.style.display = 'none';
        }
    });

    document.getElementById('viewAllDropdown').addEventListener('change', function() {
        const selectedOption = this.value;
        if (selectedOption === 'all') {
            // Clear existing rows in the table
            productTableBody.innerHTML = '';

            // Populate table with all products
            productsArray.forEach(product => {
                const row = document.createElement('tr');

                Object.values(product).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });

                productTableBody.appendChild(row);
            });

            productTable.style.display = 'table';
        } else {
            productTable.style.display = 'none';
        }
    });
});

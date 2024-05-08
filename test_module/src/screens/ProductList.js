import React, { useState, useEffect } from "react";
import axios from "axios";
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products",
          {
            params: {
              top: 10,
              minPrice: 1,
              maxPrice: 10000,
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h2>Top products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <p>Name:{product.productName}</p>
            <p>Price:{product.price}</p>
            <p>Rating:{product.rating}</p>
            <p>Discount:{product.discount}</p>
            <p>Availability:{product.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

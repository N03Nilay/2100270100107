// AllProductsPage.js
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODI1Njk3LCJpYXQiOjE3MTc4MjUzOTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhhYmUzNzJmLTQ2YTYtNDIxZi1iOTc4LTU1ZmQ1NmNmZjI5YiIsInN1YiI6ImtzaGl0aXoyMTEwMDcxQGFrZ2VjLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiQUtHRUMiLCJjbGllbnRJRCI6IjhhYmUzNzJmLTQ2YTYtNDIxZi1iOTc4LTU1ZmQ1NmNmZjI5YiIsImNsaWVudFNlY3JldCI6ImFackdBV3Fmb2V0bFd1Q0IiLCJvd25lck5hbWUiOiJLc2hpdGl6Iiwib3duZXJFbWFpbCI6ImtzaGl0aXoyMTEwMDcxQGFrZ2VjLmFjLmluIiwicm9sbE5vIjoiMjEwMDI3MDEwMDA5MSJ9.L7a3tEdnORv2_Gw-vQ2vkvdJ38eaP_N7-XJ_7qFW3Gs",
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <h1>All Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;

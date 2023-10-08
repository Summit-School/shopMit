import React, { useState } from 'react';
import "./dashboard.css"
import { fetchCategoryData } from '../components/useFetch';
const Dashboard = () => {
  // Dummy product data
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 20.99, description: 'Description 1', stock: 10 },
    { id: 2, name: 'Product 2', price: 30.99, description: 'Description 2', stock: 5 },
    { id: 3, name: 'Product 3', price: 15.99, description: 'Description 3', stock: 20 },
  ];
// here is where I wanna make the edit
const [products, setProducts] = useState([]);

const categories = ['Automotive', 'BeautyCare', 'Clothing', 'Electronics', 'Furniture', 'Jewelry', 'Kids'];

async function fetchDataForCategories() {
  const allData = await fetchCategoryData(categories);
  console.log(allData); // This will contain data for all categories
  setProducts(allData);
}

fetchDataForCategories();


  

  

  // Function to handle product deletion
  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="dashboard">
      <div className="dashboardwrapper">
          <h1>Product Dashboard</h1>
          <table className="product-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.description}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button className="edit-button" onClick={() => alert(`Edit product ${product.id}`)}>
                      Edit
                    </button>
                    <button className="delete-button" onClick={() => handleDelete(product.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default Dashboard;

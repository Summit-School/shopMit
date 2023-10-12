import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { useCategoryData } from '../components/useFetch';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [customAlert, setCustomAlert] = useState({
    isOpen: false,
    message: "",
  });

  const openCustomAlert = (message) => {
    setCustomAlert({ isOpen: true, message });
  };

  const closeCustomAlert = () => {
    setCustomAlert({ isOpen: false, message: "" });
  };

  const {data,setData} = useCategoryData();

// there is a difference in a change in state 
// and a change in value. A  state can be infinitely changing without
// the value actually triggering the change but the runtime changing so useEffect ensures that the value actually changes

    // useEffect(() => {
    //   setProducts(data);
    // }, [data]);
  
    
  
  const handleDelete = (productId) => {
    const updatedProducts = data.filter((product) => product.id !== productId);
    // setProducts(updatedProducts);
    setData(updatedProducts);
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
            {data.length > 0 &&
              data.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.type}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.description}</td>
                  <td>{product.stock}</td>
                  <td>
                  <div className="actionB">
                    <button
                        className="view-button"
                        // onClick={() => openCustomAlert("EDIT PRODUCT DETAILS")}
                      >
                        View
                      </button>
                    <button
                        className="edit-button"
                        onClick={() => openCustomAlert("EDIT PRODUCT DETAILS")}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                  </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {customAlert.isOpen && (
        <div className="custom-alert">
          <div className="custom-alert-content">
            <p>{customAlert.message}</p>
            <form action="">
            <div>
            {/* <label htmlFor="productName">Name</label> */}
              <input type="text" id="productName" placeholder='Name'/>
            </div>
              <div>
            {/* <label htmlFor="Price">Price</label> */}
              <input type="number" id="Price" placeholder='Price'/>
              </div>
              <div>
            {/* <label htmlFor="ProductDescription">Description</label> */}
              <textarea name="" id="ProductDescription" cols="30" rows="10">Description</textarea>

              </div>
              <div>
            {/* <label htmlFor="Stock">Stock</label> */}
              <input type="number" id="Stock" placeholder='Stock'/>

              </div>
             

            </form>
            <div className='DoneButton'>
            <button onClick={closeCustomAlert}>Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

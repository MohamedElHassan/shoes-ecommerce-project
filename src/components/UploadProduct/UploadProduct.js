import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadProduct.scss';
const UploadProduct = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [productId, setProductId] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/projectAPI/excutecategories.php', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: category,
      }),
    })
      .then((res) => {
        console.log('excutecategories ' + res);
        if (res.ok) {
          console.log('Success');
          return res.json();
        } else {
          console.log('Not Successful');
        }
      })
      .then((message) => console.log(message));
    fetch('http://localhost/projectAPI/executeupload.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        type: category,
        img_url: image,
        price,
        description,
        productId,
      }),
    })
      .then((res) => {
        console.log('executeupload ' + res);
        if (res.ok) {
          console.log('Success');
          return res.json();
        } else {
          console.log('Not Successful');
        }
      })
      .then((message) => console.log(message));
    setName('');
    setImage('');
    setPrice('');
    setDescription('');
    setCategory('');
    setProductId('');
    navigate('/products');
  };

  return (
    <>
      <div className="upload-product section__padding">
        <h1>Upload Product</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            type="text"
            placeholder="Product Id"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Product Name"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Image Url..."
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Product Price"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Product Description"
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Product Category"
          />
          <button className="primary-btn" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadProduct;

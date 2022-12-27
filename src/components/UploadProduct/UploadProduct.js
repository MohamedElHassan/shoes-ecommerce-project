import React, { useState } from 'react';
import './UploadProduct.scss';
const UploadProduct = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/projectAPI/executeupload.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        image,
        price,
        description,
        category,
        brand,
      }),
    })
      .then((res) => {
        console.log(res);
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
    setBrand('');
  };

  return (
    <>
      <div className="upload-product section__padding">
        <h1>Upload Product</h1>
        <form onSubmit={handleSubmit}>
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
          <input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            type="text"
            placeholder="Product Brand"
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

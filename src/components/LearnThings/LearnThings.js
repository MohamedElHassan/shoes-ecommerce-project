import React, { useState } from 'react';
import './LearnThings.scss';
const LearnThings = () => {
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');
  const [test3, setTest3] = useState('');

  const getProducts = async () => {
    const url = 'https://dummyjson.com/products';
    const location = window.location.hostname;
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    try {
      const fetchResponse = await fetch(url);
      const data = await fetchResponse.json();
      // return data;
      console.log(data);
    } catch (error) {
      // return error;
      console.log(error);
    }
  };
  getProducts();

  function testPromise(ss) {
    return new Promise((resolve, reject) => {
      if (ss === 'Yes') {
        resolve(`It's Yes`);
      } else if (ss === 'Maybe') {
        resolve(`It's Maybe`);
      } else {
        reject({ no: 'Yes It;s no' });
      }
    });
  }
  // testPromise()
  //   .then((res) => console.log(res))
  //   .catch((error) => console.log(error));

  const url = 'https://dummyjson.com/products';
  const asyncTest = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    setTimeout(() => {
      a += 3;
      a -= 1;
      resolve('sdfsdf');
    }, 2000);
    if (a === 2) {
      resolve('Success');
    } else {
      reject('Falied');
    }
  });
  let p2 = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
    } else {
      reject('Falied');
    }
  });
  let p3 = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
      resolve('Success');
    } else {
      reject('Falied');
    }
  });
  // Promise.all([p, p2, p3]).then((messages) => console.log(messages));
  // Promise.race([p, p2, p3]).then((messages) => console.log(messages));

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/projectAPI/order.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: test1,
        email: test2,
        age: test3,
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
  };

  return (
    <>
      <div className="my-div">
        <h1>Hello This is Title</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={test1}
            onChange={(e) => setTest1(e.target.value)}
            type="text"
            placeholder="test1"
          />
          <input
            value={test2}
            onChange={(e) => setTest2(e.target.value)}
            type="text"
            placeholder="test2"
          />
          <input
            value={test3}
            onChange={(e) => setTest3(e.target.value)}
            type="text"
            placeholder="test3"
          />
          <button className="primary-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LearnThings;

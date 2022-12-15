import React from 'react';
import './LearnThings.scss';
const LearnThings = () => {
  console.log('Hello');
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'User 1',
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
    .then((data) => console.log(data));
  return <><div className="my-div"><h1>Hello This is Title</h1></div></>;
};

export default LearnThings;

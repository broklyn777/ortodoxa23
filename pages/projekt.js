/* eslint-disable prettier/prettier */
// import React from 'react';

// const ExampleComponent = () => {

//   function sayHello(name) {
//     alert(`Hejsan, ${name}`);
//   }

//   return (
//     <button className='bg-amber-600 p-2 rounded-full text-white' onClick={() => sayHello('Björn')}>Hälsa</button>
//   );
// }

import React, { useState } from 'react'
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Klickahär</button>
    </div>
  )
}

export default Example

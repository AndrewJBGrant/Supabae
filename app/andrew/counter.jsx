 "use client";

// import {useState} from 'react';


// export default function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = (func: () => void) => {
//     // 👇️ call the function the Child component passed
//     func();

//      alert("The function has been called!");

//     setCount(count => count + 1);
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//        <Button handleClick={handleClick} />
//     </div>
//   );
// }

import React, { createContext } from 'react';
import Button from './countBtn'; // Import the Button component
import ChildChange from './ChildChange';


const value = "I am happy"
export const Moodcontext = createContext("default value");

function Counter() {

  return (
  <Moodcontext.Provider value={value}>
<ChildChange />

  </Moodcontext.Provider>
  );
}

export default Counter;

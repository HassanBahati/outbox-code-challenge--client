import React, { useState } from "react";

function Factorial() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function factorial(n){
    //base case
    if(n === 0 || n === 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

  const handleClick = () =>{
     
    setCount(factorial)
    
  }

  return (
    <div>
      <p>You answer is {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Factorial;

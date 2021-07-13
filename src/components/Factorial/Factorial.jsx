import React, { useEffect, useState } from "react";

function Factorial() {
  // Declare a new state variable, which we'll call "count"
  const [challenge, setChallenge] = useState(0);
  const [result, setResult] = useState(challenge);

  function factorial(challenge) {
    //base case
    if (challenge === 0 || challenge === 1) {
      return 1;
      //recursive case
    } else {
      return challenge * factorial(challenge - 1);
    }
  }

  useEffect(() => {}, []);

  const handleClick = () => {
    setResult(factorial);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>
        {challenge}! = {result === challenge ? 'enter a number then hit the calculate button' : result }
      </p>
    </div>
  );
}

export default Factorial;

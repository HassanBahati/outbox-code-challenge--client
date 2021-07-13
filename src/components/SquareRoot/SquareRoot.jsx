import React, { useEffect, useState } from "react";

// import axios from "axios";

function SquareRoot() {
  const [challenge, setChallenge] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const squareroot = () => {
      Math.sqrt(challenge)
    };
    setResult(squareroot);
  }, [challenge]);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log({
        challenge: challenge,
        result: result,
      });
      // axios.post('https://codechallengeserver.herokuapp.com/api/v1/numbers', data)
      //     .then(response => {
      //         console.log(response)
      //     })
      //     .catch(error => {
      //         console.log(error);
      //     })
    } catch (error) {
      console.log(error);
    }
    setChallenge("");
  }
  return (
    <div>
      <div>
        <h1>Square root</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="challenge"
          type="number"
          placeholder="Enter number here"
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
        />
        {!challenge ? "" : <button type="submit">Clear</button>}
      </form>
      <div>
        {!challenge ? (
          ""
        ) : (
          <div>
            Computation : Square Root of {challenge} <br />
            Result = {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default SquareRoot;

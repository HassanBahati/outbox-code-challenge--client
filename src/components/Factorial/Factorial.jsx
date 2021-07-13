import React, { useEffect, useState } from "react";

function Factorial() {
  const [challenge, setChallenge] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const factorial = (challenge) => {
      if (challenge === 0 || challenge === 1) {
        return 1;
      } else {
        let factorialResult = 1;

        for (var i = challenge; i >= 1; i--) {
          factorialResult = factorialResult * i;
        }
        return factorialResult;
      }
    };
    setResult(factorial(challenge));
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
        <h1>Factorial</h1>
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
            Computation = {challenge}! <br />
            Result = {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default Factorial;


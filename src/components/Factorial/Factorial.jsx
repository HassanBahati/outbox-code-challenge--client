import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();


    const data = {
      type: 'factorial',
      challenge: challenge,
      result: result
    }

    try {
       await axios.post("/api/v1/calc", data);

       console.log(data)
       
    } catch (error) {
      console.log(error);
    }

    setChallenge("");
  };

  return (
    <div>
      <div>
        <h1>Factorial</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input

            name="challenge"
            type="number"
            class="form-control col-lg-5"
            placeholder="Enter number here"
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
          />
        </div>
        
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

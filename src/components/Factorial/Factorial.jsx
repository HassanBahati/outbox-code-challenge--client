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

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.post("/api/v1/calc", config, {
        challenge,
        result,
      });

      console.log(data);
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

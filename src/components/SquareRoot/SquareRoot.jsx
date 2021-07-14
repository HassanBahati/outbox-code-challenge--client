import axios from "axios";
import React, { useEffect, useState } from "react";

// import axios from "axios";

function SquareRoot() {
  const [challenge, setChallenge] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const squareroot = () => {
      Math.sqrt(challenge);
    };
    setResult(squareroot);
  }, [challenge]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      type: "squareRoot",
      challenge: challenge,
      result: result,
    };

    try {
      await axios.post("/api/v1/calc", data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setChallenge("");
  };
  return (
    <div>
      <div>
        <h1 className='text-center'>Square Root</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input

            name="challenge"
            type="number"
            class="form-control"
            placeholder="Enter number here"
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
          />
        </div>
        
        {!challenge ? "" : <button className='btn btn-danger m-4' type="submit">Clear</button>}
      </form>
      <div>
        {!challenge ? (
          ""
        ) : (
          <div>
            Computation: Square root of {challenge}! <br />
            Result = {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default SquareRoot;

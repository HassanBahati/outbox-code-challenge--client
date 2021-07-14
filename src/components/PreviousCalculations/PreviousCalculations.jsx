import { useState, useEffect, Fragment } from "react";
import axios from "axios";


const PreviousCalculations = () => {
  const [calculations, setCalculations] = useState("");

  //get data from api
  const getCalculations = () => {
    axios
      .get("/api/v1/calc")
      .then((response) => {
        const allCalculations = response.data;
        console.log(allCalculations);

        ///addd data to state
        setCalculations(allCalculations);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    getCalculations();
  }, []);

  return (
    <Fragment>
      {calculations.length < 1 ? (
        <div>
          <span
            className={{
              display: "flex",
              justifyContent: "center",
              placeItems: "center",
            }}
          >
            You don't have any calculations yet, try out factorials and square roots <span className='text-success'>Its Amazing</span>!!!
          </span>
        </div>
      ) : (
        <Fragment>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <table class="styled-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Challenge</th>
                  <th>Result</th>
                  <th>Calc Id </th>
                  
                
                </tr>
              </thead>

              {calculations.map((calc) => {
                return (
                  <Fragment key={calc._id}>
                    <tbody>
                      <tr>
                        <td>{calc.type}</td>
                        <td>{calc.challenge}</td>
                        <td>{calc.result}</td>
                        <td>{calc._id}</td>
                      
                      
                       
                      </tr>
                    </tbody>
                  </Fragment>
                );
              })}
            </table>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PreviousCalculations;

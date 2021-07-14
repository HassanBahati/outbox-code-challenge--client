import React, { Fragment } from "react";
import Factorial from "../../components/Factorial/Factorial";
import SquareRoot from "../../components/SquareRoot/SquareRoot";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./Home.css";
function Home() {
  return (
    <Fragment>
      <NavigationBar />
      <div class="home">
        <div class="container">
          <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Factorials
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="tab-register"
                data-mdb-toggle="pill"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >
                Square Roots
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <Factorial />
            </div>
            <div
              class="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="tab-register"
            >
              <SquareRoot />
            </div>
          </div>
          

          
          
        </div>
      </div>
    </Fragment>
  );
}

export default Home;

import React from "react";
import { useHistory } from "react-router-dom";
import CalculationsModal from "../Modal/CalculationsModal";
function NavigationBar() {
    let history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">
            Compute Wizard
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <div class="d-flex">
          <CalculationsModal/>
            
            <button
              class="btn btn-outline-dark"
              type="button"
              data-mdb-ripple-color="dark"
              onClick={logoutHandler}
            >
             Logout
            </button>

         
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

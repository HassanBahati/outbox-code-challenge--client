import React from 'react'
import Factorial from '../../components/Factorial/Factorial'
import SquareRoot from '../../components/SquareRoot/SquareRoot'

function Home() {
    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        // history.push("/login");
      };
    return (
        <div>
            we are home    <button onClick={logoutHandler}>Logout</button>
            <Factorial/>
          
            <SquareRoot/>
            
        </div>
    )
}

export default Home

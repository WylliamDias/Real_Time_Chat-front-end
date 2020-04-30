import React from 'react';
// import axios from 'axios';

import '../Login/styles.css';

function Login() {
  return (
    <main id="loginMain">
      <div id="login-box">
        <h1 className="h1Login">LOGIN</h1>
        <form id="formLogin">
          <div className="input-div">
            <p id="inputTextLogin">Username</p>
            <input type="text" id="inputLogin" />
          </div>
          <div className="input-div">
            <p id="inputTextLogin">Password</p>
            <input type="text" id="inputLogin" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;

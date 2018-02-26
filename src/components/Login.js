import React from 'react';

const Login = () => (
  <div className = 'google_sign_in'>
    <div className = 'header'>
      <h1>Login</h1>
    </div>
    <div className = 'button'>
      <a href = "/auth/google"> 
        <img src = "./images/btn_google_light_normal_ios.svg" /> Sign In with Google
      </a>
    </div>
  </div>
);

export default Login;
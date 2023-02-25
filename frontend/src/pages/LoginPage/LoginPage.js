import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="my-flex-container">
      <form id="login-page" className="form" onSubmit={handleSubmit}>
      <div class="form-floating">
        <input type="text" class="form-control" value={formData.username} onChange={handleInputChange} name="username" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" value={formData.password} onChange={handleInputChange} name="password" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Password</label>
      </div>

        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/register">Click to register!</Link>
        
      </form>
      <div id="login-button-div" className="center-child">
        <button onClick={handleSubmit} className="myButton">Login!</button>
      </div>
    </div>
  );
};

export default LoginPage;

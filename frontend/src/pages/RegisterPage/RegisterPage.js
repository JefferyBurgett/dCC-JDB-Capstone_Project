import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./RegisterPage.css";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div id="reigster-page" className="container my-flex-container">
      <form id="register-form" className="form" onSubmit={handleSubmit}>
      <div class="form-floating">
        <input type="text" class="form-control" value={formData.username} onChange={handleInputChange} name="username" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" value={formData.email} onChange={handleInputChange} name="email" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" value={formData.firstName} onChange={handleInputChange} name="firstName" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">First Name</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" value={formData.lastName} onChange={handleInputChange} name="lastName" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Last Name</label>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" value={formData.password} onChange={handleInputChange} name="password" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Password</label>
      </div>

        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        
      </form>
      <div id="register-button-div" className="center-child">
        <button onClick={handleSubmit} className="myButton">Register!</button>
      </div>
    </div>
  );
};

export default RegisterPage;

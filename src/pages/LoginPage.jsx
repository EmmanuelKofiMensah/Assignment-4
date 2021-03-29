import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div class="container">
      <div class="school">
        <h1>CAPE COAST TECHNICAL UNIVERSITY</h1>
        <span>
          {" "}
          <h2> DEPARTMENT OF RENEWABLE ENERGY</h2>{" "}
        </span>{" "}
        <h1>
          Platform for online examinations <br />
        </h1>
      </div>
      <form action="">
        <div class="login">
          <h1>Login Page</h1>
          <p class="loginp"> Please login with your user credentials</p>
          <Input
            class="input1"
            type="text"
            placeholder="enter your username or Id number"
          />{" "}
          <br />
          <Input
            class="passwordinput"
            type="password"
            placeholder="enter your password"
          />{" "}
          <br />
          <NavLink to="/dashboard">
            <Button class="loginbutton" text="Login" />
          </NavLink>
          <br />
          <NavLink to="/resetpassword">
            <Button text="Forgotten Password?" />
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

import React, { Component } from "react";

export class LoginForm extends Component {
  render() {
    return (
      <form style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "250px",
            borderWidth: "5px",
            borderRadius: "10px",
            borderColor: "tomato",
            boxShadow: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "6px 0px",
            }}
          >
            <label htmlFor="email" style={{ color: "#D0D3D4" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
              style={{ borderWidth: 0, padding: 0, paddingTop: "5px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "6px 0px",
            }}
          >
            <label htmlFor="password" style={{ color: "#D0D3D4" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              style={{ borderWidth: 0, padding: 0, paddingTop: "5px" }}
            />
          </div>
        </div>
        <p style={{ fontSize: "9px", alignSelf: "flex-end" }}>
          Forgot Password?
        </p>
        <button type="submit" style={{ alignSelf: "center" }}>
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;

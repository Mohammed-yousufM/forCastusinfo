import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../stylesFirstPage";
import i1 from "../photos/loginPic.PNG";
import i2 from "../photos/logo.PNG";
import "../App.css";

export class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };
  }

  authFunc = () => {
    if (this.state.email === "admin@mail.com" && this.state.pass === "admin") {
      this.props.history.push("/loggedin");
    } else {
      alert("Please enter valid mail and password");
    }
  };

  render() {
    return (
      <div style={styles.one}>
        <img src={i1} alt="Pic on side" style={styles.two} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={i2} alt="Logo" style={{ paddingBottom: "20px" }} />
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div style={styles.three}>
              <div style={styles.four}>
                <label htmlFor="email" style={{ color: "#D0D3D4" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                  style={{ borderWidth: 0, padding: 0, paddingTop: "5px" }}
                />
              </div>
              <div style={styles.four}>
                <label htmlFor="password" style={{ color: "#D0D3D4" }}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  onChange={(e) => this.setState({ pass: e.target.value })}
                  value={this.state.pass}
                  style={{ borderWidth: 0, padding: 0, paddingTop: "5px" }}
                />
              </div>
            </div>
            <Link
              to="/passwordreset"
              style={{ fontSize: "9px", alignSelf: "flex-end" }}
            >
              <p>Forgot Password?</p>
            </Link>
            <button
              type="submit"
              style={{
                alignSelf: "center",
                height: "30px",
                width: "100px",
                borderRadius: "20px",
                marginRight: "10px",
                backgroundColor: "deepskyblue",
                borderColor: "deepskyblue",
                color: "white",
              }}
              onClick={this.authFunc}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FirstPage;

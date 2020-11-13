import React, { Component } from "react";
import styles from "../stylesSecondPage";
import i1 from "../photos/sup1.jpg";
import i2 from "../photos/download.png";

import { Link } from "react-router-dom";

export class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.infoWeek = [
      {
        id: 1,
        day: "Saturday",
        date: "29/06",
        reg_hours: "08",
        ot_hours: "00",
        description: " ",
        tot_hours: "11",
      },
      {
        id: 2,
        day: "Sunday",
        date: "29/06",
        reg_hours: "08",
        ot_hours: "00",
        description: " ",
        tot_hours: "11",
      },
      {
        id: 3,
        day: "Monday",
        date: "29/06",
        reg_hours: "08",
        ot_hours: "00",
        description: " ",
        tot_hours: "10",
      },
      {
        id: 4,
        day: "Tuesday",
        date: "29/06",
        reg_hours: "08",
        ot_hours: "00",
        description: " ",
        tot_hours: "14",
      },
      {
        id: 5,
        day: "Wednessday",
        date: "29/06",
        reg_hours: "08",
        ot_hours: "00",
        description: " ",
        tot_hours: "08",
      },
      {
        id: 6,
        day: "Thursday",
        date: "29/06",
        reg_hours: "08",
        ot_hours: "00",
        description: " ",
        tot_hours: "11",
      },
      {
        id: 7,
        day: "Friday",
        date: "29/06",
        reg_hours: "08",
        ot_hours: "00",
        description: " ",
        tot_hours: "12",
      },
    ];
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={styles.one}>
          <div>Approver - Sidhardh</div>
          <div style={{ display: "flex" }}>
            <p style={{ paddingRight: "10px" }}>My Account</p>
            <Link to="/">
              <p>Logout</p>
            </Link>
          </div>
        </div>
        <div className="ui raised segment" style={{ margin: "18px 38px 10px" }}>
          <div className="ui segment" style={styles.two}>
            <i className="user icon" style={styles.three}></i>
            <div style={{ padding: "0px 10px 0px" }}>
              Review Timesheet - 08/02/20 to 08/09/20
            </div>
            <i className="close icon" style={styles.four} />
          </div>
          <div style={styles.five}>
            <div className="ui segment" style={styles.six}>
              <div style={styles.seven}>
                <img src={i1} alt="prof pic" style={styles.eight} />
                <div>Ravi Kolla</div>
              </div>
            </div>
            <div
              className="ui segment"
              style={{ margin: "0px", flexGrow: 0.7, height: "110px" }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span style={{ width: "30%" }}>Vendor Name: TCS</span>
                <span style={{ width: "30%" }}>Status: Open</span>
                <span style={{ width: "30%" }}>Submitted Date: 21-02-2020</span>
              </div>
              <div style={styles.nine}>
                <span style={{ width: "30%" }}>Regular Hours: 40</span>
                <span style={{ width: "30%" }}>OT Hours: 00</span>
                <span style={{ width: "30%" }}>Total Hours: 42</span>
              </div>
              <div style={styles.ten}>
                <span style={{ width: "20%" }}>Remarks: --</span>
              </div>
            </div>
          </div>
          <div className="ui segment" style={styles.eleven}>
            <span>Day</span>
            <span>Regular Hours</span>
            <span>OT Hours</span>
            <span>Description</span>
            <span>Total Hours</span>
          </div>
          {this.infoWeek.map((val) => {
            return (
              <div className="ui segment" key={val.id} style={styles.twelve}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>{val.day}</span>
                  <span>{val.date}</span>
                </div>
                <div style={styles.thirt}>
                  <span style={styles.fourt}>{val.reg_hours}</span>
                </div>
                <div style={styles.fift}>
                  <span style={styles.sixt}>{val.ot_hours}</span>
                </div>
                <span style={{ borderWidth: "1px", borderStyle: "solid" }}>
                  {val.description}
                </span>
                <div style={styles.sevent}>
                  <span style={{ textAlign: "center" }}>{val.tot_hours}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div style={styles.eighti}>
          <i
            className="file icon"
            style={{
              height: "25px",
            }}
          ></i>
          <p style={styles.nineti}>Attachments</p>
        </div>
        <div style={{ margin: "18px 38px 10px" }}>
          <div
            className="ui segment"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <img
              src={i2}
              alt="attachment"
              style={{ borderWidth: "1px", borderStyle: "solid" }}
            />
            <img
              src={i2}
              alt="attachment"
              style={{ borderWidth: "1px", borderStyle: "solid" }}
            />
            <img
              src={i2}
              alt="attachment"
              style={{ borderWidth: "1px", borderStyle: "solid" }}
            />
          </div>
          <div>
            <label>Add Comments</label>
            <br />
            <textarea
              name="Comments"
              style={{ width: "420px", height: "120px", borderRadius: "20px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                margin: "10px",
              }}
            >
              <button
                style={{
                  height: "30px",
                  width: "100px",
                  borderRadius: "20px",
                  marginRight: "10px",
                  backgroundColor: "red",
                  color: "white",
                  borderColor: "red",
                }}
              >
                Reject
              </button>
              <button
                style={{
                  height: "30px",
                  width: "100px",
                  borderRadius: "20px",
                  marginRight: "10px",
                  backgroundColor: "green",
                  color: "white",
                  borderColor: "green",
                }}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;

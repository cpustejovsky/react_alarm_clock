import React, { Component } from "react";
import "./App.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Hour from "./components/Hour.jsx";
import Minute from "./components/Minute.jsx";
import Meridiem from "./components/Meridiem.jsx";
class App extends Component {
  state = {
    hour: 5,
    minute: 0,
    meridiem: "AM",
    weekdayAlarm: {
      hour: 5,
      minute: 0,
      meridiem: "AM"
    }
  };
  formatMinutes(minute) {
    if (minute < 10) {
      return `0${minute}`;
    }
    return minute;
  }
  handleMinuteIncrement = () => {
    let minute = this.state.minute;
    if (minute < 55) {
      minute += 5;
      this.setState({ minute });
    } else {
      minute = 5;
      this.setState({ minute });
    }
  };

  handleMinuteDecrement = () => {
    let minute = this.state.minute;
    if (minute > 0) {
      minute -= 5;
      this.setState({ minute });
    } else {
      minute = 55;
      this.setState({ minute });
    }
  };

  handleHourIncrement = () => {
    let hour = this.state.hour;
    if (hour < 12) {
      hour += 1;
      this.setState({ hour });
    } else {
      hour = 1;
      this.setState({ hour });
    }
  };

  handleHourDecrement = () => {
    let hour = this.state.hour;
    if (hour > 1) {
      hour -= 1;
      this.setState({ hour });
    } else {
      hour = 12;
      this.setState({ hour });
    }
  };

  handleMeridiemToggle = () => {
    let meridiem = this.state.meridiem;
    if (meridiem === "AM") {
      meridiem = "PM";
      this.setState({ meridiem });
      return;
    }
    if (meridiem === "PM") {
      meridiem = "AM";
      this.setState({ meridiem });
      return;
    }
  };

  runAlarm = /*async*/ () => {
    console.log(
      `${this.state.hour}:${this.formatMinutes(this.state.minute)} ${
        this.state.meridiem
      }`
    );
    // try {
    //   let response = await axios.post("http://localhost:3002/alarm", {
    //     hour: this.state.hour,
    //     minute: this.state.minute,
    //     meridiem: this.state.meridiem
    //   });
    //   console.log("here is the response!");
    //   console.log(response);
    // } catch (error) {
    //   console.log("oops!");
    //   console.log(error);
    // }
  };

  runWeekdayAlarm = /*async*/ () => {
    console.log(
      `${this.state.weekdayAlarm.hour}:${this.formatMinutes(
        this.state.weekdayAlarm.minute
      )} ${this.state.weekdayAlarm.meridiem}`
    );
    // await axios.post("http://localhost:3002/alarm-weekday");
  };

  setWeekdayAlarm = () => {
    let newWeekDayAlarm = {
      hour: this.state.hour,
      minute: this.state.minute,
      meridiem: this.state.meridiem
    };
    this.setState({ weekdayAlarm: newWeekDayAlarm });
  };
  render() {
    return (
      <Container className="pi-screen">
        <Row>
          <Col xs={4}>
            <Button
              size="lg"
              variant="outline-success"
              onClick={() => this.runAlarm()}
            >
              Wake at {this.state.hour}:{this.formatMinutes(this.state.minute)}{" "}
              {this.state.meridiem}
            </Button>
          </Col>
          <Col xs={8}>
            <h3>React-Node Alarm Clock</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Hour
              hour={this.state.hour}
              onIncrement={this.handleHourIncrement}
              onDecrement={this.handleHourDecrement}
            />
          </Col>
          <Col xs={4}>
            <Minute
              minute={this.state.minute}
              onIncrement={this.handleMinuteIncrement}
              onDecrement={this.handleMinuteDecrement}
            />
          </Col>
          <Col xs={4}>
            <Meridiem
              meridiem={this.state.meridiem}
              onToggle={this.handleMeridiemToggle}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Button
              size="lg"
              variant="outline-success"
              onClick={() => this.runWeekdayAlarm()}
            >
              Weekday Alarm ({this.state.weekdayAlarm.hour}:
              {this.formatMinutes(this.state.weekdayAlarm.minute)}{" "}
              {this.state.weekdayAlarm.meridiem})
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              disabled
              size="lg"
              variant="outline-disabled"
              onClick={() => this.setWeekdayAlarm()}
            >
              Set Custom Weekday Alarm
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;

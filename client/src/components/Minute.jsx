import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";

class Minute extends Component {
  render() {
    let minute = this.props.minute;
    return (
      <Row>
        <Col xs={8}>
          <h1>{this.formatMinutes(minute)}</h1>
        </Col>
        <Col xs={4}>
          <Row>
            <Button
              className="time-button"
              size="lg"
              variant="success"
              onClick={() => this.props.onIncrement()}
            >
              +
            </Button>
          </Row>
          <Row>
            <Button
              className="time-button"
              size="lg"
              variant="warning"
              onClick={() => this.props.onDecrement()}
            >
              -
            </Button>
          </Row>
        </Col>
      </Row>
    );
  }
  formatMinutes(minute) {
    if (minute < 10) {
      return `0${minute}`;
    }
    return minute;
  }
}

export default Minute;

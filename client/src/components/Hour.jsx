import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";

export default class Hour extends Component {
  render() {
    let hour = this.props.hour;
    return (
      <Row>
        <Col xs={8}>
          <h1>{hour}</h1>
        </Col>
        <Col xs={4}>
          <Row>
            <Button
              className="time-button"
              size="lg"
              variant="success"
              onClick={() => this.props.onIncrement()}
            >
              <strong>+</strong>
            </Button>
          </Row>
          <Row>
            <Button
              className="time-button"
              size="lg"
              variant="warning"
              onClick={() => this.props.onDecrement()}
            >
              <strong>-</strong>
            </Button>
          </Row>
        </Col>
      </Row>
    );
  }
}

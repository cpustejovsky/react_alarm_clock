import React, { Component } from 'react'
import { Col, Row } from "react-bootstrap"

export default class Meridiem extends Component {
    render() {
        let meridiem = this.props.meridiem;
    
        return (
            <Row>
                <Col xs={8}><h1 onClick={() => this.props.onToggle()}>{meridiem}</h1></Col>
            </Row>
        )
    }


}

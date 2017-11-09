import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import FormSchema from "./FormSchema.json";
import './detail.css';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(formData) {
        this.props.onSubmit(formData);
    }

    render() {
        const log = (type) => console.log.bind(console, type); 
        return (
            <div>
                <h3>Client {this.props.currentClient.Naam}</h3>
                <button onClick={this.props.closeDetailClick}>Terug</button>
                <Form schema={FormSchema} onSubmit={this.onSubmit} onError={log("errors")} />
            </div>
        );
    }
}
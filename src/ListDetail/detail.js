import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import './detail.css';

export default class Detail extends Component {
    constructor(props) {
        super(props); 
    }     

    render() {
        const schema = {
            title: "Medicatie",
            type: "object",
            required: ["foto"],
            properties: {
                "foto": { "type": "string", "format": "data-url", "title": "Single Foto" }
            }
        };
        
        const log = (type) => console.log.bind(console, type);

        const onSubmit = ({formData}) => console.log({formData});

        return (
            <div>
                <h3>Client {this.props.currentClient.Naam}</h3>
                <button onClick={this.props.closeDetailClick}>Terug</button>
                <Form schema={schema}  onChange={log("changed")}  onSubmit={log("submitted")} onError={log("errors")} />
            </div>            
        );
    }
}
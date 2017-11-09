import React, { Component } from "react";
import { render } from "react-dom";
import './list.css';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClientClick(e.client);
    }

    render() {
        return (
            <div className='ClientenLijst'>
                {this.props.clienten.map((client) => {
                    return (
                        <h3 key={client.key} onClick={() => this.handleClick({ client })}>
                            {client.Naam}
                        </h3>
                    );
                })}
            </div>
        );
    }
}
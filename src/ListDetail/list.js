import React, { Component } from "react";
import { render } from "react-dom";
import './list.css';

export default class ClientList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClientClick(e.client);
    }

    render() {
        return (
            <div className = "ClientenLijstContainer">
                <div className="HuidigeDatum">
                    <h3>{this.props.datum}</h3>
                </div>
                <div className='ClientenLijst'>
                    {this.props.clienten.map((client) => {
                        return (
                            <div className="ClientenLijstItem" key={client.key} onClick={() => this.handleClick({ client })}>
                                <h3 className="ClientNaam">
                                {client.Naam}
                                </h3>
                                <h3 className="ZorgMomentTijd">
                                {client.Tijd}
                                </h3>
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </div>
                        
                        );
                    })}
                </div>
            </div>
        );
    }
}
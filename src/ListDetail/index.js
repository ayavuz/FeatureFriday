import React, { Component } from 'react';
import ClientList from './list';
import DetailContainer from './detailcontainer';
import Notificatie from './notificatie';
import './index.css';

export default class ListDetail extends Component {
    constructor(props) {
        super(props);
        this.handleListClick = this.handleListClick.bind(this);
        this.handleCloseDetailClick = this.handleCloseDetailClick.bind(this);

        this.state = { clienten: [], currentClient: {} };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({ clienten: nextProps.clienten });
        }
    }

    handleListClick(client) {
        this.setState({ currentClient: client });
    }

    handleCloseDetailClick() {
        this.setState({ currentClient: {} });
    }

    render() {
        const isDetail = this.state.currentClient.Naam !== undefined;
        return (
            <div id="App">
                <Notificatie start={Date.now()}/>
                {isDetail ? (
                    <DetailContainer currentClient={this.state.currentClient} closeDetailClick={this.handleCloseDetailClick} />
                ) : (
                    <ClientList clienten={this.state.clienten} onClientClick={this.handleListClick} />
                    )}
            </div>
        );
    }
}
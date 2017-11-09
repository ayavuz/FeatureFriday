import React, { Component } from 'react';
import List from './list';
import Detail from './detail';

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
                {isDetail ? (
                    <Detail currentClient={this.state.currentClient} closeDetailClick={this.handleCloseDetailClick} />
                ) : (
                    <List clienten={this.state.clienten} onClientClick={this.handleListClick} />
                )}
            </div>
        );
    }
}
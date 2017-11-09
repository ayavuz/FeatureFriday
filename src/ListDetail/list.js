import React, { Component } from "react";
import { render } from "react-dom";

class List extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            clienten: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                clienten: nextProps.clienten
            });
        }
    }

    handleClick(e) {
        this.props.onClientClick(e.client);
    }

    render() {
        return (
            <div className='ClientenLijst'>
                {this.state.clienten.map((client) => {
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

export default List;
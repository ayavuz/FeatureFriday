import React, { Component } from "react";
import { render } from "react-dom";
import 'whatwg-fetch'
import './notificatie.css';

export default class Notificatie extends Component {

    constructor(props) {
        super(props);     
        this.getNotification = this.getNotification.bind(this);
        this.emptyNotification = this.emptyNotification.bind(this);

        this.state = { elapsed: 0, notificatie: {}, hideNotification: false };   
    }    
        
    componentDidMount() { 
        this.timer = setInterval(this.getNotification, 3600);
    }
        
    componentWillUnmount() {  
        clearInterval(this.timer);
    }

    emptyNotification() {
        this.setState({ hideNotification: true} );
    }
        
    getNotification() {
        fetch('mockNotificatie.json', {cache: "no-cache"})
        .then(response => response.json())     
        .then(json => { 
            if (json !== this.state.notificatie) {
                this.setState({ notificatie: json })
            }
        })
        .catch(ex => { console.log('parsing failed', ex) });        
    }
        
    render() {
        if (this.state.notificatie.title !== undefined && !this.state.hideNotification ) {
            return <div onClick={this.emptyNotification}  ><div className="NotificatiePopup">{ this.state.notificatie.title }</div></div>;
        }     
        
        return null;
    }
}
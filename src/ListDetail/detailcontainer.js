import React, { Component } from 'react';
import Detail from './detail';
import 'whatwg-fetch'

export default class DetailContainer extends Component {   
  constructor(props) {
    super(props);     
    this.handleDetailSubmit = this.handleDetailSubmit.bind(this);
  }  

  handleDetailSubmit(e) {
    console.log('Detail Submitted: ', e);
    this.props.closeDetailClick();
  }

  detailOnSubmit(e) { 
      console.log("detailOnSubmit", e)  
      fetch("mockNotificatie.json", {
        method: "POST",
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
        body: e.formData
      })
      .then(response => response.json())            
      .then(json => { console.log('post succeeded', json) })
      .catch(ex => { console.log('post failed', ex) });     
  }

  render() {
    return <Detail {...this.props} onSubmit={this.handleDetailSubmit} />;
  }
} 
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
      //fetch(nextProps.slide.url)
      //.then(response => response.json())            
      //.then(json => { this.setState({ slide: json })})
      //.catch(ex => { console.log('parsing failed', nextProps.slide.url, ex) });     
  }

  render() {
    return <Detail {...this.props} onSubmit={this.handleDetailSubmit} />;
  }
} 
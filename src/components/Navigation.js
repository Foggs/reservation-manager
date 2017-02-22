import React, { Component } from 'react';
import Button from './Button'


class Navigation extends Component {

	constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  	console.log('Navigation');
  	this.props.handleClick('Home');
  }

  render() {
    return (
       
        <header className="navigation">
        	{this.props.label || 'btn'}
        	<Button handleClick={this.props.handleClick} label={'Home'}></Button> 
        </header>
        
    );
  }
}

export default Navigation;

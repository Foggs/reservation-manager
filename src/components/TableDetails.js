import React, { Component } from 'react';
import Button from './Button'

class TableDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "edit": false,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // http://codepen.io/jobs.json
    // console.log(this.props.data)
    
  }

  edit(e){
    this.setState({"edit":true});
  }

  cancel(e){
    this.setState({"edit":false});
  }

  render() {
    return (
    	<div>
        {this.props.data.map((result,index) => (
          <div key={result.id}> 
            <input type='text' ref='messageTextBox' value={result.name}
            disabled={!this.state.edit}/>
            <h3>Table: {result.table}</h3>
            <p>Name: {result.name}</p>
            <p># guests: {result.guests}</p>
            <p>phone: {result.phone}</p>
            <p>date: {result.date}</p>
            <p>time: {result.time}</p>
            <p>Confirmed: {result.confirmed ? 'Yes' : "No"}</p>
            <textarea>{result.notes}</textarea>
            <Button handleClick={this.edit.bind(this)} label={'Edit'}></Button>
            <Button handleClick={this.handleClick} label={'Cancel'}></Button>
            <hr/>
          </div>
        ))}
			</div>
    );
  }
}

TableDetails.defaultProps = {
  name: 'Stranger',
	table: 'XX',
	phone:'(212)555-5555',
	confirmed: 'confirmed',
	guests: 0,
};


export default TableDetails;


// "id": 1,
//   "name": "Louis",
//   "# guests": 23,
//   "time": "8:00 PM",
//   "confirmed": true,
//   "date": "8/18/2016",
//   "notes": "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci",
//   "email": "lcrawford0@cdbaby.com"
import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Button from './components/Button';
import ReservationList from './components/ReservationList';
import TimeLine from './components/TimeLine';
import FloorPlan from './components/FloorPlan';
import TableDetails from './components/TableDetails';
import MakeReservation from './components/MakeReservation';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "stateManager": ['List','Floor','Timeline'],
      "currentStaate": 'default',
      "times":[
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM",
        "8:00 PM",
        "8:30 PM",
        "9:00 PM",
        "9:30 PM",
        "10:00 PM"
      ],
      "data": []
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    var self = this;
    axios.get('/MOCK_DATA.json')
      .then(function (response) {
        // console.log(response.data);
        self.setState({
          data: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  update(obj) {
    let newdata = this.state.data.concat(obj);
    this.setState({data:newdata})
    console.log(newdata);
  }

  handleClick(e){
    var txt = e.target.textContent || e.target.innerText;
    console.log(txt);
  }

  render() {
        console.log('render');

    return (
      <div key='main' className="App">
        <div className="App-header">
          <h2>Welcome to the Hideaway Reservation Manager</h2>
        </div>

        <Navigation label={"Home"} handleClick={this.handleClick}/>

        <Button label={"Make Reservation"} handleClick={this.handleClick}/>
        <Button label={"Reservation List"} handleClick={this.handleClick}/>
        <Button label={"Floor Plan"} handleClick={this.handleClick}/>
        <Button label={"Timeline"} handleClick={this.handleClick}/>
        <MakeReservation times={this.state.times} update={this.update}/>
        <ReservationList data={this.state.data} times={this.state.times}/>
        <TimeLine data={this.state.data}/>
        <FloorPlan/>
        <TableDetails data={this.state.data}/>
      </div>
    );
  }
}

export default App;

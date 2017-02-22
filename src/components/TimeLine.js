import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    return (
      <div>
        <h3>Reservation Timeline</h3> 
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th># of Guests</th>
            <th>phone</th>
            <th>confirmed</th>
            <th>arrival time</th>
          </tr>
          {this.props.data.map((result,index) => (
            <tr key={result.id}>
              <td>{result.name}</td>
              <td>{result.guests}</td>
              <td>{result.phone}</td>
              <td>{result.confirmed ? 'Yes' : "No"}</td>
              <td>{result.time}</td>
            </tr>
          ))}
        </tbody>  
        </table>
      </div>
    );
  }
}

export default Timeline;

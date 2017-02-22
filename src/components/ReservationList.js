import React, { Component } from 'react';
import Button from './Button';


class ReservationList extends Component {
  render() {
                      var t=  this.props.times;

    return (
      <div>

        <h3>Reservations</h3>
        <p>Filter By Time</p>
        <select>
          {t.map((result) => (
              <option value={result}>{result}</option>
          ))}
        </select>       
        <table>
          <tbody>
          <tr>
            <th>Name</th>
            <th># of Guests</th>
            <th>phone</th>
            <th>confirmed</th>
            <th>arrival time</th>
              <th>change reservation</th>
            <th>cancel reservation</th>

            </tr>
            {this.props.data.map((result,index) => (
              <tr key={result.id}>
                <td>{result.name}</td>
                <td>{result.guests}</td>
                <td>{result.phone}</td>
                <td>{result.confirmed ? 'Yes' : "No"}</td>
                <td>{result.time}</td>
                <td><Button label={'change'}/></td>
                <td><Button label={'cancel'}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReservationList;

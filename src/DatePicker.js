import React, { Component } from 'react';
import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker'
 

class DatePicker extends Component {
  
  onChange(dateString, { dateMoment, timestamp }) {
    console.log(dateString,this);
    // this.props.onChange();
  }
 
  render() {
    return (       
      <DateField
      name="date"
        dateFormat="MM-DD-YYYY"
        forceValidDate={true}
        updateOnDateClick={true}
        collapseOnDateClick={true}
        expandOnFocus={false}
        defaultValue={new Date()}
        showClock={false}
        onChange={this.onChange}>
        <DatePicker
          navigation={true}
          locale="en"
          forceValidDate={true}
          highlightWeekends={true}
          highlightToday={true}
          weekNumbers={false}
          weekStartDay={0}
          footer={false}/>
      </DateField>
        
    );
  }
}


export default DatePicker;

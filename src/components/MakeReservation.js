import React, { Component } from 'react';
import TextBox from './TextBox';
import DatePicker from '../DatePicker';

class MakeReservation extends Component{
    constructor(props) {
      super(props);
      this.state = {
        form: {
          name:'',
          phone: '',
          guests: 0,
          time: '5pm',
          table: 32,
          date: 'enter date:',
          email: 'enter',
          notes: 'Notes: '
        },
      };
    }

    componentDidMount () {
        console.log('componentDidMount')

    }

    onChange(event) {
        this.state.form[event.target.name] = event.target.value;
        this.setState({form: this.state.form});
        console.log('Form change >> ' + this.state.form.name);

    }

    onSubmit(event) {
        event.preventDefault();
        console.log('Form submitted >> ' + this.states);
        this.props.update(this.state.form);
    }
    render() {
      let t=this.props.times;

     return (
        <div className="container">
        <form onSubmit={this.onSubmit.bind(this)} className="well form-horizontal" id="contact_form">
          <fieldset>
            <legend>Reservation<i className="glyphicon glyphicon-cutlery"></i></legend>
            <div className="form-group">
              <label className="col-md-4 control-label">Name</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input  value={this.state.form.name}
                    onChange={this.onChange.bind(this)} name="name" placeholder={this.props.form.name} className="form-control"  type="text"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Phone Number</label>
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                  <input value={this.state.form.phone}
                    onChange={this.onChange.bind(this)} name="phone" placeholder={this.props.form.phone} className="form-control" type="text"/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Date</label>
              <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
                      <input type="text" className="form-control" value={this.state.form.date}
                    onChange={this.onChange.bind(this)} name="date" placeholder={this.props.form.date}/>
                  </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Time</label>
                <div className="col-md-4 selectContainer">
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                <select value={this.state.form.time}
                    onChange={this.onChange.bind(this)} name="state" className="form-control selectpicker" >
                  <option value=" " >Please select your time</option>
                  {t.map((result,index) => (
                      <option key={index} value={result}>{result}</option>
                  ))}
                </select>
              </div>
            </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">E-Mail</label>
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
              <input value={this.state.form.email}
                    onChange={this.onChange.bind(this)} name="email" placeholder="E-Mail Address" className="form-control" type="text" placeholder={this.state.form.email}/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Notes:</label>
                <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                  <textarea value={this.state.form.email} onChange={this.onChange.bind(this)} name="notes" className="form-control" placeholder={this.state.form.notes}></textarea>
              </div>
              </div>
            </div>

            <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i></div>

            <div className="form-group">
              <label className="col-md-4 control-label"></label>
              <div className="col-md-4">
                <button type="submit" className="btn btn-warning" >Send <span className="glyphicon glyphicon-send"></span></button>
              </div>
            </div>
          </fieldset>
          </form>
        </div>
      );
    }
};
export default MakeReservation;

MakeReservation.defaultProps = {
  form: {
    name:'name',
    phone: 'phone',
    guests: 0,
    time: '5pm',
    table: 32,
    date: 'select date',
    email: 'enter',
    notes: 'Notes: '
  },
}



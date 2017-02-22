import React, { Component } from 'react';


class TextBox extends Component {
    render() {
        return (
            <input className='form-control' 
                name={this.props.name}
                type='text' 
                value={this.props.value}
                placeholder={this.props.palceholder}
                onChange={this.props.onChange}/>
        );
    }
};

export default TextBox;

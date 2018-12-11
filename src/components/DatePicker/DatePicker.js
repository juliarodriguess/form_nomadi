import React, { Component } from 'react'
// import moment from 'moment'
import DatePicker from 'react-datepicker'
import './DatePicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class MultipleDatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
        }
    }
     
    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }
    
    render() {
        return (
            <DatePicker 
            dateFormat="dd/MM/yyyy"
            selected={this.state.startDate} 
            onChange={this.handleChange}
            // isClearable={true}
            placeholderText="Clique para escolher datas"
            />
        )
    }
}

export default MultipleDatePicker

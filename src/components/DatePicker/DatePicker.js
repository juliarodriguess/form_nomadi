import React, { Component } from 'react'
// import moment from 'moment'
import DatePicker from 'react-datepicker'
import isAfter from 'date-fns/is_after';
import addMonths from "date-fns/add_months";
import './DatePicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

class MultipleDatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            endDate: null
        }
    }
     
    handleChange = ({startDate, endDate}) => {
        startDate = startDate || this.state.startDate;
        endDate = endDate || this.state.endDate;
    
        if (isAfter(startDate, endDate)) {
          endDate = startDate;
        }
    
        this.setState({ startDate, endDate });
    }

    handleChangeStart = startDate => this.handleChange({ startDate });

    handleChangeEnd = endDate => this.handleChange({ endDate });
    
    render() {
        return (
            <div>
                <DatePicker 
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.startDate}
                    selectsStart
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                    minDate={new Date()}
                    maxDate={addMonths(new Date(), 3)}
                    excludeDates={[new Date()]}
                    placeholderText="Clique para escolher datas"
                    />
                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    minDate={new Date()}
                    maxDate={addMonths(new Date(), 3)}
                    excludeDates={[new Date()]}
                    placeholderText="Clique para escolher datas"
                />
            </div>
        )
    }
}

export default MultipleDatePicker

import React, { Component } from 'react'
import {dataPortage} from '../../components/FormPortage/FormPortage'
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
    
    componentDidUpdate() {
        let startDateValue = document.querySelector("#startDate").value
        let endDateValue = document.querySelector("#endDate").value
        dataPortage.date.start = startDateValue
        dataPortage.date.end = endDateValue
        console.log("start", dataPortage.date.start, "end", dataPortage.date.end)
    }
    
    handleChangeStart = startDate => this.handleChange({ startDate });
    
    handleChangeEnd = endDate => this.handleChange({ endDate });
    
    
    render() {
        return (
            <div className="input-dates">
                <DatePicker
                    id="startDate"
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                    minDate={new Date()}
                    maxDate={addMonths(new Date(), 3)}
                    excludeDates={[new Date()]}
                    placeholderText="A partir de que dia você pode?"
                    />
                <DatePicker
                    id="endDate"
                    dateFormat="dd/MM/yyyy"
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    minDate={new Date()}
                    maxDate={addMonths(new Date(), 3)}
                    excludeDates={[new Date()]}
                    placeholderText="Até que dia rola?"
                />
            </div>
        )
    }
}

export default MultipleDatePicker

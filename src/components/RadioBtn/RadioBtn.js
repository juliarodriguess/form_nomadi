import React, { Component } from 'react'
import './RadioBtn.css'

class RadioBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: ''
        }
    }


    handleOptionChange = (changeEvent) => {
        this.props.onChange(changeEvent)
        this.setState({
          selectedOption: changeEvent.target.value
        }) 
      }



    render() {
        return (
            <div className="radio-btn">
                <label className="radio-btn" 
                htmlFor={this.props.htmlFor1}
                children={this.props.children}>
                <input type="radio" 
                id={this.props.id1} 
                name={this.props.name} 
                value={this.props.value1} 
                // checked={this.state.selectedOption === this.props.value} 
                // onChange={this.handleOptionChange} 
                />
                </label>
                <label className="radio-btn" 
                htmlFor={this.props.htmlFor2}
                children={this.props.children2}>
                <input type="radio" 
                id={this.props.id2} 
                value={this.props.value2} 
                // checked={this.state.selectedOption === this.props.value} 
                // onChange={this.handleOptionChange} 
                />
                </label>
            </div>
        )
    }
}

export default RadioBtn
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
                <input type="radio" 
                id={this.props.id} 
                name={this.props.name} 
                value={this.props.value} 
                checked={this.state.selectedOption === this.props.value} 
                onChange={this.handleOptionChange} 
                />
                <label class="radio-btn" htmlFor={this.props.htmlFor}>
                    {this.props.children} 
                </label>
            </div>
        )
    }
}

export default RadioBtn
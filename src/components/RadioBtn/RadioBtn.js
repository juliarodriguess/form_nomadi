import React, { Component } from 'react'
import './RadioBtn.css'

class RadioBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: '',
            showComplement: false,
            showComments: false
        }
    }


    handleOptionChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        })
      }

    selectedChange() {
        if (this.props.value === 'apartamento' && this.props.checked) {
            this.setState({ showComplement: true })
            this.setState({ showComments: false })
        } else if (this.props.value === 'casa' && this.props.checked) {
        this.setState({ showComments: true })
        this.setState({ showComplement: false })
    }
 }
      

    render() {
        return (
            <div class="radio-btn">
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
import React, { Component } from 'react'
import { items } from '../../data/items.js'
import './Checkbox.css'

class Checkbox extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="checkbox-selectItens">
                {items.map((item) => {
                    return (  
                        <div>
                            <input
                                type="checkbox"
                                name={item.name}
                                id={item._id}
                                value={item.name}
                                onChange={this.props.onChange}/>
                            <label 
                                htmlFor={item._id}>
                                    <img src={item.icon} alt={item.name}/>
                                    {item.name}
                            </label> 
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Checkbox
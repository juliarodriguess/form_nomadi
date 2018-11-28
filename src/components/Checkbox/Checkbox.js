import React, { Component } from 'react'
import { items } from '../../data/items.js'
import './Checkbox.css'

class Checkbox extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <section className="checkbox-selectItens">
                {items.map((item) => {
                    return (  
                        <div>
                            <input
                                type="checkbox"
                                name={item.name}
                                id={item.id}
                                value={item.name}/>
                            <label 
                                className="checkbox-selectItens"
                                htmlFor={item.id}>
                                    {item.name}
                            </label> 
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default Checkbox
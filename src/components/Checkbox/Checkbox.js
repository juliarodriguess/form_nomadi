import React from 'react'
import { items } from '../../data/items.js'
import './Checkbox.css'

function Checkbox (props) {
    return (
        <div className="checkbox-selectItens">
            {props.items.map((item) => {
                return (  
                    <div>
                        <input
                            type="checkbox"
                            name={item.name}
                            id={item._id}
                            value={item._id}
                            onClick={props.onClick}/>
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

export default Checkbox
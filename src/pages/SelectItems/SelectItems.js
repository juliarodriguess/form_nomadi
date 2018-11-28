import React, { Component } from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'
import './SelectItems.css'

class SelectItems extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <main className="select-items">
                <Checkbox/>
            </main>
        )
    }
}

export default SelectItems
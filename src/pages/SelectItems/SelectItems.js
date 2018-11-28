import React, { Component } from 'react'
import Search from '../../components/Search/Search'
import Checkbox from '../../components/Checkbox/Checkbox'
import { MdAddCircleOutline } from 'react-icons/md'
import './SelectItems.css'

class SelectItems extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <main>
                <section className="select-items">
                    <Search/>
                    <Checkbox/>
                    <MdAddCircleOutline />
                </section>
            </main>
        )
    }
}

export default SelectItems
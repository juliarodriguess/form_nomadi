import React, { Component } from 'react'
import Search from '../../components/Search/Search'
import Checkbox from '../../components/Checkbox/Checkbox'
import './SelectItems.css'

class SelectItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            textEmpty: true
        }
        this.titleList = React.createRef()
    }

    insertInList = (event) => {
        const titleList = document.getElementById("titleList")
        const node = document.createElement("LI")
        const itemList = document.createTextNode(event.target.value)
        node.appendChild(itemList)
        titleList.appendChild(node)
        this.setState({textEmpty: false})
    }

    render() {
        return (
            <main className="select-items">
                <h1>O que você quer transportar?</h1>
                <Search placeholder="Busque aqui o item que deseja transportar"/>
                <section className="list-items">
                    <h2 id="titleList">Sua lista de itens da mudança</h2>
                    <p>{this.state.textEmpty && "Você ainda não adicionou nada na sua lista"}</p>
                </section>
                <section className="choose-items">
                    <h3>ou escolha na nossa lista:</h3>
                    <div className="choose-items__labels">
                        <Checkbox
                            onChange={this.insertInList}/>
                    </div>
                </section>
            </main>
        )
    }
}

export default SelectItems
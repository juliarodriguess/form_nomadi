import React, { Component } from 'react'
import Search from '../../components/Search/Search'
import Checkbox from '../../components/Checkbox/Checkbox'
import SampleModal from '../../components/SampleModal/SampleModal'
import SampleBtn from '../../components/SampleBtn/SampleBtn'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import { items } from '../../data/items'
import './SelectItems.css'

class SelectItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            textEmpty: true,
            openModal: false,
            searchBox: false,
            items: items,
            nameOnSearch: ''
        }
        this.titleList = React.createRef()
    }

    filterItems = () => {
        let input = document.getElementById("input-search").value
        
        const filteredItems = items.filter((item) => {
            return item.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
        })
        if(filteredItems.length === 0) {
            this.setState({nameOnSearch: "Resultado não encontrado"})
        }
        this.setState({searchBox: true, items: filteredItems})
    }

    insertInList = () => {
        const titleList = document.getElementById("titleList")
        const node = document.createElement("LI")
        const contentNode = this.state.item.name
        const itemList = document.createTextNode(contentNode)
        node.appendChild(itemList)
        titleList.appendChild(node)
        this.setState({textEmpty: false})
        this.hideModal()
    }

    showModal = (event) => {
        const id = event.target.value;
        const item = items[id-1]
        this.setState({openModal: true, item})
    }

    hideModal = () => {
        this.setState({ openModal: !this.state.openModal })
    }

    render() {
        return (
            <main className="select-items">
                    <h1>O que você quer transportar?</h1>
                <section className="search-items">
                    <Search placeholder="Busque aqui o item que deseja transportar" onChange={this.filterItems} />
                    {this.state.searchBox && 
                    <p>{this.state.nameOnSearch}</p>}
                </section>
                <section className="choose-items">
                    <h3>ou escolha na nossa lista:</h3>
                    <div className="choose-items__labels">
                        <Checkbox
                            items={this.state.items}
                            onClick={this.showModal}/>
                            {this.state.openModal &&
                                <SampleModal
                                    onClickClose={this.hideModal} >
                                        <p>{this.state.item.name}</p>
                                        <SampleBtn onClick={this.insertInList}>
                                            Tudo certo
                                        </SampleBtn>
                                        <SampleBtn onClick={this.hideModal}>
                                            Cancelar
                                        </SampleBtn>
                                </SampleModal>
                            }
                    </div>
                </section>
                <section className="list-items">
                    <h2 id="titleList">Sua lista de itens da mudança</h2>
                    <p>{this.state.textEmpty && "Você ainda não adicionou nada na sua lista"}</p>
                </section>
                <div>
                    <ButtonNext url="/">Próximo</ButtonNext>
                </div>
            </main>
        )
    }
}

export default SelectItems
import React, { Component } from 'react'
import ListOfItems from '../ListOfItems/ListOfItems';
import { dataPortage } from '../FormPortage/FormPortage';
import { items } from '../../data/items'
import Search from '../../components/Search/Search'
import Checkbox from '../../components/Checkbox/Checkbox'
import SampleModal from '../../components/SampleModal/SampleModal'
import SampleBtn from '../../components/SampleBtn/SampleBtn'
import './SelectItems.css'

class SelectItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameOnSearch: '',
            searchBox: false,
            openModal: false,
            items: items,
            listEmpty: true,
            listOfItems: []
        }
        this.titleList = React.createRef()
    }

    filterItems = () => {
        let input = document.getElementById("input-search").value
        
        const filteredItems = items.filter((item) => {
            return item.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
        })
        if(filteredItems.length === 0) {
            this.setState({searchBox: true, nameOnSearch: "Resultado não encontrado", items: filteredItems})
        } else {
            this.setState({searchBox: false, nameOnSearch:'', items: filteredItems})
        }
    }

    insertInList = () => {
        const titleList = document.getElementById("titleList")
        const node = document.createElement("LI")
        const contentNode = this.state.item.name
        const itemList = document.createTextNode(contentNode)
        node.appendChild(itemList)
        titleList.appendChild(node)
        this.setState({listEmpty: false})
        this.state.listOfItems.push(this.state.item)
        dataPortage.listOfItems = this.state.listOfItems 
        this.hideModal()
    }

    showModal = (event) => {
        event.preventDefault()
        const id = event.target.value;
        const item = items[id-1]
        this.setState({openModal: true, item})
    }

    hideModal = () => {
        this.setState({ openModal: !this.state.openModal })
    }

    render() {
        return (
            <section className="select-items">
                    <h2>O que você quer levar?</h2>
                <fieldset className="search-items">
                    <Search placeholder="Filtrar" onChange={this.filterItems} />
                </fieldset>
                <fieldset className="choose-items">
                    <h3>ou escolha na nossa lista:</h3>
                        {this.state.searchBox && 
                        <p>{this.state.nameOnSearch}</p>}
                    <div className="choose-items__labels">
                        <Checkbox
                            items={this.state.items}
                            onClick={this.showModal}/>
                            {this.state.openModal &&
                                <SampleModal
                                    onClickClose={this.hideModal} >
                                        <p>{this.state.item.name}</p>
                                        <SampleBtn type="button" onClick={this.insertInList}>
                                            Tudo certo
                                        </SampleBtn>
                                        <SampleBtn onClick={this.hideModal}>
                                            Cancelar
                                        </SampleBtn>
                                </SampleModal>
                            }
                    </div>
                </fieldset>
                    <ListOfItems 
                        listEmpty={this.state.listEmpty} 
                        listOfItems={this.state.listOfItems}
                        item={this.state.item}
                    />
            </section>
        )
    }
}

export default SelectItems
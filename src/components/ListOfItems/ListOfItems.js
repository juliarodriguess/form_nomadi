import React, { Component } from 'react'

class ListOfItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            empty: true
        }
    }


    countItems = () => {
        if(this.props.listOfItems.length === 1) {
            return `Você tem ${this.props.listOfItems.length} item na sua lista`
        } else {
            return `Você tem ${this.props.listOfItems.length} itens na sua lista`

        }
    }

    render() {
        return(
            <div className="list-items">
                <h3 id="titleList">Sua checklist da mudança</h3>
                {this.props.listEmpty ?(
                        <p>Você ainda não adicionou nada na sua lista</p>
                    ) : (
                        <div className="count-items">
                            {this.countItems()}
                        </div>
                    )}
            </div>
        )
    }
}

export default ListOfItems
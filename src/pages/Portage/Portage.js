import React, {Component} from 'react'
import { dataPortage } from '../../components/FormPortage/FormPortage';
import portageService from '../../services/portage'
import Order from '../../components/Order/Order'
import SelectItems from '../../components/SelectItems/SelectItems'
import SampleBtn from '../../components/SampleBtn/SampleBtn'
import './Portage.css'

class Portage extends Component {
    constructor(props){
        super(props)
        this.state = {
            order: true,
            selectItems: false
        }
    }

    handleChangeFieldset = (e) => {
        e.preventDefault()
        this.setState({
            order: false,
            selectItems: true
        })
        console.log(dataPortage)
    }

    sendData = (e) => {
        e.preventDefault()
        portageService.newPortage(dataPortage)
    }

    render() {
        return (
            <form onSubmit={this.sendData}>
                {this.state.order &&
                <div className="order-component">
                    <Order/>
                    <div className="change-section__btn">
                        <SampleBtn onClick={this.handleChangeFieldset}>Seguir</SampleBtn>
                    </div>
                </div>
                }
                {this.state.selectItems &&
                <div className="select-items-component">
                    <SelectItems />
                    <div className="send-form__btn">
                        <SampleBtn type="submit">Tudo certo?</SampleBtn>
                    </div>
                </div>
                }
            </form>
        )
    }
}

export default Portage
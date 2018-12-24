import React, {Component} from 'react'
import { dataPortage } from '../../components/FormPortage/FormPortage';
import portageService from '../../services/portage'
import Contact from '../../components/Contact/Contact'
import Order from '../../components/Order/Order'
import SelectItems from '../../components/SelectItems/SelectItems'
import SampleBtn from '../../components/SampleBtn/SampleBtn'
import './Portage.css'

class Portage extends Component {
    constructor(props){
        super(props)
        this.state = {
            contact: true,
            order: false,
            selectItems: false
        }
    }

    handleChangeFieldsetOrder = (e) => {
        e.preventDefault()
        this.setState({
            contact: false,
            order: true,
            selectItems: false
        })
        console.log(dataPortage)
    }

    handleChangeFieldsetSelectItems = (e) => {
        e.preventDefault()
        this.setState({
            contact: false,
            order: false,
            selectItems: true
        })
        console.log(dataPortage)
    }

    sendData = (e) => {
        e.preventDefault()
        portageService.portageReturn(dataPortage)
        window.open('/checkout', '_self')
        console.log('chamou')
    }

    render() {
        return (
            <form onSubmit={this.sendData}>
                {this.state.contact &&
                <div className="contact-component">
                    <Contact/>
                    <div className="change-section__btn">
                        <SampleBtn onClick={this.handleChangeFieldsetOrder}>Seguir</SampleBtn>
                    </div>
                </div>
                }
                {this.state.order &&
                <div className="order-component">
                    <Order/>
                    <div className="change-section__btn">
                        <SampleBtn onClick={this.handleChangeFieldsetSelectItems}>Seguir</SampleBtn>
                    </div>
                </div>
                }
                {this.state.selectItems &&
                <div className="select-items-component">
                    <SelectItems />
                    <div className="send-form__btn">
                        <SampleBtn type="submit" >Tudo certo?</SampleBtn>
                    </div>
                </div>
                }
            </form>
        )
    }
}

export default Portage
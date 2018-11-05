import React, { Component } from 'react'
import MultipleDatePicker from 'react-multiple-datepicker'
import Input from '../../components/Input/Input'
import Dropdown from '../../components/Dropdown/Dropdown'
import ButtonNext from '../../components/ButtonNext/ButtonNext'
import './PortageDate.css'

class PortageDate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:'default',
            showInput: false
        }
    }

    selectChange = (event) => {
        if(event.target.value === 'outro') {
            this.setState({showInput: true})
        } else {
            this.setState({showInput: false})
        }
    }

    render() {
        return (
            <section className="portage-date">
                <h2>Data e Hora</h2>
                <label htmlFor='datePicker'>Escolha as possíveis datas da sua mudança:</label>
                <MultipleDatePicker
                    id='datePicker' onSubmit={dates => console.log('selected date', dates)}
                />
                <Dropdown
                htmlFor='period'
                id='period'
                name='period'
                value1='default'
                option1='Escolha o período'
                value2='manha'
                option2='Manhã (de 09h - 12h)'
                value3='tarde'
                option3='Tarde (de 12h - 18h)'
                value4='outro'
                option4='Outro (definir)'
                selectChange={this.selectChange}>
                Tipo de imóvel:
                </Dropdown>
                {
                    this.state.showInput &&
                    <Input htmlFor='changeTime' id='changeTime' type='time' name='changeTime'>
                    Qual o horário que prefere?
                    </Input>
                }
            </section>
        )
    }
}

export default PortageDate
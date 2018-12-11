import React, { Component } from 'react'
import MultipleDatePicker from '../../components/DatePicker/DatePicker'
import Input from '../../components/Input/Input'
import './PortageDate.css'

class PortageDate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInput: false,
        }
    }

    selectedChange = (event) => {
        if(event.target.value === 'outro') {
            this.setState({showInput: true})
        } else if (event.target.value !== 'outro') {
            this.setState({showInput: false})

        }
    }

    render() {
        return (
            <section className="portage-date">
                <h2>Data e Hora</h2>
                <button className='datePicker'>Escolha as possíveis datas da sua mudança</button>
                <MultipleDatePicker/>
                <fieldset className="hourPeriod">
                    <legend>Escolha o período:</legend>
                    <input type="radio"
                        id="manha"
                        name="period"
                        value="manha"
                        onChange={this.selectedChange}
                    />
                    <label className="hourPeriod"
                        htmlFor="manha"
                        children="Manhã (de 09h - 12h)"/>

                    <input type="radio"
                        id="tarde"
                        name="period"
                        value="tarde"
                        onChange={this.selectedChange}
                    />

                    <label className="hourPeriod"
                        htmlFor="tarde"
                        children="Tarde (de 12h - 18h)"/>

                    <input type="radio"
                        id="dia"
                        name="period"
                        value="dia"
                        onChange={this.selectedChange}
                    />
                    <label className="hourPeriod"
                        htmlFor="dia"
                        children="Em horário comercial (de 9h - 18h)"/>    

                    <input type="radio"
                        id="outro"
                        name="period"
                        value="outro"
                        onChange={this.selectedChange}
                    />
                    <label className="hourPeriod"
                        htmlFor="outro"
                        children="Outro (definir)"/>
                </fieldset>
                <fieldset className="otherHourPeriod">
                    {
                        this.state.showInput &&
                        <Input />
                    }
                </fieldset>
            </section>
        )
    }
}

export default PortageDate
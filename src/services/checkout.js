import axios from 'axios'

let getDataPortage = (data) => {
    return axios({
        method:'get',
        url:'https://immense-dawn-93107.herokuapp.com/api/portage/'
    })
}

export default {getDataPortage}


import axios from 'axios'
import React from 'react'

let getDataPortage = (data) => {
    return axios({
        method:'get',
        url:'https://immense-dawn-93107.herokuapp.com/api/portage/5c126b74512c6f161f345b11'
    })
}

export default {getDataPortage}


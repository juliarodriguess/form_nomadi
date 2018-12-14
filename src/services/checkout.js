import axios from 'axios'
import React from 'react'

let getDataPortage = (data) => {
    return axios({
        method:'get',
        url:'http://localhost:4000/api/portage/5c126b74512c6f161f345b11'
    })
}

export default {getDataPortage}


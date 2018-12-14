import axios from 'axios'
import React from 'react'

let getDataPortage = (data) => {
    axios({
        method:'get',
        url:'http://localhost:4000/api/portage/5c126b74512c6f161f345b11'
    })
    .then((response) => {
        return(
           console.log(response)
        )
    })
}

export default {getDataPortage}


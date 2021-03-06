import axios from 'axios'

function getDistance(data){
    axios({
    method:'post',
    url:'https://immense-dawn-93107.herokuapp.com/api/dt',
    data:{
        origin: data.origin,
        destiny: data.destiny
        }
    })
    .then(function (response) {
        return response.data
    });
}

export default {getDistance}
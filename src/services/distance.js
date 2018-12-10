import axios from 'axios'

function getDistance(data){
    axios({
    method:'post',
    url:'http://localhost:4000/api/distance',
    data:{
        origin: data.origin,
        destiny: data.destiny
        }
    })
    .then(function (response) {
        console.log(response);
    });
}

export default {getDistance}
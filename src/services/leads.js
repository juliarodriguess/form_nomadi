import axios from 'axios'

function createLead(data){
    axios({
    method:'post',
    url:'https://immense-dawn-93107.herokuapp.com/api/leads',
    data: {
        name: data.nome,
        phone: data.telefone
        }
    })
    .then(function (response) {
        console.log(response);
    });
}

export default {createLead}
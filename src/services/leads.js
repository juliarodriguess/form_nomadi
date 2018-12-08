import axios from 'axios'

function createLead(data){
    axios({
    method:'post',
    url:'http://localhost:4000/api/leads',
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
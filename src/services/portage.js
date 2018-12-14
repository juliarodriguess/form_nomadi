import axios from 'axios'

function newPortage(dataPortage){
    axios({
    method:'post',
    url:'http://localhost:4000/api/portage',
    data: {
        origin: {    
            address: dataPortage.origin.address,
            propertyType: dataPortage.origin.propertyType,
            apartment: dataPortage.origin.apartment,
            hasLift: dataPortage.origin.hasLift,
            stage: dataPortage.origin.stage,
            comments: dataPortage.origin.comments 
        },
        destination:{
            address: dataPortage.destination.address,
            propertyType: dataPortage.destination.propertyType,
            apartment: dataPortage.destination.apartment,
            hasLift: dataPortage.destination.hasLift,
            stage: dataPortage.destination.stage,
            comments: dataPortage.destination.comments,
        },
        distance: ' ',
        date: {
            start: dataPortage.date.startDate,
            end: dataPortage.date.endDate
        },
        period: {
            hour: dataPortage.period.hour,
            comments: dataPortage.period.comments
        },
        listOfItems: dataPortage.listOfItems
        }
    })
    .then(function (response) {
        console.log(response);
    })
}
export default {newPortage}
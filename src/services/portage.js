import axios from 'axios'


export let portageReturn = function (dataPortage){
    axios({
    method:'post',
    url:'https://immense-dawn-93107.herokuapp.com/api/portage',
    data: {
        contact: {
            name: dataPortage.contact.name,
            phone: dataPortage.contact.phone,
            email: dataPortage.contact.email
        },
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
        distance: dataPortage.distance,
        date: {
            start: dataPortage.date.start,
            end: dataPortage.date.end
        },
        period: {
            hour: dataPortage.period.hour,
            comments: dataPortage.period.comments
        },
        listOfItems: dataPortage.listOfItems
        }
    })
}

export default {portageReturn}
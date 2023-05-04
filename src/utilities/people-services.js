import * as peopleAPI from "./people-api"

export async function getPeople(){
    try {
        const data = await peopleAPI.index()
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function createPerson(data){
    try {
        const peopleData = await peopleAPI.create(data)
        // console.log('inside getPeople')
        return peopleData
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function getPerson(id){
    try {
        const peopleData = await peopleAPI.detail(id)
        // console.log('inside getPeople')
        return peopleData
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}
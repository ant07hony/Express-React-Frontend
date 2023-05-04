import * as peopleAPI from "./people-api"

export async function getPeople(){
    try {
        const data = await peopleAPI.index()
        // console.log(data)
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
        const foundPerson = await peopleAPI.detail(id)
        // console.log('inside getPeople')
        return foundPerson
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function deletePerson(id){
    try {
        const deletedPerson = await peopleAPI.destroy(id)
        return deletedPerson
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}

export async function updatePerson(id, data){
    try {
        const updatedPerson = await peopleAPI.update(id, data)
        return updatedPerson
    }catch(err){
        console.log(err)
        throw new Error(err)
    }
}
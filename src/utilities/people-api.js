// Process to build an API
const BASE_URL = "http://localhost:4000/people"

export async function index(){
    try{
        const options = {
            method: "GET"
        }
        const response = await fetch(BASE_URL, options)
        // console.log(response)
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
    }catch(err){
        console.log(err)
        return err
    }
}

export async function create(data){
    try{
        const options = {
            method: "POST"
        }
        const response = await fetch(BASE_URL, options)
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
    }catch(err){
        console.log(err)
        return err
    }
}

export async function detail(id){
    try{
        const options = {
            method: "GET"
        }
        console.log(options)
        const response = await fetch(BASE_URL, options)
        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
    }catch(err){
        console.log(err)
        return err
    }
}


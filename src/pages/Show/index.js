import { useState,useEffect } from "react"
import { getPerson } from "../../utilities/people-services"
import { useParams } from "react-router"

export default function Show(props){
    const {id} = useParams()
    const [person, setPerson] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    async function handleRequest(){
        try{
            const personData = await getPerson(id)
            setPerson(personData)
        }catch(err){

        }
    }

    useEffect(()=>{
        handleRequest()
    }, [])

    return <h1>Show</h1>
  }
  
  
import { useState, useEffect } from "react"
import { getPerson, deletePerson } from "../../utilities/people-services"
import { useParams, useNavigate } from "react-router"

export default function Show(props) {
    const { id } = useParams()
    const [person, setPerson] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    async function handleRequest() {
        try {
            const personData = await getPerson(id)
            setPerson(personData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [])

    async function handleDelete() {
        try {
            const deletedResponse = await deletePerson(id)
            navigate('/')
        } catch (err) {
            console.log(err)
            navigate(`/people/${id}`)
        }
    }

    const loaded = () => (

        <div className="person">
            <h1>Show Page</h1>
            <h2>{person.name}</h2>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name + " image "} />
            <div>
                <button className="delete" onClick={handleDelete}>Delete Person</button>
            </div>
        </div>
    )

    const loading = () => {
        return <h1>Loading.......</h1>
    }

    return (
        <section>
            <div>{person ? loaded() : loading()}</div>
        </section>
    )


}




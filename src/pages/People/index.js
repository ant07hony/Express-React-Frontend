import { useState, useEffect } from "react"


const People = (props) => {

    const [people, setPeople] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const BASE_URL = "http://localhost:4000/people"

    const getPeople = async () => {
        try {
            const response = await fetch(BASE_URL)
            const peopleData = await response.json()
            // console.log(peopleData)
            setPeople(peopleData)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPeople()
    }, [])

    const loaded = ()=> {
        return people?.map((person,idx)=> {
            return (
                <div key={idx}>
                <h1>{person.name}</h1>
                <img className="profile-image" src={person.image}/>
                <h3>{person.title}</h3>
                </div>
            )
        })
    }

    const loading = ()=> {
        return (
            <section className="people-list">
            <h1>Loading...
                <span>
                    <img 
                    className="spinner"
                    src="https://freesvg.org/img/1544764567.png"
                    />{" "}
                </span>
            </h1>
            </section>
        )
    }

    return (
        <section className="people-list">
            {loading ? loaded() : loading()}
        </section>
    )
}

export default People
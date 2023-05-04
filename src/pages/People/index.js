import { useState, useEffect } from "react"
import { getPeople, createPerson, getPerson } from "../../utilities/people-services"
import { Link } from "react-router-dom"

const People = (props) => {

    const [people, setPeople] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [newForm, SetNewForm] = useState({
        name: "",
        image: "",
        title: ""
    })

   async function handleRequest(){
        try {
            const apiResponse = await getPeople()
            // console.log(peopleData)
            setPeople(apiResponse)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [isLoading])

    const loaded = () => {
        return people?.map((person, idx) => {
            return (
                <div key={idx} className="person-card">
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                    <img className="profile-image" src={person.image} />
                    <h3>{person.title}</h3>
                    </Link>
                </div>
            )
        })
    }

    const loading = () => (
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

    const handleChange = (e) => {
        SetNewForm({ ...newForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const BASE_URL = "http://localhost:4000/people"
        const postData = JSON.stringify(newForm)
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: postData
        }
        try {
            const response = await fetch(BASE_URL, options)

            if (response.ok) {
                setIsLoading(true)
                SetNewForm({
                    name: "",
                    image: "",
                    title: ""
                })
            } else {
                throw new Error(response.statusText)
            }
        } catch (err) {
            SetNewForm({
                name: "",
                image: "",
                title: ""
            })
        }
    }

        return (
            <section className="people-list">
                <form onSubmit={handleSubmit}>
                    {/* {name} */}
                    <input
                        onChange={handleChange}
                        name="name"
                        value={newForm.name} placeholder="Enter new person's  name" />
                    {/* {image} */}
                    <input
                        onChange={handleChange}
                        name="image"
                        value={newForm.image} placeholder="add a url profile picture" />
                    {/* {title} */}
                    <input
                        onChange={handleChange}
                        name="title"
                        value={newForm.title} placeholder="enter new person's title" />
                    <button>Create a new person</button>
                </form>
                {isLoading ? loading() : loaded()}
            </section>
        )
    }

    export default People
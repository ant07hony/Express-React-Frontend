import './Edit.css'
import { getPerson, updatePerson} from "../../utilities/people-services";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";



export default function Edit() {

    const { id } = useParams()
    const [person, setPerson] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [editForm, setEditForm] = useState({
        name: "",
        image: "",
        title: ""
    })

    // const handleRe

    const navigate = useNavigate()

    async function handleRequest() {
        try {
            const personToEdit = await getPerson(id)
            // console.log(peopleToEdit)
            setPerson(personToEdit)
            const { name, image, title } = personToEdit
            setEditForm({ name, image, title })
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            navigate(`/people/${id}`)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [isLoading])

    const handleChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value })
    }


    const loaded = () => (
        <section className="person">
            <h2>Edit Page for {person.name} </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Person" />
            </form>
        </section>
    )

        const handleSubmit = async (e) => {
            e.preventDefault()
            try{
                console.log(editForm)
                const updatedPerson = await updatePerson(id, editForm)

                if (updatedPerson._id){
                    navigate(`/people/${id}`)
                }else{
                    throw Error('Something went wrong')
                }
            }catch(err){
                console.log(err)
                navigate(`/people/${id}/edit`)
            }
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
    // async function handlePersonDelete(){
    //     try {
    //         const delResponse = await deletePerson(id)
    //         if(delResponse.ok){
    //             navigate('/')
    //         }else{
    //             throw new Error("Something went wrong")
    //         }
    //     }catch(err){
    //         console.log(err)
    //         navigate(`/people/${id}/edit`)
    //     }
    // }

    return (
        <section className="edit-container">
            {isLoading ? loading() : loaded()}
        </section>
    )
}
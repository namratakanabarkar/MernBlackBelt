import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useParams, Link } from 'react-router-dom'

const ViewPirate = () => {

    const {id} = useParams()
    const [pirate, setPirate] = useState()

    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(response => {
                setPirate(response.data)
            })
            .catch(err=>console.log(err))
    }, [refresh])

    const handleSubmit = (e) => {
        e.preventDefault() 
        const pegleg = !pirate.pegleg
        axios.patch(`http://localhost:8000/api/pirate/${id}`, {pegleg})
            .then(response=> {
                setRefresh(!refresh)
            })
            .catch(err=>console.log(err))
    }

    const handleSubmit2 = (e) => {
        e.preventDefault()
        const eyepatch= !pirate.eyepatch
        axios.patch(`http://localhost:8000/api/pirate/${id}`, {eyepatch})
            .then(response=> {
                setRefresh(!refresh)
            })
            .catch(err=>console.log(err))
    }

    const handleSubmit3 = (e) => {
        e.preventDefault()
        const hookhand = !pirate.hookhand
        axios.patch(`http://localhost:8000/api/pirate/${id}`, {hookhand})
            .then(response=> {
                setRefresh(!refresh)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            {
                pirate&&
                <div>
                    <h1 className='text-center'> {pirate.name} </h1>
                    <div>
                        <img src={`${pirate.image}`} alt='Pirate Image' width={200} height={100}></img>
                        <h5> {pirate.catchphrase} </h5>
                    </div>
                    <div>
                        <h4>About</h4>
                        <div>
                            <h6> Position: {pirate.position} </h6>
                            <h6> Treasures: {pirate.chests} </h6>
                            <form onSubmit={handleSubmit}>
                                <div className='d-flex'>
                                    <h6 className='my-2'> Peg Leg: {pirate.pegleg?"Yes":"No"} </h6>
                                    <button type="submit" className='btn btn-outline-warning mx-4'> {pirate.pegleg?"No":"Yes"} </button>
                                </div>
                            </form>
                            <form onSubmit={handleSubmit2}>
                                <div className='d-flex'>
                                    <h6 className='my-2'> Eye Patch: {pirate.eyepatch?"Yes":"No"} </h6>
                                    <button type="submit" className='btn btn-outline-warning mx-4' id="patch"> {pirate.eyepatch?"No":"Yes"} </button>
                                </div>
                            </form>
                            <form onSubmit={handleSubmit3}>
                                <div className='d-flex'>
                                    <h6 className='my-2'> Hook Hand: {pirate.hookhand?"Yes":"No"} </h6>
                                    <button type="submit" className='btn btn-outline-warning mx-4' id="hook"> {pirate.hookhand?"No":"Yes"} </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Link to="/pirates">Crew Board</Link>
                </div>
            }
        </div>
    )
    }

export default ViewPirate
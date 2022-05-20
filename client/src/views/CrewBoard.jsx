import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CrewBoard = () => {

    const [pirates, setPirates] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates`)
            .then(response=>setPirates(response.data))
            .catch(err=>console.log(err))
    }, [refresh])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/pirate/${deleteId}`)
            .then(response=> {
                setRefresh(!refresh)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className='m-5'>
            <div>
                <h2 className='text-center'>Pirate Crew</h2>
                <Link to="/pirate/new">Add Pirate</Link>
            </div>
            <div>
                {
                    pirates.map((pirate, i) => {
                        return(
                            <div key={i}>
                                <h4 className='mb-2'> {pirate.name} </h4>
                                <img src={`${pirate.image}`} alt='Pirate Image' width={200} height={100}  className='mb-4'></img>
                                <Link to={`/pirate/${pirate._id}`} className='mx-4 btn btn-outline-primary'>View Pirate</Link>
                                <button onClick={()=>handleDelete(pirate._id)} className="mx-4 btn btn-outline-danger">Walk the Plank</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
    }

export default CrewBoard
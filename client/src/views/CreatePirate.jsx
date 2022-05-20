import React, {useState} from 'react'
import axios from "axios"
import { Link, Navigate, useNavigate } from 'react-router-dom'

const CreatePirate = () => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [chests, setChests] = useState(0)
    const [catchphrase, setCatchphrase] = useState("")
    const [position, setPosition] = useState("")
    const [pegleg, setPegleg] = useState(true)
    const [eyepatch, setEyepatch] = useState(true)
    const [hookhand, setHookhand] = useState(true)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/pirate/new`, {name, image, chests, catchphrase, position, pegleg, eyepatch, hookhand})
        .then(response=>navigate(`/pirates`))
        .catch(err=> {
            const errArray = []
            const errorData = err.response.data.errors
            for(const key in errorData) {
                errArray.push(errorData[key]["message"])
            }
            setErrors(errArray)
        })
    }

    return (
        <div>
            <div>
                <h2 className='text-center'>Add Pirate</h2>
                <Link to="/pirates">Crew Board</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={name} 
                        onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <label>Image Url: </label>
                        <input type="url" name="image" value={image}
                        onChange={e=>setImage(e.target.value)}/>
                    </div>
                    <div>
                        <label># of Treasure Chests: </label>
                        <input type="number" name="chests" value={chests}
                        onChange={e=>setChests(e.target.value)} />
                    </div>
                    <div>
                        <label>Pirate Catch Phrase: </label>
                        <input type="text" name="phrase" value={catchphrase} 
                        onChange={e=>setCatchphrase(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Crew Position: </label>
                        <select name="position" value={position}
                            onChange={e=>setPosition(e.target.value)}>
                            <option hidden>Choose a Position</option>        
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Quarter Master">Quarter Master</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" name="pegleg" checked={pegleg} 
                            onChange={e=>setPegleg(e.target.checked)} />
                            <label>Peg leg</label>
                        </div>
                        <div>
                            <input type="checkbox" name="eyepatch" checked={eyepatch} 
                            onChange={e=>setEyepatch(e.target.checked)} />
                            <label>Eye Patch</label>
                        </div>
                        <div>
                            <input type="checkbox" name="hookhand" checked={hookhand} 
                            onChange={e=>setHookhand(e.target.checked)} />
                            <label>Hook Hand</label>
                        </div>
                    </div>
                    <button type="submit">Create Pirate</button>
                </div>
            </form>
            {
                errors.map((err, i)=> {
                    return(
                        <p key={i} style={{color: "red"}}> {err} </p>
                    )
                })
            }
        </div>
    )
}

export default CreatePirate
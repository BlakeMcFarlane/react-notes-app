import React, {useState, useEffect} from 'react'
// import notes from '../assets/Data'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = ({history}) => {
    const {id} = useParams();
    // const note = notes.find(note => note.id === Number(id))
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    },[id])

    let getNote = async () => {
        let response = await fetch(`http://localhost:8000/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async() => {
        await fetch(`http://localhost:8000/notes/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({...note, 'updated': new Date()})
        })
    }

    let handleSubmit = () => {
        updateNote()
        navigate('/')
    }

    let navigate = useNavigate()

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to='/'>
                        <ArrowLeft onClick={handleSubmit}/>
                    </Link>
                </h3>
            </div>
            <textarea onChange={(e)=> {setNote({...note, 'body':e.target.value})}} value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage;
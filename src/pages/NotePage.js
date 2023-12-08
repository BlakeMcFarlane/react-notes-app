import React, {useState, useEffect} from 'react'
// import notes from '../assets/Data'
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
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

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to='/'>
                        <ArrowLeft />
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage;
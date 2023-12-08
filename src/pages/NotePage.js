import React from 'react'
import notes from '../assets/Data'
import { useParams } from 'react-router-dom';


const NotePage = () => {
    const {id} = useParams();
    const note = notes.find(note => note.id === Number(id))

    return (
        <div>
            <h2>{note?.body}</h2>
        </div>
    )
}

export default NotePage;
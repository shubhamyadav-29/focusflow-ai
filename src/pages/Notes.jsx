import  { useState } from 'react'

export default function Notes() {
    const [note,setNote]=useState("")
    const [notesList,setNoteList]=useState([])

    const handleAddNote = () =>{
        setNoteList([...notesList,note])
        setNote("")
    }
    return (<div>
       <h1>Notes</h1>
       <input type="text" value={note} onChange={(e) => setNote(e.target.value)}
       placeholder="Write note.." />

       <button onClick={handleAddNote}>Add</button>

       <ul>
        {notesList.map((n,index) => (
            <li key={index}>{n}</li>
        ))}
       </ul>

    </div>
    )
}
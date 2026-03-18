import  { useEffect, useState } from 'react'

export default function Notes() {
    const [note,setNote]=useState("")
    const [notesList,setNoteList]=useState([])


    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem("notes"))
        
        if(savedNotes){
            setNoteList(savedNotes)
        }
      
    },[])

    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notesList))
    },[notesList])

    const handleAddNote = () =>{
        if(note.trim()==="")return
        setNoteList([...notesList,note])
        setNote("")
    }
    const handleDeleteNote = (index) =>{
        const updated = notesList.filter((_, i) => i !== index)
        setNoteList(updated)
    }
    return (<div>
       <h1>Notes</h1>
       <input type="text" value={note} onChange={(e) => setNote(e.target.value)}
       placeholder="Write note.." />

       <button onClick={handleAddNote}>Add</button>

       <ul>
        {notesList.map((n,index) => (
            <li key={index}>{n}
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </li>
        ))}
       </ul>

    </div>
    )
}
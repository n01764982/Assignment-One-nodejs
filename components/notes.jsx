import { useState } from 'react';
import Navbar from './navbar';





function NotePage(){
    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");



    const addNote = () => {
        if (!text.trim()) 
            return; setNotes([...notes, text]);
        setText("");
    };
    const removeNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    }

    return(
        <>
        <Navbar/>
            <div id='Notepad'> 
                <h1>Notepad</h1>
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Add a Note'>
                <button onClick={addNote}>Add</button></input>
                {notes.length == 0 ? (
                    <p>Your notes are empty, add something</p>
                ) : (
                    <ul>
                        {notes.map((note, index) => (
                            <li key={index}>{note}
                            <button onClick={() => removeNote(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )};
            </div>
        </>
    );

}

export default NotePage;
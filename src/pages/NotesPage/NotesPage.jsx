import { checkToken } from '../../utilities/users-service';
import NoteCard from '../../components/NoteCard/NoteCard';
import { useState, useEffect } from 'react';
import { getNotes, fetchNotes } from '../../utilities/notes-service';
import { get } from 'mongoose';

export default function NotesPage() {

  // State for new note  
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // useEffect function ?
  useEffect(() => {
    async function fetchNotes() {
      let allNotes = getNotes();
      setNotes(allNotes);
    }
  }, []);



  // Handle change of input
  const handleChange = (evt) => {
    setNewNote(evt.target.value);

  }

  // // Handle submit new note
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const newNote = {
      text: newNote,
    };

    await API.createNote(newNote);

    setNewNote('');
    fetchNotes();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newNote}
          onChange={handleChange}
        />
        <button>Add Note</button>
      </form>
      {notes.length ? (
        notes.map(note => (
          <NoteCard key={note._id} note={note} />
        ))
      ) : (
        <p> No Notes Yet!</p>
      )}
    </div >
  )
}
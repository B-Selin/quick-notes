import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NoteCard({ note }) {
  return (
    <div className="note-card">
      <h3>{note.text}</h3>
      <p>Created: {note.createdAt}</p>
      <Link to={`/notes/${note._id}`}>View Note</Link>

    </div>
  );
}

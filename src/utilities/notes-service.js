export async function getNotes() {
  try {
    const response = await fetch('/api/notes');
    if(!response.ok) {
      throw new Error('Error fetching notes');
    }
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export async function fetchNotes(){
  try {
    const response = await fetch('/api/notes');
    if(!response.ok) {
      throw new Error('Error fetching notes');
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function createNote(noteData) {
  try {
    const response = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(noteData)
    });

    if(!response.ok) {
      throw new Error('Error creating note');
    }

    return await response.json();

  } catch (err) {
    console.error(err);
    throw err;
  }
}

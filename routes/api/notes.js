const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/notes - Create a new note
router.post('/', ensureLoggedIn, notesCtrl.create); 

// GET /api/notes - Get all notes
router.get('/', ensureLoggedIn, notesCtrl.index);  



// // PUT /api/notes/:id - Update a note
// router.put('/:id', ensureLoggedIn, notesCtrl.update);

// // DELETE /api/notes/:id - Delete a note
// router.delete('/:id', ensureLoggedIn, notesCtrl.delete);

module.exports = router;
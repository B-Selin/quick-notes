const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


// The schema for notes will be minimal with only the following two properties:
// text	String	required
// user	ObjectId	required
// Use the timestamps: true option so that the createdAt property can be used to display the date & time of each note.


const noteSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('Note', noteSchema);

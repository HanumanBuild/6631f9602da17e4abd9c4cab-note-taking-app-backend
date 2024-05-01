const Note = require('../models/Note');
exports.create = async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content
    });
    const savedNote = await newNote.save();
    res.status(201).send(savedNote);
  } catch (error) {
    res.status(500).send({ message: error.message || "Some error occurred while creating the Note." });
  }
};
exports.findAll = async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (error) {
    res.status(500).send({ message: error.message || "An error occurred while retrieving notes." });
  }
};
// Continuation for findOne, update, and delete should be implemented here.
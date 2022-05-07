const router = require("express").Router();
const notes = require("../../db/db.json");
const shortId = require('shortid');
const fs = require("fs");
const path = require("path");

// Sets up the data
router.get("/notes", (req, res) => {
  res.json(notes);
});

// Pulls the active notes out
router.get("/notes/:id", (req, res) => {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === req.params.id) {
      res.json(notes[i]);
    }
  }
});

// Adds notes to the databse
router.post("/notes", (req, res) => {
  const newNote = {
    'title': req.body.title,
    'text': req.body.text,
    'id': shortId.generate(),
  };
  notes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes, null, 2)
  );
  res.json(notes);
});

// Deletes the notes
router.delete("/notes/:id", (req, res) => {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === req.params.id) {
      notes.splice(i, 1);
    }
  }
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(notes, null, 2)
  );
  res.json(notes);
});

module.exports = router;

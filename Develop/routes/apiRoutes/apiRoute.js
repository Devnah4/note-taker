const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');
const path = require('path');

// Sets up the data
router.get('/notes', (req, res) => {
    res.json(notes);
})

module.exports = router;
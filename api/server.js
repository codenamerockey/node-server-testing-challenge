const express = require('express');
const Hobbits = require('../database/hobs_model');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/api/hobbits', async (req, res) => {
  const rows = await Hobbits.getAll();

  res.status(200).json(rows);
});

server.post('/', (req, res) => {
  const hobbits = req.body;

  Hobbits.add(hobbits)
    .then(hobbit => {
      res.status(201).json(hobbit);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to add new hobbit to database' });
    });
});

server.delete('/:id', (req, res) => {
  const { id } = req.params;

  Hobbits.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find hobbit with given id' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Failed to delete hobbit from the database' });
    });
});

module.exports = server;

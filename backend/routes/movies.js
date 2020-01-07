const {
    Movie,
    validate
} = require('../models/movie.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
     const movies = await Movie.find().sort('title');
    res.send(movies);
});


router.post('/', async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let film = await Movie.findOne({
        title: req.body.title
    });
    if (film) return res.status(400).send('Movie already added.');


    const movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        director: req.body.director,
        runningTime: req.body.runningTime,
        description: req.body.description
    });
    await movie.save();
  
    res.send(movie);
});


router.put('/:id', async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: req.body.genre,
        director: req.body.director,
        runningTime: req.body.runningTime,
        description: req.body.description
    }, {
        new: true
    });

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});


router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});


router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

module.exports = router;
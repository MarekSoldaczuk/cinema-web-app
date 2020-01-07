const mongoose = require('mongoose').Types.ObjectId; 
const {Show, validate} = require('../models/show.js');

const {Movie} = require('../models/movie.js');


const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    // console.log(req.body);

    if(!mongoose.isValid(req.body.movieId)) return res.status(400).send('There is no movie with this id in the db!'); 
    let movie = await Movie.findById(req.body.movieId); 
    // console.log(movie);

    if(!movie) return res.status(400).send('No such movie!'); 

    let existingShow = await Show.findOne({
        date: req.body.date, 
        movie: movie
    });

    if (existingShow) return res.status(400).send('Show already exists.'); 
  
    let show = new Show({ });
    show.movie = movie;
    show.date = req.body.date; 
    // console.log(req.body);
    show.room = req.body.room;
    show.seats = req.body.seats;
    show = await show.save();
  
    res.send(show);
});


router.get('/', async (req, res) => {
    const shows = await Show.find().sort('date');
   res.send(shows);
});

router.get('/:id', async (req, res) => {
    const show = await Show.findById(req.params.id);

    if (!show) return res.status(404).send('The show with the given ID was not found.');

    res.send(show);
});



module.exports = router;
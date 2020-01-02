const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        minlength: 5,
        maxlength: 63,
        required: true
    },
    director: {
        type: String,
        minlength: 4,
        maxlength: 63,
        required: true
    },
    genre: {
        type: String,
        required: true,
        enum: ['DRAMAT', 'KOMEDIA', 'MUSICAL', 'HORROR', 'ANIMOWANY', 'FAMILIJNY', 'SENSACYJNY', 'PRZYGODOWY'],
        uppercase: true
    },
    runningTime: {
        type: Number,
        required: true,
        min: 5,
        max: 255
    },
    description: {
        type: String,
        maxlength: 1023
    },
    // multer npm?
    // img: {
    //     type: String,
    //     required: true
    // } 
});

const Movie = mongoose.model('Movie', movieSchema);

function validateMovie(movie) {
    const schema = {
        title: Joi.string().min(5).max(63).required(),
        director: Joi.string().min(4).max(63).required(),
        genre: Joi.string().valid(['DRAMAT', 'KOMEDIA', 'MUSICAL', 'HORROR', 'ANIMOWANY', 'FAMILIJNY', 'SENSACYJNY', 'PRZYGODOWY']).required(),
        runningTime: Joi.number().min(5),
        description: Joi.string().max(1023),
        // img: Joi.string().required()
    };
    return Joi.validate(movie, schema);
}

// export
exports.Movie = Movie;
exports.validate = validateMovie;
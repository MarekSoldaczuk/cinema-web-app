const mongoose = require('mongoose');
const Joi = require('joi');

const showSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    room: {
        type: Number,
        required: true
    },
    seats: [
        {
            bookingId: {
                type: String
            },
            row: {
                type: Number,
                required: true
            },
            column: {
                type: Number,
                required: true
            },
            taken: {
                type: Boolean,
                default: false, 
                required: true
            }
        }
    ]
});

const Show = mongoose.model('Show', showSchema);

function validateShow(show) {
    const schema = {
        //assuming we have 15 showrooms
        room: Joi.number().min(1).max(15).required(),
        seats: Joi.array().required(),
        date: Joi.date(),
        movieId: Joi.string()
    };
    return Joi.validate(show, schema);
}

// export
exports.Show = Show;
exports.validate = validateShow;
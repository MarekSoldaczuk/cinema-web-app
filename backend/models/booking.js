const mongoose = require('mongoose');
const Joi = require('joi');

const bookingSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    room: {
        type: Number,
        required: true
    },
    bookedSeats: [
        {
            row: {
                type: Number,
                required: true
            },
            column: {
                type: Number,
                required: true
            }
        }
    ]
});

const Booking = mongoose.model('Booking', bookingSchema);

function validateBooking(booking) {
    const schema = {
        bookedSeats: Joi.array().required(),
        showId: Joi.string()
    };
    return Joi.validate(booking, schema);
}

exports.Booking = Booking;
exports.validate = validateBooking;
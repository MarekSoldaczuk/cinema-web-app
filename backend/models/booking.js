const mongoose = require('mongoose');
const Joi = require('joi');

const bookingSchema = new mongoose.Schema({
    bookingId: {
        type: String,
        required: true
    },
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
        //assuming we have 3 showrooms
        room: Joi.number().min(1).max(3).required(),
    };
    return Joi.validate(booking, schema);
}

// export
exports.Booking = Booking;
exports.validate = validateBooking;
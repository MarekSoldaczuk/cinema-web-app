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
    // incorporated in the ticket object/array of objects? or bookedSeats? 
    // discount: {
    //     type: String,
    //     required: true,
    //     enum: ['STUDENCKI', 'ULGOWY', 'SENIORSKI', 'WETERAN', 'NORMALNY'],
    //     uppercase: true
    // },
    // price: {
    //     type: String,
    //     required: true,
    //     enum: ['22.00 ZŁ', '22.00 ZŁ', '23.00 ZŁ', '23.00 ZŁ', '28.00 ZŁ']
    // },
    // amount: {
    //     type: Number,
    //     required: true
    // },
    // option: {
    //     type: String,
    //     required: true,
    //     enum: ['KUP', 'REZERWUJ']
    // },
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
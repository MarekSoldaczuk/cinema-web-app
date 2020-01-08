const mongoose = require('mongoose').Types.ObjectId; 
const {Booking, validate} = require('../models/booking.js');

const {Show} = require('../models/show.js');


const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    if(!mongoose.isValid(req.body.showId)) return res.status(400).send('There is no show with this id in the db!'); 

    let show = await Show.findById(req.body.showId); 

    if(!show) return res.status(400).send('No such show!');
 
    const newSeats = [...show.seats] || [];
   
    if(!req.body.bookedSeats) return res.status(400).send('No seats booked, no change, no reservation, nothing');

    let isValidSeatSelection = true;
    const bookedSeats = [];
    for(let i = 0; i < req.body.bookedSeats.length; i ++)
    {
        const possibleSeatId = req.body.bookedSeats[i];

        const foundSeat = newSeats.find((seat)=>{
            return !!(seat._id == possibleSeatId && seat.taken === false)
        }); 

        if(!foundSeat)  {
            isValidSeatSelection = false;
            break;
        }
        bookedSeats.push(foundSeat)
    }

    if(!isValidSeatSelection) return res.status(400).send('Seat not available');

    let booking = new Booking({ });
    booking.movie = show.movie;
    booking.date = show.date;
    booking.room = show.room;
    booking.bookedSeats = bookedSeats;
    booking.userId = req.user?req.user._id: 'Anon';
    booking = await booking.save();

    bookedSeats.forEach((bookedSeat, index)=> {
        const row = bookedSeat.row;
        const column = bookedSeat.column;    

        const foundSeatIndex = newSeats.findIndex((seat)=>{
            return seat._id === bookedSeat._id;
        });

        if(foundSeatIndex > -1)
        {
            newSeats[foundSeatIndex] = {
                row, 
                column,
                taken: true,
                bookingId: booking._id
            };
        }
    });

    show.seats = newSeats;
    await show.save();

    res.send({
        booking, show
    });
});

router.get('/', async (req, res) => {
    const bookings = await Booking.find().sort('date');
   res.send(bookings);
});

router.get('/:id', async (req, res) => {
    const booking = await Booking.findById(req.params.id);

    if (!booking) return res.status(404).send('The booking with the given ID was not found.');

    res.send(booking);
});

// PUT to be implemented in the future
// router.put('/:id', async (req, res) => {
//     const {
//         error
//     } = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//  ........
//  res.send(booking);
// });

router.delete('/:id', async (req, res) => {
    const booking = await Booking.findByIdAndRemove(req.params.id);

    if (!booking) return res.status(404).send('The booking with the given ID was not found.');

    res.send(booking);
});

module.exports = router;


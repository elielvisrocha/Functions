'use strict';


const bookings = [];

const createBooking = function (flightNum, numPassengers = 500, price = 10 * numPassengers) {

    // numPassengers = numPassengers || 1;
    // price = price || 500;

    const booking = {
        flightNum,
        numPassengers,
        price
    };

    console.log(booking);
    bookings.push(booking);

}


createBooking('LH123', 23);
createBooking('KL321', 78);
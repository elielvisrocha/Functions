// 'use strict';


// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 500, price = 10 * numPassengers) {

//     // numPassengers = numPassengers || 1;
//     // price = price || 500;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     };

//     console.log(booking);
//     bookings.push(booking);

// }


// createBooking('LH123', 23);
// createBooking('KL321', 78);









// Arguments Value VS Reference;


const flight = 'LG432';
const elvis = {
    name: 'Elielvis',
    passport: 23211233434,
};


const checkIn = function (flightNum, passenger) {
    flightNum = 'LJ432';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 23211233434) {
        alert('Checked In');
    } else {
        alert('Wrong passport');
    }
}


checkIn(flight, elvis);
console.log(flight);
console.log(elvis);


// Is same as doing...

const flightNum = flight;
const passenger = elvis;


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(elvis);

console.log(elvis);

checkIn(flight, elvis)
const Person = require('./Person')

/**
 * Represents an individual who flies on an aircraft.
 */
class Passenger extends Person {
    constructor(name, ticketNumber, bags) {
        super(name, bags);
        this.ticketNumber = ticketNumber;
    }
}

module.exports = Passenger;
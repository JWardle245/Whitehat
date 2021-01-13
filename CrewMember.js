const Person = require('./Person');

/**
 * Represents an individual who works on an aircraft.
 */
class CrewMember extends Person {

    constructor(name, title, bags) {
        super(name, bags);
        this.title = title;
    }
}

module.exports = CrewMember;
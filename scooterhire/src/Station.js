/**
 * Represents a chargin/hire station that interacts with users and scooters
 */
class Station {
    location = '';
    capacity = 6;
    scooters = [];
    /**
     * Creates a station
     * 
     * @param {string} location
     */
    constructor(location, capacity) {
        if (!location) {
            throw new Error('station must have a location');
        }
        this.location = location;
        this.capacity = capacity;
    }

    /**
     * Adds a scooter to the station
     * 
     * @param {Scooter} scooter
     */
    addScooter(scooter) {
        this.scooters.push(scooter);
    }
}



module.exports = Station;
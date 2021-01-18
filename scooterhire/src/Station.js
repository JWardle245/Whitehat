const Scooter = require("./Scooter");
const User = require("./User");

/**
 * Represents a charging/hire station that interacts with users and scooters
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
     * Adds a scooter to the station's array
     * 
     * @param {Scooter} scooter
     */
    addScooter(scooter) {
        scooter.docked = "yes";
        this.scooters.push(scooter);
    }

    /**
     * Removes a scooter from the station's array
     * 
     * @param {scooter} scooter - The scooter to remove
     */
    removeScooter(scooter) {
        scooter.docked = "no";
        const index = this.scooters.indexOf(scooter);
        this.scooters.splice(index, 1);
    }

    /**
     * Assigns a scooter to a user
     * 
     * @param {user} user - The user
     */
    assignScooter(user){
        var index;
        for (index = 0; index<this.scooters.length; index++){
            if (this.scooters[index].checkCharge() == "charged" && this.scooters[index].docked == "yes"){
                if (user.balance > 10){
                    user.balance -= 10;
                    user.scooter = this.scooters[index];
                    this.scooters.splice(index, 1);
                }
            }
        }
    }

    /**
     * returns a scooter from a user, to the station
     * 
     * @param {user} user - The user
     */
    returnScooter(user){
        user.scooter.charge = 0;
        user.scooter.chargeBattery();
        user.scooter.docked = "yes";
        this.scooters.push(user.scooter);
        user.scooter = 0;
    }
}


module.exports = Station;
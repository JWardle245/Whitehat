/**
 * Represents a scooter to be charged and assigned to a station or user
 */
class Scooter {
    /**
     * Creates a scooter
     * 
     * @param {string} id
     */
    constructor(id, charge) {
        if (!id) {
            throw new Error('scooter must have a unique id');
        };
        this.id = id;
        this.charge = charge;
        this.docked = "no";
    }

    /**
     * Checks to see if the scooter's battery is charged
     * 
     * @param {Number} charge
     */
    checkCharge() {
        if (this.charge < 100){
            return "charging";
        }
        else {
            return "charged";
        }
    }

    /**
     * Charges the battery of the scooter over the course of 4 seconds
     * 
     * @param {Number} charge
     */
    async chargeBattery(){
        await new Promise(resolve => setTimeout(resolve, 4000));
        this.charge = 100;
    }
}

module.exports = Scooter;
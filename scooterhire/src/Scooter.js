/**
 * Represents ascooter to be charged and assigned to a station or user
 */
class Scooter {
    /**
     * Creates a scooter
     * 
     * @param {string} id
     */
    constructor(id) {
        if (!id) {
            throw new Error('scooter must have a unique id');
        }
        this.id = id;
        this.charge = charge;
    }
}

module.exports = Scooter;
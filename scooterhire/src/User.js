/**
 * Represents a customer
 */
class User {
    /**
     * Creates a user
     * 
     * @param {string} name
     */
    constructor(name) {
        if (!name) {
            throw new Error('user must have a name');
        }
        this.name = name;
    }
}

module.exports = User;
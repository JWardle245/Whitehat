/**
 * Represents a customer of the scooter hire service
 */
class User {
    /**
     * Creates a user
     * 
     * @param {string} username
     */
    constructor(username, balance) {
        if (!username) {
            throw new Error('user must have a unique username');
        }
        this.username = username;
        this.balance = balance;
        this.scooter;
    }
}

module.exports = User;
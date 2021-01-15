const User = require('../User')

describe('User', function () {
    test('has a name', function () {
        const john = new User("John", 30);
        expect(user.name).toBe("John");
    });

    test('does not have a name', function () {
        expect(() => new Bag()).toThrowError('user must have a unique username');
    });
})
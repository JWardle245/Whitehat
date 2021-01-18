const User = require('../src/User')

describe('User', function () {
    test('has a name', function () {
        const john = new User("John", 30);
        expect(john.username).toBe("John");
    });

    test('does not have a name', function () {
        expect(() => new User()).toThrowError('user must have a unique username');
    });
});
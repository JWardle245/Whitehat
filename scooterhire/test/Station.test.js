const Station = require('../src/Station')
const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('Station', function () {
    test('has a location', function () {
        const station1 = new Station("london");
        expect(station1.location).toBe("london");
    });

    test('does not have a location', function () {
        expect(() => new Station()).toThrowError('station must have a location');
    });

    test('Add scooter', function () {
        const station1 = new Station("london");
        const scooter1 = new Scooter("001");
        station1.addScooter(scooter1);
        expect(station1.scooters.length).toBe(1);
    });

    test('Remove scooter', function () {
        const station1 = new Station("london");
        const scooter1 = new Scooter("001");
        station1.addScooter(scooter1);
        station1.removeScooter(scooter1);
        expect(station1.scooters.length).toBe(0);
    });

    test('Assign scooter to user - successful', function () {
        const station1 = new Station("london");
        const scooter1 = new Scooter("001", 100);
        const user1 = new User("john", 30);
        station1.addScooter(scooter1);
        station1.assignScooter(user1);
        expect(user1.scooter.id).toBe("001");
    });

    test('Assign scooter to user - failed because of balance', function () {
        const station1 = new Station("london");
        const scooter1 = new Scooter("001", 100);
        const user1 = new User("john", 5);
        station1.addScooter(scooter1);
        station1.assignScooter(user1);
        expect(station1.scooters.length).toBe(1);
    });

    test('Assign scooter to user - failed because of battery', function () {
        const station1 = new Station("london");
        const scooter1 = new Scooter("001", 50);
        const user1 = new User("john", 30);
        station1.addScooter(scooter1);
        station1.assignScooter(user1);
        expect(station1.scooters.length).toBe(1);
    });

    test('Return scooter to station', function () {
        const station1 = new Station("london");
        const scooter1 = new Scooter("001", 100);
        const user1 = new User("john", 30);
        station1.addScooter(scooter1);
        station1.assignScooter(user1);
        station1.returnScooter(user1);
        expect(user1.scooter.id).toBe(undefined);
    });

    test('Return scooter to different station', function () {
        const station1 = new Station("london");
        const station2 = new Station("reading");
        const scooter1 = new Scooter("001", 100);
        const user1 = new User("john", 30);
        station1.addScooter(scooter1);
        station1.assignScooter(user1);
        station2.returnScooter(user1);
        expect(station2.scooters.length).toBe(1);
    });
});
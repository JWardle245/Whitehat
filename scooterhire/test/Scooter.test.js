const Scooter = require('../src/Scooter')

describe('Scooter', function () {
    test('has an id', function () {
        const scooter1 = new Scooter("001");
        expect(scooter1.id).toBe("001");
    });

    test('does not have an id', function () {
        expect(() => new Scooter()).toThrowError('scooter must have a unique id');
    });

    test('checkCharge() returns charging when charge < 100', function () {
        const scooter1 = new Scooter("001", 50);
        status = scooter1.checkCharge();
        expect(status).toBe("charging");
    });

    test('checkCharge() returns charged when charge = 100', function () {
        const scooter1 = new Scooter("001", 100);
        status = scooter1.checkCharge();
        expect(status).toBe("charged");
    });

    test('chargeBattery()', async () => {
        const scooter1 = new Scooter("001", 0);
        await scooter1.chargeBattery();
        expect(scooter1.charge).toBe(100);
    });
});
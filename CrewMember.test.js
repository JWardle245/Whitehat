const { TestScheduler } = require('jest')
const Bag = require('./Bag')
const CrewMember = require('./CrewMember')

describe('CrewMember', function () {
    test('has a name', function () {
        const person = new CrewMember("Barry");
        expect(person.name).toEqual("Barry");
    });
});
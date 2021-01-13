const { TestScheduler } = require('jest')
const Bag = require('./Bag')
const CrewMember = require('./CrewMember')

describe('CrewMember', function () {
    test('has a name', function () {
        const person = new CrewMember("Barry");
        expect(person.name).toEqual("Barry");
    });

    test('has bags', function () {
        const person = new CrewMember({name: "William"});
        const handluggage = new Bag(8);
        const hullluggage = new Bag(25);
        person.addBag(handluggage);
        person.addBag(hullluggage);
        expect(person.bags.length).toBe(2);
    });

    test('we can read the weight of a bag', function () {
        const john = new CrewMember({name: "Jim"});
        const rucksack = new Bag(6);
        john.addBag(rucksack);
        expect(john.bags[0].weight).toBe(6);
    });

    test('we can read title', function () {
        const sam = new CrewMember("Sam","Bin-man");
        expect(sam.title).toEqual('Bin-man');
    });
});
import Person from './oop';

jest.mock('./oop');

beforeEach(() => {
    Person.mockClear();
});

it('We can check if the test file called the class constructor', () => {
    const person = new Person();
    expect(Person).toHaveBeenCalledTimes(1);
});

it('We can check of the test file called a method on the class instance', () => {
    // Show that mockClear() is working:
    expect(Person).not.toHaveBeenCalled();
    const person = new Person();
    // Constructor should have been called again:
    expect(Person).toHaveBeenCalledTimes(1);
    
    const 

})

// const blair = new Person("Blair", 43);
// console.log(blair.age);

// expect(blair.age).toBe(43);
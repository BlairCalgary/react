class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    birthday() {
        this.age++;
    }
    show() {
        return `${this.name} is ${this.age} years old`
    }
}

class Professor extends Person {
    show() {
        return super.show() + ' and teaches.';
    }
}

class Farmer extends Person {
    show() {
        return super.show() + ' and farms.';
    }
}

const larry = new Farmer("Larry", 29);
const roman = new Professor("Roman", 25);

console.log(larry.show());
larry.birthday();
console.log(larry.show());

console.log(roman.show());

export default Person
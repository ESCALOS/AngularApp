const username: string = "carlos";

const sum = (a: number, b: number) => {
    return a + b;
}

sum(1,2);

class Person {

    constructor(public age: number, public lastname: string) {}
}

const carlos = new Person(24,"Carlos");
carlos.age
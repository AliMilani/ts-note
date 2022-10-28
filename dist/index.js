"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(StudentId, firstName, lastName) {
        super(firstName, lastName);
        this.StudentId = StudentId;
    }
    takeTest() {
        console.log("taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "professor " + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
function PrintNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
PrintNames([
    new Student(1, "ala", "Doe"),
    new Teacher("ola", "Doe"),
    new Principal("mola", "Doe"),
]);
//# sourceMappingURL=index.js.map
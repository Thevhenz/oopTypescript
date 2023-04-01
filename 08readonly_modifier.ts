class Person {
  public name: string;
  readonly gender: string = "male";
}

const person = new Person();
// person.gender = "Female"; // Error

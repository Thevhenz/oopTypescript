interface Student {
  readonly name: string;
  readonly age: number;
}

let student: Student = { name: "Sofyan", age: 26 };
console.log(student);
// student.name = budi // error beacause it readonly it cannot modify its data

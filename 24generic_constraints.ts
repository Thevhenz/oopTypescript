interface Length {
  length: number;
}

function Generics4<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const genericsA = Generics4("Sofyan");
console.log(genericsA);

const genericsB = Generics4({ length: 10, value: 200 });
console.log(genericsB.value);

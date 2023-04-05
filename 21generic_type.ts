type Generics2<T> = T;

function genericsFunction2<T>(value: T): Generics2<T> {
  return value;
}

console.log(genericsFunction2<string>("Sofyan"));

console.log(genericsFunction2<number>(26));

console.log(genericsFunction2<boolean>(true));

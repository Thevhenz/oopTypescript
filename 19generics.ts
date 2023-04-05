// Not use generic
function getData(value: any) {
  return value;
}

const data = getData(221334);
console.log(data);
console.log(data.length);
console.log(typeof data.length);
// If not using generics, using the "any" data type does not produce an error if data.length is filled with a numerical input.

// Use generic
function getData2<T>(value: T) {
  return value;
}

const data2 = getData2(1234);
console.log(data2);
// console.log(data2.length); // Error
// console.log(typeof data2.length); // Error
// If we use generics, it will produce an error if we force to assign data2.length to a number input.

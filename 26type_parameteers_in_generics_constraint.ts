function getProperty<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(x);
console.log(getProperty(x, "a"));
console.log(getProperty(x, "d"));

// console.log(getProperty(x, "s")); // Error, not found in the key parameter

// console.log("hello world");

let obj = {
  name: "John",
  age: 30,
  address: "123 Main St",
  company: "ABC Inc.",
};

const func = ({ name, age }) => {
  console.log(name, age);
};
func(obj);

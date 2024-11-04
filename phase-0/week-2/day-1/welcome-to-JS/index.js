// Release 0
let student = {};

student.firstName = "Petr";

student.lastName = "Perviy";

student.firstName = "Petya";

delete student.firstName;

// Release 1

let group = [];

group.push(student);

group.push({
  firstName: "John",
  lastName: "Stutu",
});

group.push({
  firstName: "Lex",
  lastName: "Luter",
});

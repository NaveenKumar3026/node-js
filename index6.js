const fs = require('fs');

const student = {
    id: 22,
    name: "Vijay",
    age: 19,
    grade: "S",
    marks: [95, 93, 100, 97, 92]
};
console.log("JS object: ");
console.log(student);

const studentJson = JSON.stringify(student);
console.log("\nStudentJson: ");
console.log(studentJson);

fs.writeFileSync("student.json", studentJson);

const data = fs.readFileSync('student.json', "utf-8");

const parsedData = JSON.parse(data);

console.log("\nParsedData: ");
console.log(parsedData);
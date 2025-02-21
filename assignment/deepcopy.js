const student = {
    name: "Anshul",
    age: 20,
    subjects: {
        Math: 95,
        Science: 90,
        English: 85
    },
    address: {
        street: "123 Main St",
        city: "Kathmandu",
        country: "Nepal"
    }
};

const deepCopyStudent = JSON.parse(JSON.stringify(student));

deepCopyStudent.subjects.Math = 100;

console.log(`Original Student: ${JSON.stringify(student, null, 2)}`);
console.log(`Deep Copy Student: ${JSON.stringify(deepCopyStudent, null, 2)}`);

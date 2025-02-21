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

// Shallow copy using spread operator
const shallowCopyStudent = { ...student };
shallowCopyStudent.subjects.Math = 100; // Modify the Math subject in shallow copy

// Shallow copy using Object.assign
const shallowCopy = Object.assign({}, student);

// Log the original and shallow copied objects
console.log("Original Student:", student);
console.log("Shallow Copy (Spread):", shallowCopyStudent);
console.log("Shallow Copy (Object.assign):", shallowCopy);
//using template literals
console.log(`Original Student: ${JSON.stringify(student, null, 2)}`);
console.log(`Shallow Copy (Spread): ${JSON.stringify(shallowCopyStudent, null, 2)}`);
console.log(`Shallow Copy (Object.assign): ${JSON.stringify(shallowCopy, null, 2)}`);

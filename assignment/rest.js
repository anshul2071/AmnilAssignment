const customer = {
    id: 101,
    name: "Anshul",
    age: 22,
    email: "anshul@example.com",
    address: "Kathmandu, Nepal",
    phone: "+977-9812345678"
};

// Extracting essential details and keeping the rest separately
const { name, email, ...additionalInfo } = customer;

console.log(`Name: ${name}, 
Email: ${email},
AdditionalInfo: ${additionalInfo} `) ;
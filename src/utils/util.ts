export function generateRandomEmail() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const name = Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com'];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${name}@${domain}`;
}

export function generateRandomName() {
    const firstNames = ['John', 'Jane', 'Alex', 'Emma', 'Chris', 'Olivia', 'Daniel', 'Sophia', 'Ryan', 'Ava'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin'];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${firstName} ${lastName}`;
}

export function randomizeAddressPayload() {
    const streets = ['123 Main St', '456 Elm St', '789 Oak Ave', '101 Maple Rd', '222 Pine St'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
    const states = ['NY', 'CA', 'IL', 'TX', 'FL'];
    const zipCodes = ['10001', '90001', '60601', '77001', '33101'];

    return {
        street: streets[Math.floor(Math.random() * streets.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        state: states[Math.floor(Math.random() * states.length)],
        zipCode: zipCodes[Math.floor(Math.random() * zipCodes.length)]
    };
}



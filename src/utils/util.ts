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
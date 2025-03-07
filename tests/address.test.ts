import request from 'supertest';
import { generateRandomEmail, generateRandomName, randomizeAddressPayload } from '../src/utils/util';

const TEST_API_URL = process.env.TEST_API_URL || 'http://localhost:2002';

describe('Address API Endpoints', () => {
    let createdUserId: number;
    let createdAddressId: number;

    /**
     * ✅ Test: Create a new user (Needed to attach an address)
     */
    beforeAll(async () => {
        const userRes = await request(TEST_API_URL)
            .post('/user')
            .send({
                name: generateRandomName(),
                email: generateRandomEmail(),
                password: 'securepassword',
            });

        expect(userRes.status).toBe(201);
        createdUserId = userRes.body.data.id;
    });

    /**
     * ✅ Test: Create an address for a user (POST /addresses/:userID)
     */
    it('should create an address for a user', async () => {
        const res = await request(TEST_API_URL)
            .post(`/addresses`)
            .send({
                "userId": createdUserId,
                "street": "123 Main St",
                "city": "New York",
                "state": "NY",
                "zipCode": "10001"
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('id');
        expect(res.body.data.userId).toBe(createdUserId);

        createdAddressId = res.body.data.id;
    });

    /**
     * ✅ Test: Get user's address (GET /addresses/:userID)
     */
    it('should retrieve the address for a user', async () => {
        const res = await request(TEST_API_URL).get(`/addresses/${createdUserId}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data.street).toBe('123 Main St');
    });

    /**
     * ✅ Test: Update user's address (PATCH /addresses/:userID)
     */
    it('should update the address for a user', async () => {
        const res = await request(TEST_API_URL)
            .patch(`/addresses/${createdUserId}`)
            .send(randomizeAddressPayload());
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('id');
        expect(res.body.message).toBe('Address updated successfully');
        expect(res.body.data.userId).toBe(createdUserId);
    });

    /**
     * ❌ Test: Fail to retrieve address for a non-existing user (GET /addresses/:invalidID)
     */
    it('should return 404 if user does not have an address', async () => {
        const res = await request(TEST_API_URL).get('/addresses/99999');
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('error', true);
        expect(res.body.message).toBe('Address Not Found');
    });
});
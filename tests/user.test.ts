import request from 'supertest';
import * as dotenv from 'dotenv';
import { generateRandomName, generateRandomEmail } from '../src/utils/util';
dotenv.config();
const TEST_API_URL = process.env.API_URL || 'http://localhost:2002';

describe('User API Endpoints', () => {

    let createdUserId: number;
    /**
     * ✅ Test: Create a new user (POST /user)
     */

    it('should create a new user', async () => {
        const res = await request(TEST_API_URL)
            .post('/user')
            .send({
                name: generateRandomName(),
                email: generateRandomEmail(),
                password: 'securepassword',
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('id');
        createdUserId = res.body.data.id;

    });

    /**
     * ✅ Test: Get user by ID (GET /user?userId={id})
     */

    it('should retrieve a user by ID', async () => {
        const res = await request(TEST_API_URL).get(`/user/${createdUserId}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data.id).toBe(createdUserId);
    });

    /**
     * ✅ Test: Fail to retrieve a non-existing user (GET /user?userId={invalid})
     */
    it('should return 404 for non-existing user', async () => {
        const res = await request(TEST_API_URL).get('/user/999-99');
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('error', true);
        expect(res.body.message).toBe('User Not Found');
    });

    /**
     * ✅ Test: Get total user count (GET /user/count)
     */
    it('should return the total user count', async () => {
        const res = await request(TEST_API_URL).get('/user/count');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(typeof res.body.data.count).toBe('number');
    });

    /**
    * ✅ Test: Get paginated users (GET /user?pageNumber=1&pageSize=10)
    */
    it('should retrieve a paginated list of users', async () => {
        const res = await request(TEST_API_URL).get('/user?pageNumber=1&pageSize=10');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body).toHaveProperty('pagination');
        expect(res.body.pagination).toHaveProperty('total');
        expect(res.body.pagination).toHaveProperty('pageNumber');
        expect(res.body.pagination).toHaveProperty('pageSize');
        expect(res.body.pagination).toHaveProperty('totalPages');
    });


});




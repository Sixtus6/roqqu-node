import request from 'supertest';
import app from '../src/index';

describe('User API Endpoints', () => {
    let createdUserId: number;

    /**
     * ✅ Test: Create a new user (POST /users)
     */
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                username: 'JohnDoe',
                email: 'johndoe@example.com',
                password: 'securepassword',
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('id');
        expect(res.body.data.username).toBe('JohnDoe');

        createdUserId = res.body.data.id;
    });

    /**
     * ✅ Test: Get user by ID (GET /users?userId={id})
     */

    it('should retrieve a user by ID', async () => {
        const res = await request(app).get(`/users?userId=${createdUserId}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data.id).toBe(createdUserId);
    });

    /**
     * ❌ Test: Fail to retrieve a non-existing user (GET /users?userId={invalid})
     */

    it('should return 404 for non-existing user', async () => {
        const res = await request(app).get('/users?userId=99999');

        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('error', true);
        expect(res.body.message).toBe('User Not Found');
    });

    /**
     * ✅ Test: Get total user count (GET /users/count)
     */
    it('should return the total user count', async () => {
        const res = await request(app).get('/users/count');

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(typeof res.body.data.count).toBe('number');
    });
});
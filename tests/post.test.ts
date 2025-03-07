import request from 'supertest';
import { generateRandomName, generateRandomEmail, randomizePost } from '../src/utils/util';

const TEST_API_URL = process.env.TEST_API_URL || 'http://localhost:2002';

describe('Post API Endpoints', () => {
    let createdUserId: number;
    let createdPostId: number;

    /**
     * ✅ Test: Create a new user (Needed for posts)
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
     * ✅ Test: Create a new post (POST /posts)
     */
    it('should create a new post for a user', async () => {
        const res = await request(TEST_API_URL)
            .post('/posts')
            .send(randomizePost(createdUserId));

        console.log('Create Post Response:', res.body);

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toHaveProperty('id');
        expect(res.body.data.userId).toBe(createdUserId);
        expect(res.body.message).toBe('Created successfully');

        createdPostId = res.body.data.id;
    });

    /**
     * ✅ Test: Retrieve all posts for a user (GET /posts?userId={userId})
     */
    it('should retrieve all posts for a user', async () => {
        const res = await request(TEST_API_URL).get(`/posts?userId=${createdUserId}`);

        console.log('Get Posts Response:', res.body);

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
        expect(res.body.data[0]).toHaveProperty('title');
    });

    /**
     * ❌ Test: Fail to retrieve posts for a non-existing user (GET /posts?userId={invalid})
     */
    it('should return 404 if user has no posts', async () => {
        const res = await request(TEST_API_URL).get('/posts?userId=99999');

        console.log('Non-Existing User Posts Response:', res.body);

        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('error', true);
        expect(res.body.message).toBe('Posts Not Found');
    });

    /**
     * ✅ Test: Delete a post by ID (DELETE /posts/{id})
     */
    it('should delete a post by ID', async () => {
        const res = await request(TEST_API_URL).delete(`/posts/${createdPostId}`);

        console.log('Delete Post Response:', res.body);

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message', 'Post deleted successfully');
    });

    /**
     * ❌ Test: Fail to delete a non-existing post (DELETE /posts/{id})
     */
    it('should return 404 if post does not exist', async () => {
        const res = await request(TEST_API_URL).delete('/posts/99999');

        console.log('Non-Existing Post Delete Response:', res.body);

        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('error', true);
        expect(res.body.message).toBe('Post Not Found');
    });
});
const ApiResponse = {
    pass: {
        create: 'Created successfully',
        read: 'Fetched successfully',
        register: 'Account created successfully',
        getUsers: 'Users retrieved',
        getUser: 'User retrieved',
        login: 'Logged in successfully',
        success_event: 'Event created successfully',
        userCount: 'Total user count retrieved',
        update_address: 'Address updated successfully'
    },
    fail: {
        bad_request: 'Bad Request',
        conflict: 'Data Already exists',
        conflict_address: 'User already has an address',
        unauthorized: 'Unauthorized',
        adminUnauthorized: 'Admin Unauthorized',
        not_found: (meta: string) => `${meta} Not Found`,
        server: 'Internal Server Error',
        forbidden: 'Invalid ID',
        account_conflict: 'Account Already Exists',
        login: "Email or Password don't match",
    },
    code: {
        create: 201,
        success: 200,
        no_content: 204,
        bad_request: 400,
        unauthorized: 401,
        forbidden: 403,
        not_found: 404,
        conflict: 409,
        server_error: 500,
    },
};
export default ApiResponse;
import ApiResponse from "../config/response.config";
import { Post } from "../model/post.model";
import { User } from "../model/user.model";

class PostService {
    static async getPostsByUser(userId: number): Promise<any> {
        if (isNaN(userId)) {
            return { code: ApiResponse.code.bad_request, body: { error: true, message: ApiResponse.fail.forbidden } };
        }
        const user = await User.findByPk(userId);
        if (!user) {
            return { code: ApiResponse.code.not_found, body: { error: true, message: ApiResponse.fail.not_found('User') } };
        }
        const posts = await Post.findAll({ where: { userId } });
        if (!posts || posts.length === 0) {
            return { code: ApiResponse.code.not_found, body: { error: true, message: ApiResponse.fail.not_found('Posts') } };
        }
        return { code: ApiResponse.code.success, body: { error: false, message: ApiResponse.pass.read, data: posts } };
    }

    static async createPost(body: any): Promise<any> {
        const user = await User.findByPk(body.userId);
        if (!user) {
            return { code: ApiResponse.code.not_found, body: { error: true, message: ApiResponse.fail.not_found('User') } };
        }
        const post = await Post.create(body);
        return { code: ApiResponse.code.create, body: { error: false, message: ApiResponse.pass.create, data: post } };
    }

    static async deletePost(id: number): Promise<any> {
        const post = await Post.findByPk(id);
        if (!post) {
            return { code: ApiResponse.code.not_found, body: { error: true, message: ApiResponse.fail.not_found('Post') } };
        }
        await post.destroy();
        return { code: ApiResponse.code.success, body: { error: false, message: 'Post deleted successfully' } };
    }
}
export default PostService;

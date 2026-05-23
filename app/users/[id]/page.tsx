import { userApi } from '@/features/user/api/user.api';
import { ApiError } from '@/shared/lib/api/error';
import UsersTemplate from '@/features/user/templates/UsersTemplate';
import { postApi } from '@/features/post/api/post.api';
import PostTemplate from '@/features/post/templates/PostTemplate';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params;

    const posts = await postApi.fetchPost(id);

    if (!posts)
        throw new ApiError("Failed to load posts", 500)

    return (
        <PostTemplate postsData={posts} id={Number(id)} />
    )
}

export default page

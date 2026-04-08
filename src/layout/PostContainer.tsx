import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/postService";
import type { PostResponseHttpData } from "../utils/types";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

// TODO post com imagem
export default function PostContainer() {
    const {
        data: postsData,
        error: postsError,
        isLoading: isPostsLoading,
    } = useQuery<PostResponseHttpData>({
        queryKey: ["getPosts"],
        queryFn: getPosts,
    });

    if (postsError && !isPostsLoading) {
        return <div>Ocorreu um erro.</div>;
    }

    return (
        <div className="w-full mt-25.25 mb-12 flex flex-1 flex-col align-start items-center justify-between">
            <div className="w-160 h-full mt-9 mb-11.5 flex flex-col align-start items-center">
                <CreatePost />
                
                {!isPostsLoading && Array.isArray(postsData?.posts) ? (
                    <div>
                        {postsData.posts.map((post) => (
                            <div className="w-160 h-full mt-9 mb-11.5 flex flex-col align-start items-center gap-8" key={post.id}>
                                <Post post={post} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="dark:text-white">Carregando...</div>
                )}
            </div>
        </div>
    );
}

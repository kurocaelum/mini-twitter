import CreatePost from "./CreatePost";
import Post from "./Post";

// TODO post com imagem
export default function PostContainer() {
    return (
        <div className="w-full flex flex-1 flex-col align-start items-center justify-between">
            <div className="w-160 h-full mt-9 mb-11.5 flex flex-col align-start items-center gap-8">
                <CreatePost />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
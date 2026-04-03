import { FaRegHeart } from "react-icons/fa";
import type { PostType } from "../utils/types";

interface PostProps {
    post: PostType;
}

export default function Post({ post }: PostProps) {
    const author = post.authorName;
    const emailShort = `@${post.authorName.toLowerCase().split(" ")[0]}`;
    const title = post.title;
    const content = post.content;
    
    const year = post.createdAt.split("-")[0];
    const month = post.createdAt.split("-")[1];
    const day = post.createdAt.split("-")[2].split(" ")[0];
    const formattedDate = `${day}/${month}/${year}`;


    return (
        <div className="flex flex-col items-start p-4 gap-3 w-full h-47.5 bg-white dark:bg-blue-midnight3 border border-blue-steel3 dark:border-gray rounded-xl">
            <div className="flex items-center gap-1.5 w-full h-6">
                <p className="text-blue2 dark:text-white text-[16px] font-bold">{author}</p>
                <p className="text-gray dark:text-gray2 text-[14px]">{emailShort}</p>
                <p className="text-gray dark:text-gray2 text-[14px]">·</p>
                <p className="text-gray dark:text-gray2 text-[14px]">{formattedDate}</p>
            </div>

            <div className="flex flex-col items-start gap-1 h-21 w-full ">
                <p className="text-blue2 dark:text-white text-[18px] font-bold">{title}</p>
                <p className="text-blue2 dark:text-gray-slate-light text-[16px] font-jakarta">
                    {content}
                </p>
            </div>

            {/* TODO FaHeart se já tiver dado like */}
            <div className="flex justify-between items-center w-full h-6">
                <FaRegHeart className="size-6 text-red cursor-pointer" />
            </div>
        </div>
    );
}
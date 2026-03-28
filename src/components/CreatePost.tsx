import { FaRegImage } from "react-icons/fa";

export default function CreatePost() {
    return (
        <div className="bg-white dark:bg-blue-midnight3 border-blue-steel3 dark:border-gray border rounded-xl w-full h-41 flex flex-col items-start shadow-lg mb-6">
            <div className="p-4 w-full">
                <textarea
                    className="outline-none resize-none w-full h-18 pt-2 pb-9 px-3 overflow-clip text-[18px] text-gray dark:font-weight-500"
                    rows={2}
                    maxLength={116}
                    name="createPost"
                    id="createPost"
                    placeholder="E aí, o que está rolando?"
                ></textarea>
                <div className="border-t border-blue-steel3 dark:border-gray/30 pt-3 flex justify-space-between">
                    <FaRegImage className="size-8 text-blue mr-auto self-end" />
                    <button className="bg-blue text-white font-bold py-2 px-4 rounded-full cursor-pointer shadow-lg shadow-blue/20">
                        Postar
                    </button>
                </div>
            </div>
        </div>
    );
}
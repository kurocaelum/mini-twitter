import { FaRegImage } from "react-icons/fa";

export default function CreatePost() {
    return (
        <div className="bg-white border-blue-steel3 border rounded-xl w-full h-41 flex flex-col items-start shadow-lg">
            <div className="p-4 w-full">
                <textarea
                    className="outline-none resize-none w-full h-18 pt-2 pb-9 px-3 overflow-clip"
                    rows={3}
                    maxLength={130}
                    name="createPost"
                    id="createPost"
                    placeholder="E aí, o que está rolando?"
                ></textarea>
                <div className="border-t border-blue-steel3 pt-3 flex justify-space-between">
                    <FaRegImage className="size-8 text-blue mr-auto" />
                    <button className="bg-blue text-white font-bold py-2 px-4 rounded-full cursor-pointer">
                        Postar
                    </button>
                </div>
            </div>
        </div>
    );
}
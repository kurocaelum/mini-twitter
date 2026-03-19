import { useState } from "react";
import LoginTabButtons from "../components/LoginTabButtons";
import LoginTabContent from "../components/LoginTabContent";
import SignupTabContent from "../components/SignupTabContent";

export default function Login() {
    const [activeTab, setActiveTab] = useState(0);
    let content;

    if (activeTab === 0) 
        content = <LoginTabContent></LoginTabContent>;
    else 
        content = <SignupTabContent></SignupTabContent>;
    

    return  (
        <div className="bg-white2 flex h-screen justify-center items-center">
            <div className="w-120">
                <p className="font-bold text-blue text-[40px] text-center mb-14">Mini Twitter</p>
                <LoginTabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
                {content}               
            </div>
        </div>
    )
}
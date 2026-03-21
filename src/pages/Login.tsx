import { useState } from "react";
import LoginTabButtons from "../components/LoginTabButtons";
import LoginTabContent from "../components/LoginTabContent";
import SignupTabContent from "../components/SignupTabContent";
import { useSearchParams } from "react-router-dom";

export default function Login() {
    // TODO toSignup como query param
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab");
    
    const [activeTab, setActiveTab] = useState(tab === "signup" ? 1 : 0);
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
import { useState } from "react";
import TabButtonGroup from "../components/TabButtonGroup";
import LoginTabContent from "../layout/LoginTabContent";
import SignupTabContent from "../layout/SignupTabContent";
import { useSearchParams } from "react-router-dom";

export default function Auth() {
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab");
    
    const [activeTab, setActiveTab] = useState(tab === "signup" ? 1 : 0);
    let content;

    if (activeTab === 0) 
        content = <LoginTabContent />;
    else 
        content = <SignupTabContent />;
    

    return  (
        <div className="bg-white2 dark:bg-dark-gradient flex h-screen justify-center items-center">
            <div className="w-120">
                <p className="font-bold text-blue dark:text-white text-[40px] text-center mb-14">Mini Twitter</p>
                <TabButtonGroup activeTab={activeTab} setActiveTab={setActiveTab} />
                {content}               
            </div>
        </div>
    )
}
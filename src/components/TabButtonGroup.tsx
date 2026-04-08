export default function TabButtonGroup({activeTab, setActiveTab}: {activeTab: number, setActiveTab: (tab: number) => void}) {
    const activeStyle = "border-b-[3px] py-2 border-blue text-blue dark:text-white2 font-bold cursor-pointer outline-blue";
    const inactiveStyle = "border-b py-2 border-b-gray/20 text-gray dark:border-b-gray-slate dark:text-blue-steel font-bold cursor-pointer outline-blue";

        return (
            <div className="grid grid-cols-2 mb-14">
                <button className={activeTab === 0 ? activeStyle : inactiveStyle} onClick={() => setActiveTab(0)}>
                    Login
                </button>
                <button className={activeTab === 1 ? activeStyle : inactiveStyle} onClick={() => setActiveTab(1)}>
                    Cadastrar
                </button>
            </div>
        )
}
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

// import { FaSearch, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="w-full top-0 fixed backdrop-blur-md px-10 py-3 flex items-center justify-between border-b bg-white2 dark:bg-navy-dark/80 border-blue-steel3 dark:border-gray">
            <Logo />

            {/* Search Input */}
            <div className="flex flex-1 justify-center">
                <div className="flex items-center w-119.5 h-10 py-2 px-4 text-[14px] text-gray border rounded border-blue-steel3 dark:border-blue-midnight3 bg-white dark:bg-blue-midnight3 outline-blue">
                    <FaSearch className="w-4.5 h-4.5" />
                    <input
                        className="outline-none w-full ml-2 mr-2"
                        type="text"
                        placeholder="Buscar por post..."
                    />
                </div>
            </div>

            {/* TODO conditional rendering entre icone signout e auth button group */}
            
            {/* TODO logout deve trocar o botão de logout pelos botões de login e registro */}
            {/* <div className="w-80 flex justify-end">
                <button className="rounded-full bg-blue dark:bg-blue-midnight3 text-white dark:text-white2 w-10 h-10 flex items-center justify-center cursor-pointer">
                    <FaSignOutAlt />
                </button>
            </div> */}

            <div className="w-80 h-10">
                <Link tabIndex={-1} to="/login?tab=signup">
                    <button className="w-39 h-10 mr-2 rounded-full border border-blue-steel3 dark:border-gray bg-white dark:bg-navy-dark/80 text-gray dark:text-white font-bold cursor-pointer outline-gray shadow-lg shadow-blue/20">Registrar-se</button>
                </Link>
                <Link tabIndex={-1} to="/login">
                    <button className="w-39 h-10 rounded-full bg-blue text-white font-bold cursor-pointer outline-blue2 shadow-lg shadow-blue/20">Login</button>
                </Link>
            </div>
        </nav>
    )
}
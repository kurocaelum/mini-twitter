import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "../hooks/useTheme"

export default function ThemeButton() {
    const { theme, toggle } = useTheme()

    return (
        <button onClick={toggle} className="size-10 flex items-center justify-center rounded-full bg-blue text-white text-[20px] font-bold cursor-pointer outline-blue2 shadow-lg shadow-blue/20">
            {theme === 'dark' ? (
                <FaSun />
            ) : (
                <FaMoon />
            )}
        </button>
    )
}
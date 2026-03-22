import Logo from "./Logo";

export default function FooterLogo() {
    return (
        <div className="dark:bg-blue-midnight dark:border-t dark:border-gray w-full bottom-0 fixed backdrop-blur-md px-10 py-3 flex items-center justify-between">
            <Logo />
        </div>
    )
}
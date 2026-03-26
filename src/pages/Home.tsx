import FooterLogo from "../components/FooterLogo";
import Navbar from "../components/Navbar";
import PostContainer from "../components/PostContainer";

export default function Home() {

    return (
        <div className="bg-white2 dark:bg-dark-gradient flex flex-col justify-between min-h-screen">
            <Navbar />
            <PostContainer />
            <FooterLogo />
        </div>
    )
}
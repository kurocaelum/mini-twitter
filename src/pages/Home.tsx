import FooterLogo from "../layout/FooterLogo";
import Navbar from "../layout/Navbar";
import PostContainer from "../layout/PostContainer";

export default function Home() {

    return (
        <div className="bg-white2 dark:bg-dark-gradient flex flex-col justify-between min-h-screen">
            <Navbar />
            <PostContainer />
            <FooterLogo />
        </div>
    )
}
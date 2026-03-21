import FooterLogo from "../components/FooterLogo";
import Navbar from "../components/Navbar";
import PostContainer from "../components/PostContainer";

export default function Home() {
    return (
        <div className="flex flex-col justify-between">
            <Navbar />
            <PostContainer />
            <FooterLogo />
        </div>
    )
}


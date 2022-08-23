import Main from "../components/Main/Main";
import {useState} from "react"
import videos from "../data/video-details.json"

function HomePage() {
    const [featuredVideo, setFeaturedVideo] = useState(videos[0]);
    return <Main featuredVideo={featuredVideo} setFeaturedVideo={setFeaturedVideo} />
}

export default HomePage;
import Main from "../components/Main/Main";
import { useParams } from "react-router-dom"
import { useState } from "react";
import videos from "../data/video-details.json"

function VideoPage () {
    const {videoId} = useParams()
    const videoToDisplay = videos.find(video=> video.id === videoId)

    const [featuredVideo, setFeaturedVideo] = useState(videoToDisplay);
    return <Main featuredVideo={featuredVideo} setFeaturedVideo={setFeaturedVideo} />;
}

export default VideoPage;
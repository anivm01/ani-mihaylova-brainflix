import Comments from "../Comments/Comments";
import Details from "../Details/Details";
import NextVideoList from "../NextVideoList/NextVideoList";
import Video from "../Video/Video";
import "./Main.scss";
import videos from "../../data/video-details.json";
import videosList from "../../data/videos.json"
import { useState } from "react";

function Main() {
    const [featuredVideo, setFeaturedVideo] = useState(videos[0]);
    
    function handleVideoSelection (videoId) {
        videos.forEach((video)=>{
            if (videoId === video.id)
            setFeaturedVideo(video)
        })
    };

    const nonFeaturedVideos = videosList.filter((nextVideo)=>nextVideo.id !== featuredVideo.id)
    const comments = featuredVideo.comments;

  return (
    <main className="main">
        <Video image={featuredVideo.image} />
        <div className="main__container">
            <div className="main__featured">
                <Details
                    title={featuredVideo.title}
                    timestamp={featuredVideo.timestamp}
                    channel={featuredVideo.channel}
                    views={featuredVideo.views}
                    likes={featuredVideo.likes}
                    description={featuredVideo.description} />
                <Comments commentsArray={comments} />
            </div>
            <NextVideoList videosList={nonFeaturedVideos} handleVideoSelection={handleVideoSelection}/>
        </div>
    </main>
  )
}

export default Main
import "./NextVideoList.scss";
import videosList from "../../data/videos.json"
import NextVideo from "../NextVideo/NextVideo";

function NextVideoList(){
    return (
        <section className="next-video-list">
            <h2 className="next-video-list__title">Next Videos</h2>
            {videosList.map(
                (video) => {
                return (
                    <NextVideo
                        key={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel} 
                    />
                    )
                }
            )}
        </section>
    )
}

export default NextVideoList;
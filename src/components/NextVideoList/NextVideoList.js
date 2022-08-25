import "./NextVideoList.scss";
import NextVideo from "../NextVideo/NextVideo";

function NextVideoList({videosList}){
    return (
        <section className="next-video-list">
            <h2 className="next-video-list__title">Next Videos</h2>
            {videosList.map(
                (nextVideo) => {
                    return (
                        <NextVideo
                            id={nextVideo.id}
                            key={nextVideo.id}
                            image={nextVideo.image}
                            title={nextVideo.title}
                            channel={nextVideo.channel} 
                        />
                        )
                }
            )}
        </section>
    )
}

export default NextVideoList;
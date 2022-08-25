import Comments from "../Comments/Comments";
import Details from "../Details/Details";
import NextVideoList from "../NextVideoList/NextVideoList";
import Video from "../Video/Video";
import "./Main.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchVideos, fetchVideoByID } from "../../utilities/api"
import Loading from "../Loading/Loading";

function Main() {
    const [videosList, setVideosList] = useState([]);
    const [featuredVideo, setFeaturedVideo] = useState();
    const {videoId} = useParams()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        fetchVideos()    
        .then(response => {      
                console.log(`use effect is running`)     
                setVideosList(response.data);
                let selectedvideoId = videoId || response.data[0].id;
                return fetchVideoByID(selectedvideoId)
            })
            .then((videoDetails)=>{
                setFeaturedVideo(videoDetails.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [videoId]);

    if (!featuredVideo) {
        return <Loading />
    }

    const nonFeaturedVideos = videosList.filter((nextVideo)=>nextVideo.id !== featuredVideo.id)

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
                    <Comments commentsArray={featuredVideo.comments} />
                </div>
                <NextVideoList videosList={nonFeaturedVideos}/>
            </div>
        </main>
    )
}

export default Main
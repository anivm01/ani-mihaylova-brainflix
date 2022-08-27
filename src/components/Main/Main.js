import Comments from "../Comments/Comments";
import Details from "../Details/Details";
import NextVideoList from "../NextVideoList/NextVideoList";
import Video from "../Video/Video";
import "./Main.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchVideos, fetchVideoByID } from "../../utilities/api"
import Loading from "../Loading/Loading";
import Error from '../Error/Error';

function Main() {
    const [videosList, setVideosList] = useState([]);
    const [featuredVideo, setFeaturedVideo] = useState();
    const [isError, setIsError] = useState(false);
    const {videoId} = useParams()

    //useEffect hook to handle fetching video list from the api
    //runs only on first page load 

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        fetchVideos()    
        .then(response => {      
                console.log(`use effect is running`)     
                setVideosList(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    //useEffect hook to handle fetching the details about a 
    //specific video based on it's id, runs when video list is populated 
    //and generagets details about the first video in the video list
    //and also whenever a new video id route is selected, generating
    //details about that video

    useEffect (()=>{
        if (videosList.length <=0) {
            console.log("early return")
            return
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        let selectedvideoId = videoId || videosList[0].id;
        fetchVideoByID(selectedvideoId)
        .then(response => {
            setFeaturedVideo(response.data)
        })
        .catch( ()=> {
            setIsError(true)
        }
        )

    }, [videoId, videosList])

    if (isError) {
        return <Error />
    }

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
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
    const [featuredVideo, setFeaturedVideo] = useState(null);
    const [isError, setIsError] = useState(false);
    const {videoId} = useParams()

    //useEffect hook to handle fetching video list from the api
    //runs only on first page load 

    useEffect(() => {
        //api call and response is wrapped in a function used to trigger the api call again if it catches an error
        //apiCallAttempts variable is used to track and limit the number of attempts.
        let apiCallAttempts = 0;
        function populateVideosList(){
            if (apiCallAttempts === 2){
                setIsError(true)
                return
            }
            fetchVideos()    
            .then(response => {      
                    setVideosList(response.data);
                })
                .catch((error) => {
                    populateVideosList()
                    apiCallAttempts++
                    console.log(error)
                    console.log(apiCallAttempts)
                })
        }
        populateVideosList()
    }, []);

    //useEffect hook generates video details from api by video id
    //runs after video list is populated 
    //also runs whenever a new video id route is selected

    useEffect (()=>{
        if (videosList.length <=0) {
            return
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        let selectedvideoId = videoId || videosList[0].id;
        fetchVideoByID(selectedvideoId)
        .then(response => {
            setFeaturedVideo(response.data)
        })
        .catch( (error)=> {
            setIsError(true)
            console.log(error)
        }
        )
    }, [videoId, videosList])

//early return if video id url is wrong or if api has issues
    if (isError) {
        return <Error />
    }

//loading page while waiting for api response
    if (!featuredVideo) {
        return <Loading />
    }
//filter to remove the featured video from the video list
    const nonFeaturedVideos = videosList.filter((nextVideo)=>{
       return nextVideo.id !== featuredVideo.id})

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
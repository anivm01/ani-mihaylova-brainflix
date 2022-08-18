import "./NextVideo.scss"
import { truncatedTitle } from "../../utilities/utillities";

function NextVideo({image, title, channel, handleVideoSelection, id}) {
    return (
        <div onClick={()=>{handleVideoSelection(id)}} className="next-video">
            <img className="next-video__image" src={image} alt={`Thumbnail for ${title}`}/>
            <div className="next-video__info">
                <h3 className="next-video__title">{truncatedTitle(title)}</h3>
                <p className="next-video__channel">{channel}</p>
            </div>
        </div>
    );
}

export default NextVideo;
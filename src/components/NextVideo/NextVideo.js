import "./NextVideo.scss"

function NextVideo({image, title, channel}) {
    return (
        <div className="next-video">
            <img className="next-video__image" src={image} alt={`Thumbnail for ${title}`}/>
            <div className="next-video__info">
                <h3 className="next-video__title">{title}</h3>
                <p className="next-video__channel">{channel}</p>
            </div>
        </div>
    );
}

export default NextVideo;
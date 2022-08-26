import "./Details.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";
import formatDate from "../../utilities/utillities";

// This component is used to display the details about the selected video
//  received from the api call to fetchVideosById()

function Details ({title, channel, timestamp, views, likes, description}) {
    return (
        <section className="details">
            <h1 className="details__title">{title}</h1>
            <div className="details__container">
                <div className="details__stack">
                    <h3 className="details__channel">By {channel}</h3>
                    <span className="details__date">{formatDate(timestamp)}</span>
                </div>
                <div className="details__stack">
                    <span className="details__pair">
                        <img src={viewsIcon} alt="views icon" className="details__icon" />
                        <span className="details__stats">{views}</span>
                    </span>
                    <span className="details__pair">
                        <img src={likesIcon} alt="likes icon" className="details__icon" />
                        <span className="details__stats">{likes}</span>
                    </span>
                </div>
            </div>
            <p className="details__description">{description}</p>
        </section>
    )
}

export default Details;
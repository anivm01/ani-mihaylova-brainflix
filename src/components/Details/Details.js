import "./Details.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";
import formatDate from "../../utilities/utillities";

function Details (props) {

    return (
        <section className="details">
            <h1 className="details__title">{props.title}</h1>
            <div className="details__container">
                <div className="details__stack">
                    <h3 className="details__channel">By {props.channel}</h3>
                    <span className="details__date">{formatDate(props.timestamp)}</span>
                </div>
                <div className="details__stack">
                    <span className="details__pair">
                        <img src={viewsIcon} alt="views icon" className="details__icon" />
                        <span className="details__stats">{props.views}</span>
                    </span>
                    <span className="details__pair">
                        <img src={likesIcon} alt="likes icon" className="details__icon" />
                        <span className="details__stats">{props.likes}</span>
                    </span>
                </div>
            </div>
            <p className="details__description">{props.description}</p>
        </section>
    )
}

export default Details;
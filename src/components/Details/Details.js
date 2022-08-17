import DateComponent from "../DateComponent/DateComponent";
import "./Details.scss"


function Details (props) {

    return (
        <section className="details">
            <h1 className="details__title">{props.title}</h1>
            <div className="details__container">
                <span className="details__creator"></span>
                <DateComponent timestamp={props.timestamp}/>
                <span className="details__views"><img className="details__views-icon" /></span>
                <span className="details__likes"><img className="details__likes-icon" /></span>
            </div>
            <p className="details__description"></p>
        </section>
    )
}

export default Details;
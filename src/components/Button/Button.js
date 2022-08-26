import "./Button.scss"
import { Link } from "react-router-dom";

//Button component to be used to handle both links and buttons
//and create consistency in styling

function Button ({icon, iconText, buttonText, isButton, link}){

    if (isButton) {
        return (
            <button className="button">
                <img src={icon} alt={iconText} className="button__icon" />
                <span className="button__text">{buttonText}</span>
            </button>
        )
    }else {
        return (
        <Link to={link} className="button">
            <img src={icon} alt={iconText} className="button__icon" />
            <span className="button__text">{buttonText}</span>
        </Link>)
    }
}

export default Button;
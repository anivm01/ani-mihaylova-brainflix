import "./Button.scss"

function Button (prop){
    return (
        <button className="button">
            <img src={prop.icon} alt={prop.iconText} className="button__icon" />
            <span className="button__text">{prop.buttonText}</span>
        </button>
    )
}

export default Button;
import "./Comment.scss";
import formatDate from "../../utilities/utillities";

function Comment (props) {
    return (
        <div className="comment">
            <div className="comment__image"></div>
            <div className="comment__container">
                <p className="comment__name">{props.name}</p>
                <span className="comment__date">{formatDate(props.timestamp)}</span>
                <p className="comment__content">{props.content}</p>
            </div>
        </div>
        
    )
}

export default Comment;
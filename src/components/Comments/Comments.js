import "./Comments.scss"
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

function Comments (props) {
    return (
        <section className="comments">
            <h3 className="comments__count">{props.commentsArray.length} Comments</h3>
            <CommentForm />
            {props.commentsArray.map((comment)=>{
                return (
                    <Comment 
                        key={comment.timestamp}
                        name={comment.name}
                        content={comment.comment}
                        timestamp={comment.timestamp} />
                )
            })}
        </section>
    )
}

export default Comments;
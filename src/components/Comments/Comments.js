import "./Comments.scss"
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

//receives an array of comments and maps through it
//creating a single comment component for each comment in the array

function Comments ({commentsArray}) {
    return (
        <section className="comments">
            <h3 className="comments__count">{commentsArray.length} Comments</h3>
            <CommentForm />
            {commentsArray.map((comment)=>{
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
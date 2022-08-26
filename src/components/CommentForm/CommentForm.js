import Button from "../Button/Button";
import "./CommentForm.scss"
import commentIcon from "../../assets/images/add_comment.svg"
import profile from "../../assets/images/Mohan-muruge.jpg"

// form component can be used to post comments
// form functionality currently disabled 

function CommentForm () {
    return (
        <div className="comment-form">
            <img src={profile} alt="Mohan in profile" className="comment-form__profile-pic" />
            <form onSubmit={(event)=>{event.preventDefault()}} className="comment-form__form">
                <label htmlFor="comment" className="comment-form__title">Join the conversation</label>
                <textarea name="comment" id="comment" className="comment-form__input" placeholder="Add a new comment"></textarea>
                <Button 
                isButton={true}
                link = ""
                icon = {commentIcon}
                iconText = "comment icon"
                buttonText = "Comment"
                />
            </form>
        </div>
    )
}

export default CommentForm;
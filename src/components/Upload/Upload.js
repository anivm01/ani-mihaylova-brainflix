import "./Upload.scss"
import placeholderImage from "../../assets/images/Upload-video-preview.jpg"
import publishIcon from "../../assets/images/publish.svg"
import Button from "../Button/Button";
import {Link} from "react-router-dom";

function Upload () {
    return (
        <main className="upload">
            <h1 className="upload__title" >Upload Video</h1>
            <form className="upload__form">
                <label className="upload__label">
                    Video Thumbnail
                    <img className="upload__thumbnail" src={placeholderImage} alt="video preview placeholder"/>
                </label>
                <div className="upload__text">
                    <label className="upload__label">
                        Title Your Video
                        <input className="upload__field upload__field--input" type="text" placeholder="Add a title to your video" />
                    </label>
                    <label className="upload__label">
                        Add a Video Description
                        <textarea className="upload__field upload__field--textarea" placeholder="Add a description to your video"></textarea>
                    </label>
                </div>
                <div className="upload__actions" >
                    <Button 
                    isButton={true}
                    link = ""
                    icon = {publishIcon}
                    iconText = "publish icon"
                    buttonText = "Publish"
                    />
                    <Link to="/" className="upload__cancel"> Cancel</Link>
                </div>
            </form>

        </main>
    )
}

export default Upload;
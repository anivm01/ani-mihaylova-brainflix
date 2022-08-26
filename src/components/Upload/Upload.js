import "./Upload.scss"
import placeholderImage from "../../assets/images/Upload-video-preview.jpg"
import publishIcon from "../../assets/images/publish.svg"
import Button from "../Button/Button";
import {Link } from "react-router-dom";
import UploadComplete from "../UploadComplete/UploadComplete";
import {useState} from 'react'

//component that renders when upload button on header is clicked
// contains a form to upload a new video

function Upload () {
    const [visible, setVisible] = useState(false)
    
    function handlePublish(event) {
        event.preventDefault()  
        setVisible(true)
    }

    return (
        <main className="upload">
            <h1 className="upload__title" >Upload Video</h1>
            <form onSubmit={(event)=>handlePublish(event)} className="upload__form">
                <label className="upload__label">
                    Video Thumbnail
                    <img className="upload__thumbnail" src={placeholderImage} alt="video preview placeholder"/>
                </label>
                <div className="upload__text">
                    <label htmlFor="video-title" className="upload__label">
                        Title Your Video
                        <input className="upload__field upload__field--input" type="text" id="video-title" name="video-title" placeholder="Add a title to your video" />
                    </label>
                    <label htmlFor="video-description" className="upload__label">
                        Add a Video Description
                        <textarea className="upload__field upload__field--textarea" id="video-description" name="video-description"  placeholder="Add a description to your video"></textarea>
                    </label>
                </div>
                <div className="upload__actions" >
                    <Button 
                    isButton={true}
                    icon = {publishIcon}
                    iconText = "publish icon"
                    buttonText = "Publish"
                    />
                    <Link to="/" className="upload__cancel"> Cancel</Link>
                </div>
            </form>
            <UploadComplete visible={visible} setVisible={setVisible}/>
        </main>
    )
}

export default Upload;
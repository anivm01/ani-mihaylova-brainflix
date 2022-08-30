import "./Upload.scss"
import placeholderImage from "../../assets/images/Upload-video-preview.jpg"
import publishIcon from "../../assets/images/publish.svg"
import Button from "../Button/Button";
import {Link } from "react-router-dom";
import UploadComplete from "../UploadComplete/UploadComplete";
import {useState} from 'react'
import axios from "axios";

//component that renders when upload button on header is clicked
// contains a form to upload a new video

function Upload () {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isError, setIsError] = useState(false);

//make input fields controlled

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
      };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };
    
//handle form submission and post request to post new video
    function handlePublish(event) {
        event.preventDefault()
        axios.post("http://localhost:8000/videos/", {
            title, description
        })
        .then(() =>{
            setTitle("")
            setDescription("")
            if(isError){setIsError(false)}
            setVisible(true)
        })
        .catch(error=>{
            setIsError(true)
        })
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
                        <input 
                            onChange={handleChangeTitle}
                            value={title}
                            className={`upload__field upload__field--input ${(isError && title.length<=0) && "upload__field--invalid"}`} 
                            type="text" 
                            id="video-title" 
                            name="video-title" 
                            placeholder="Add a title to your video" />
                    </label>
                    <label htmlFor="video-description" className="upload__label">
                        Add a Video Description
                        <textarea 
                            onChange={handleChangeDescription}
                            value={description}
                            className={`upload__field upload__field--textarea ${(isError && description.length<=0) && "upload__field--invalid"}`} 
                            id="video-description" 
                            name="video-description"  
                            placeholder="Add a description to your video">
                        </textarea>
                    </label>
                    <p className="upload__error">{isError ? "Make sure to fill out all the fields" : ""}</p>
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
import "./UploadComplete.scss"
import {Link} from "react-router-dom"
import closeButton from "../../assets/images/close.svg"

function UploadComplete ( {visible, setVisible} ) {
    if (visible){
        return (
            <div className="complete">
                <div className="complete__container">
                    <img onClick={()=>{setVisible(false)}}className="complete__close" src={closeButton} alt="close button for popup"/>
                    <h2 className="complete__text" >Your video was uploaded successfully!</h2>
                    <Link className="complete__link" to="/">Home</Link>
                </div>
            </div>
        )
    }else {
        return null
    }

}

export default UploadComplete;
import "./UploadComplete.scss"
import {Link} from "react-router-dom"

function UploadComplete ( {visible} ) {
    if (visible){
        return (
            <div className="complete">
                <div className="complete__container">
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
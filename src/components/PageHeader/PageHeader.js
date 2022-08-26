import './PageHeader.scss'
import logo from "../../assets/images/BrainFlix-logo.svg"
import profile from "../../assets/images/Mohan-muruge.jpg"
import Button from '../Button/Button'
import uploadIcon from "../../assets/images/upload.svg"
import { Link } from "react-router-dom";

//component renders as header on every page

function PageHeader () {
    return(
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo}  alt="Brainflix Logo" />
            </Link>
            <form onSubmit={(event)=>{event.preventDefault()}}className="header__search">
                <input type="text" className="header__input" placeholder="Search" />
            </form>
            <img src={profile} alt="Mohan in profile" className="header__profile-pic" />
            <Button
            isButton={false}
            link = "/upload" 
            icon = {uploadIcon}
            iconText = "upload icon"
            buttonText = "Upload"
            />
        </header>
    )
}

export default PageHeader;
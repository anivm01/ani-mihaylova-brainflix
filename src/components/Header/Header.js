import './Header.scss'
import logo from "../../assets/images/BrainFlix-logo.svg"
import profile from "../../assets/images/Mohan-muruge.jpg"
import Button from '../Button/Button'
import uploadIcon from "../../assets/images/upload.svg"

function Header () {
    return(
        <header className="header">
            <a href="/" className="header__logo">
                <img src={logo}  alt="Brainflix Logo" />
            </a>
            <form className="header__search">
                <input type="text" className="header__input" placeholder="Search" />
            </form>
            <img src={profile} alt="Mohan in profile" className="header__profile-pic" />
            <Button 
            icon = {uploadIcon}
            iconText = "upload icon"
            buttonText = "Upload"
            />
            
        </header>
    )
}

export default Header;
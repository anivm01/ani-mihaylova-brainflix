import './Header.scss'
import logo from "../../assets/images/BrainFlix-logo.svg"
import profile from "../../assets/images/Mohan-muruge.jpg"


function Header () {
    return(
        <header className="header">
            <a href="/" className="header__logo">
                <img src={logo}  alt="Brainflix Logo" />
            </a>
            <input type="text" className="header__search" />
            <img src={profile} alt="Mohan in profile" className="header__profile-pic" />
        </header>
    )
}

export default Header;
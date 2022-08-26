import "./Error.scss"
import error from "../../assets/images/error.svg"

function Error() {
  return (
    <div className="error">
        <h2> Oops! Something went wrong. Please try again later!</h2>
        <img src={error} alt="a big warning sign and people trying to fix it"/>
    </div>
  )
}

export default Error
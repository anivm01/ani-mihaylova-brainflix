import "./Video.scss"

function Video ({ image }) {
    return (
        <div className="video">
            <video className="video__player" poster={image} controls="controls"></video>
        </div>
    )

}

export default Video
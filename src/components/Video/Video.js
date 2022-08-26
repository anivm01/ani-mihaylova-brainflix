import "./Video.scss"

//renders the video player with the currently selected video. 
//currently only displays the video poster, video itself is unavailable

function Video ({ image }) {
    return (
        <div className="video">
            <video className="video__player" poster={image} controls="controls"></video>
        </div>
    )
}

export default Video
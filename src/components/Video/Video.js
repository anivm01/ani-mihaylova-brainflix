import "./Video.scss"

function Video (props) {
    return (
        <div className="video">
            <video className="video__player" poster={props.image} controls="controls"></video>
        </div>
    )

}

export default Video
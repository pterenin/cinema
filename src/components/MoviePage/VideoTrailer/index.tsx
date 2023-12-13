
import { VideoDetailsType } from "../../../Types/types";

interface PropTypes {
    videoDetails: VideoDetailsType;
}

function VideoTrailer({ videoDetails }: PropTypes) {
    if (videoDetails.site != "YouTube") return <></>; // Render only Youtube
    var videoKey = videoDetails.key;
    const videoSrc = `https://www.youtube.com/embed/${videoKey}`;
    return (
        <iframe
            src={videoSrc}
            allowFullScreen
            title="Embedded YouTube Video"
        ></iframe>
    );
}

export default VideoTrailer;

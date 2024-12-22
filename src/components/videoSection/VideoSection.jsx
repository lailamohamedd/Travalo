import { FaPlay } from "react-icons/fa";
import "./videoSection.scss";
import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div className="video_section activity">
        <div className="video_section_icon" onClick={() => setShowVideo(true)}>
          <FaPlay />
        </div>
      </div>
      {showVideo && (
        <div className="video_player">
          <div
            className="video_player_icon"
            onClick={() => setShowVideo(false)}
          >
            <IoClose />
          </div>
          <ReactPlayer
            width={"80%"}
            height={"80%"}
            controls={false}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            playing={true}
          />
        </div>
      )}
    </>
  );
};

export default VideoSection;

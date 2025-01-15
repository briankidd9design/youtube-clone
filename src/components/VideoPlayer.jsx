import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import useCurrentProfile from "../hooks/useCurrentProfile";
import { addVideoView } from "../utils/supabase";

function VideoPlayer() {
  return (
    <div data-vjs-player>
      <video controls className="video-js vjs-fluid vjs-big-play-centered" />
    </div>
  );
}

const VideoPlayerComponent = React.memo(VideoPlayer);
VideoPlayerComponent.name = "VideoPlayerComponent";
export default VideoPlayerComponent;

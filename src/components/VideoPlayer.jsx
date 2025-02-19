import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import useCurrentProfile from "../hooks/useCurrentProfile";
import { addVideoView } from "../utils/supabase";
import { useQuery } from "@tanstack/react-query";

function VideoPlayer({ previewUrl, video }) {
  const videoRef = React.useRef(null);
  const profile = useCurrentProfile();
  const profileId = profile?.id;

  useQuery(["View"], () => {
    const view = {
      profile_id: profileId,
      video_id: video?.id,
    };
    return addVideoView(view);
  });
  React.useEffect(() => {
    // we can set the source and the poster
    const vjsPlayer = videojs(videoRef.current);
    if (!previewUrl) {
      vjsPlayer.poster(video.thumbnail);
      vjsPlayer.src({ type: "video/mp4", src: video.url });
    }
    if (previewUrl) {
      vjsPlayer.src({ type: "video/mp4", src: previewUrl });
    }
  }, [previewUrl, video]);
  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        controls
        className="video-js vjs-fluid vjs-big-play-centered"
      />
    </div>
  );
}

const VideoPlayerComponent = React.memo(VideoPlayer);
VideoPlayerComponent.name = "VideoPlayerComponent";
export default VideoPlayerComponent;

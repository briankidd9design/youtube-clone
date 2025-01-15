import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../styles/Avatar";
import Wrapper from "../styles/VideoCard";
import { formatCreatedAt } from "../utils/date";
import DeleteVideoDropdown from "./DeleteVideoDropdown";

function VideoCard() {
  return (
    <Wrapper>
      <Link to={`/watch/video_id`}>
        <img
          className="thumb"
          src={video.thumbnail}
          alt="thumbnail"
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="video-info-container">
        <div className="channel-avatar">
          <Avatar
            style={{ marginRight: "0.8rem" }}
            src=""
            alt="channel avatar"
          />
        </div>
        <div className="video-info">
          <Link to={`/watch/video_id`}>
            <h4 className="truncate">title</h4>
          </Link>
          <Link to={`/channel/profile_id`}>
            <span className="secondary">username</span>
          </Link>
          <p className="secondary leading-4">
            <span>0 views</span> <span>•</span> <span>15 minutes ago</span>
          </p>
        </div>
        {/* DeleteVideoDropdown */}
      </div>
    </Wrapper>
  );
}

export default VideoCard;

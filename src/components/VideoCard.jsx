import { Link } from "react-router-dom";
import Avatar from "../styles/Avatar";
import Wrapper from "../styles/VideoCard";
import { formatCreatedAt } from "../utils/date";
import DeleteVideoDropdown from "./DeleteVideoDropdown";

function VideoCard({ video, hideAvatar, noUsername }) {
  return (
    <Wrapper>
      <Link to={`/watch/${video.id}`}>
        <img
          className="thumb"
          src={video.thumbnail}
          alt="thumbnail"
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="video-info-container">
        {!hideAvatar && (
          <div className="channel-avatar">
            <Avatar
              style={{ marginRight: "0.8rem" }}
              src={video.profile.avatar}
              alt="channel avatar"
            />
          </div>
        )}
        <div className="video-info">
          <Link to={`/watch/${video.id}`}>
            <h4 className="truncate">{video.title}</h4>
          </Link>
          {!noUsername && (
            <Link to={`/channel/${video.profile.id}`}>
              <span className="secondary">{video.profile.username}</span>
            </Link>
          )}
          <p className="secondary leading-4">
            <span>{video.view[0].count} views</span> <span>•</span>{" "}
            <span>{formatCreatedAt(video.created_at)}</span>
          </p>
        </div>
        <DeleteVideoDropdown video={video} />
      </div>
    </Wrapper>
  );
}

export default VideoCard;

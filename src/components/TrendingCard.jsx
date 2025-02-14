import { Link } from "react-router-dom";
import Wrapper from "../styles/TrendingCard";
import { formatCreatedAt } from "../utils/date";

function TrendingCard({ video }) {
  return (
    <Wrapper>
      <Link to={`/watch/${video.id}`}>
        <img className="thumb" src={video.thumbnail} alt={video.title} />
      </Link>
      <div className="video-info-container">
        <Link to={`/watch/${video.id}`}>
          <h3>{video.title}</h3>
        </Link>
        <p className="secondary">
          <span>{video.profile.username}</span>
          <span>•</span>
          <span>{video.view[0].count} views</span>
          <span>•</span> <span>{formatCreatedAt(video.created_at)}</span>
        </p>
        <p className="secondary">{video.description.substr(0, 130)}</p>
      </div>
    </Wrapper>
  );
}

export default TrendingCard;

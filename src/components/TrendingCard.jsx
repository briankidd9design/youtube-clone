import { Link } from "react-router-dom";
import Wrapper from "../styles/TrendingCard";
import { formatCreatedAt } from "../utils/date";

function TrendingCard() {
  return (
    <Wrapper>
      <Link to={`/watch/video_id`}>
        <img className="thumb" src="" alt="" />
      </Link>
      <div className="video-info-container">
        <Link to={`/watch/video_id`}>
          <h3>title</h3>
        </Link>
        <p className="secondary">
          <span>username</span>
          <span>•</span>
          <span>0 views</span>
          <span>•</span> <span>15 minutes ago</span>
        </p>
        <p className="secondary">description...</p>
      </div>
    </Wrapper>
  );
}

export default TrendingCard;

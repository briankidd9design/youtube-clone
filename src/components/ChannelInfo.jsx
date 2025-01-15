import { Link } from "react-router-dom";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Wrapper from "../styles/ChannelInfo";
import SubscribeButton from "./SubscribeButton";

function ChannelInfo() {
  return (
    <Wrapper>
      <Link to={`/channel/channel_id`} className="avatar-channel">
        <img src="" alt="avatar" />
        <div className="channel-info-meta">
          <h3>username</h3>
          <p className="secondary">
            <span>0 subscribers</span> <span className="to-hide">•</span>{" "}
            <span className="to-hide">0 videos</span>
          </p>
        </div>
      </Link>
      {/* SubscribeButton */}
    </Wrapper>
  );
}

export default ChannelInfo;

import { Link } from "react-router-dom";
import Wrapper from "../styles/ChannelTabChannels";

function ChannelTabChannels() {
  return (
    <Wrapper>
      <Link to={`/channel/profile_id`}>
        <div className="channel">
          <img src="" alt="avatar" />
          <h3>username</h3>
        </div>
      </Link>
    </Wrapper>
  );
}

export default ChannelTabChannels;

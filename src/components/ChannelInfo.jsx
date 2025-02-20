import { Link } from "react-router-dom";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Wrapper from "../styles/ChannelInfo";
import SubscribeButton from "./SubscribeButton";

function ChannelInfo({ channel }) {
  const profile = useCurrentProfile();
  const isMe = channel.id === profile?.id;
  return (
    <Wrapper>
      <Link to={`/channel/${channel.id}`} className="avatar-channel">
        <img src={channel.avatar} alt="avatar" />
        <div className="channel-info-meta">
          <h3>{channel.username}</h3>
          <p className="secondary">
            <span>
              {channel.subscription_subscribed_to_id_fkey[0].count} subscribers
            </span>{" "}
            <span className="to-hide">•</span>{" "}
            <span className="to-hide">{channel.video[0].count} videos</span>
          </p>
        </div>
      </Link>
      {!isMe && <SubscribeButton subscribedToId={channel.id} />}
    </Wrapper>
  );
}

export default ChannelInfo;

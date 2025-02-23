import { Link } from "react-router-dom";
import Wrapper from "../styles/ChannelTabChannels";

function ChannelTabChannels({ channels }) {
  if (!channels.length) {
    return <p>Not subscribed to any channels yet</p>;
  }

  return (
    <Wrapper>
      {console.log(channels)}
      {channels.map((channel) => (
        <Link key={channel.profile.id} to={`/channel/${channel.profile.id}`}>
          <div className="channel">
            <img src={channel.profile.avatar} alt="avatar" />
            <h3>{channel.profile.username}</h3>
          </div>
        </Link>
      ))}
    </Wrapper>
  );
}

export default ChannelTabChannels;

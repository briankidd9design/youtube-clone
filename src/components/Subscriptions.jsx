import { Link } from "react-router-dom";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Wrapper from "../styles/Subscriptions";

function Subscriptions() {
  return (
    <Wrapper>
      <h4>Subscriptions</h4>
      <Link to={`/channel/channel_id`}>
        <div className="channel">
          <img src="" alt="avatar" />
          <span>username</span>
        </div>
      </Link>
    </Wrapper>
  );
}

export default Subscriptions;

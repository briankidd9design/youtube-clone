import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import ChannelTabAbout from "../components/ChannelTabAbout";
import ChannelTabChannels from "../components/ChannelTabChannels";
import ChannelTabVideo from "../components/ChannelTabVideo";
import EditProfile from "../components/EditProfile";
import ErrorMessage from "../components/ErrorMessage";
import { VidIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import SubscribeButton from "../components/SubscribeButton";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Skeleton from "../skeletons/ChannelSkeleton";
import Wrapper from "../styles/Channel";
import { getChannel } from "../utils/supabase";

const activeTabStyle = {
  borderBottom: "2px solid white",
  color: "white",
};

function Channel() {
  return (
    <Wrapper editProfile={false}>
      <div className="cover">
        <img src="" alt="channel-cover" />
      </div>

      <div className="header-tabs">
        <div className="header">
          <div className="flex-row">
            <img className="avatar lg" src="" alt="channel avatar" />
            <div>
              <h3>username</h3>
              <span className="secondary">0 subscribers</span>
            </div>
          </div>

          {/* EditProfile */}
          {/* SubscribeButton */}
        </div>

        <div className="tabs">
          <ul className="secondary">
            <li>Videos</li>
            <li>Channels</li>
            <li>About</li>
          </ul>
        </div>
      </div>

      <div className="tab">
        {/* ChannelTabVideo */}
        {/* ChannelTabChannels */}
        {/* ChannelTabAbout */}
      </div>
    </Wrapper>
  );
}

export default Channel;

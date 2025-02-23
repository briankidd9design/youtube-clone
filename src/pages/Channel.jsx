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
  const [tab, setTab] = React.useState("VIDEOS");
  // useCurrentProfile() is coming from the supabase database
  const profile = useCurrentProfile();
  const profileId = profile?.id;
  // useParams() will be used as a param in the app's url
  const { channelId } = useParams();
  // we are either looking at another users channel (channelId) or a different user's channel (profileId)
  const currentChannelId = channelId || profileId;
  const { isLoading, isError, error, data } = useQuery(
    ["Channel", channelId],
    () => getChannel(currentChannelId),
    {
      // we are only going to enable this query if currentChannelId is a truthy value
      enabled: !!currentChannelId,
    }
  );

  if (!profile) {
    return (
      <SignUpCard
        icon={<VidIcon />}
        title="Manage your videos"
        description="Sign in to upload and manage your videos, pre-recorded or live"
      />
    );
  }
  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;
  // this will check if the person logged in is looking at his or her own profile
  const isMe = profile?.id === data?.id;

  return (
    <Wrapper editProfile={isMe}>
      <div className="cover">
        <img src={data.cover} alt="channel-cover" />
      </div>

      <div className="header-tabs">
        <div className="header">
          <div className="flex-row">
            <img className="avatar lg" src={data.avatar} alt="channel avatar" />
            <div>
              <h3>{data.username}</h3>
              <span className="secondary">
                {data.subscriberCount} subscribers
              </span>
            </div>
          </div>

          {/* EditProfile */}
          {/* If it is my profile, then I can edit it */}
          {isMe && <EditProfile profile={data} />}
          {/* SubscribeButton */}
          {/* if we are looking at someone else's profile then we can subscribe to them */}
          {!isMe && <SubscribeButton subscribedToId={data.id} />}
        </div>

        <div className="tabs">
          <ul className="secondary">
            <li
              onClick={() => setTab("VIDEOS")}
              style={tab === "VIDEOS" ? activeTabStyle : {}}
            >
              Videos
            </li>
            <li
              onClick={() => setTab("CHANNELS")}
              style={tab === "CHANNELS" ? activeTabStyle : {}}
            >
              Channels
            </li>
            <li
              onClick={() => setTab("ABOUT")}
              style={tab === "ABOUT" ? activeTabStyle : {}}
            >
              About
            </li>
          </ul>
        </div>
      </div>

      <div className="tab">
        {/* ChannelTabVideo */}
        {tab === "VIDEOS" && <ChannelTabVideo videos={data.video} />}
        {/* ChannelTabChannels */}
        {tab === "CHANNELS" && (
          <ChannelTabChannels channels={data.subscribers} />
        )}
        {/* ChannelTabAbout */}
        {tab === "ABOUT" && <ChannelTabAbout about={data.about} />}
      </div>
    </Wrapper>
  );
}

export default Channel;

import { useQuery } from "@tanstack/react-query";
import useCurrentProfile from "../hooks/useCurrentProfile";
import ChannelSuggestions from "../components/ChannelSuggestions";
import ErrorMessage from "../components/ErrorMessage";
import { SubIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import VideoCard from "../components/VideoCard";
import Skeleton from "../skeletons/HomeSkeleton";
import Wrapper from "../styles/Home";
import VideoGrid from "../styles/VideoGrid";
import { getSubscriptionVideos } from "../utils/supabase";

function Subscriptions() {
  const profile = useCurrentProfile();
  const profileId = profile?.id;
  const profileSubs = profile?.subscriptions;
  const { isLoading, isError, error, data } = useQuery(
    ["Subscriptions", profileId],
    () => getSubscriptionVideos(profileSubs),
    {
      // the double negative makes this a boolean statement
      enabled: !!profile,
    }
  );
  console.log(data);
  // if the user is not signed in, then this page will be displayed
  if (!profile) {
    return (
      <SignUpCard
        icon={<SubIcon />}
        title="Don't miss new videos"
        description="Sign in to see updates from your favorite YouTube Channels"
      />
    );
  }
  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;
  // if the user does not have any subscriptions, then suggest channels for the user to subscribe to
  if (!isLoading && !data.length) return <ChannelSuggestions />;
  // finally, if the user is signed AND has subscriptions, then display those subscriptions
  return (
    <Wrapper>
      <div style={{ marginTop: "1.5rem" }} />
      <VideoGrid>
        {data.map((video) => (
          <VideoCard key={video.id} video={video} hideAvatar />
        ))}
      </VideoGrid>
    </Wrapper>
  );
}

export default Subscriptions;

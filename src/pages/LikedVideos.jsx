import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "../components/ErrorMessage";
import { ChannelIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import TrendingCard from "../components/TrendingCard";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Skeleton from "../skeletons/TrendingSkeleton";
import Wrapper from "../styles/Trending";
import { getLikedVideos } from "../utils/supabase";

function LikedVideos() {
  const profile = useCurrentProfile();
  const profileId = profile?.id;
  const { isLoading, isError, error, data } = useQuery(
    ["LikedVideos", profileId],
    () => getLikedVideos(profileId),
    // we can check with a boolean if we have a profile or not
    { enabled: !!profile }
    // () => getLikedVideos(videoId, profileId)
  );
  if (!profile) {
    return (
      <SignUpCard
        icon={<ChannelIcon />}
        title="Save everything you like"
        desscription="Videos that you have liked will show up here"
      />
    );
  }
  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;
  return (
    <Wrapper>
      <h2>Liked Videos</h2>
      {!data.length && (
        <p className="secondary">
          Videos that you have liked will show up here
        </p>
      )}
      {data.map((video) => (
        <TrendingCard key={video.id} video={video} />
      ))}
    </Wrapper>
  );
}

export default LikedVideos;

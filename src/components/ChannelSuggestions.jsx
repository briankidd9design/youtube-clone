import { useQuery } from "@tanstack/react-query";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Skeleton from "../skeletons/SuggestionSkeleton";
import Wrapper from "../styles/Trending";
import { getChannelSuggestions } from "../utils/supabase";
import ChannelInfo from "./ChannelInfo";
import ErrorMessage from "./ErrorMessage";

function ChannelSuggestions() {
  const profile = useCurrentProfile();
  const profileId = profile?.id;
  const { isLoading, isError, error, data } = useQuery(["Channels"], () =>
    getChannelSuggestions(profileId)
  );
  console.log(data);
  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <Wrapper>
      <h2>Suggestions For You</h2>
      {data.map((channel) => (
        <ChannelInfo key={channel.id} channel={channel} />
      ))}
    </Wrapper>
  );
}

export default ChannelSuggestions;

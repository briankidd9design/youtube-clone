import { useQuery } from "@tanstack/react-query";
import ChannelSuggestions from "../components/ChannelSuggestions";
import ErrorMessage from "../components/ErrorMessage";
import { SubIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import VideoCard from "../components/VideoCard";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Skeleton from "../skeletons/HomeSkeleton";
import Wrapper from "../styles/Home";
import VideoGrid from "../styles/VideoGrid";
import { getSubscriptionVideos } from "../utils/supabase";

function Subscriptions() {
  return (
    <Wrapper>
      <div style={{ marginTop: "1.5rem" }} />
      <VideoGrid>{/* Videos from Subscribers */}</VideoGrid>
    </Wrapper>
  );
}

export default Subscriptions;

import { useQuery } from "@tanstack/react-query";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Skeleton from "../skeletons/SuggestionSkeleton";
import Wrapper from "../styles/Trending";
import { getChannelSuggestions } from "../utils/supabase";
import ChannelInfo from "./ChannelInfo";
import ErrorMessage from "./ErrorMessage";

function ChannelSuggestions() {
  return (
    <Wrapper>
      <h2>Suggestions For You</h2>
      {/* ChannelInfo */}
    </Wrapper>
  );
}

export default ChannelSuggestions;

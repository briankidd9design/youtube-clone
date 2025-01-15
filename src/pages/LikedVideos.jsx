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
  return (
    <Wrapper>
      <h2>Liked Videos</h2>
      <p className="secondary">Videos that you have liked will show up here</p>
      {/* Display Liked Videos */}
    </Wrapper>
  );
}

export default LikedVideos;

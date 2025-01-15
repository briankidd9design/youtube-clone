import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { HistoryIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import TrendingCard from "../components/TrendingCard";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Skeleton from "../skeletons/TrendingSkeleton";
import Wrapper from "../styles/Trending";
import { getHistoryVideos } from "../utils/supabase";

function History() {
  return (
    <Wrapper noPad>
      <h2>History</h2>
      <p className="secondary">
        Videos that you have watched will show up here
      </p>
      {/* Display Videos Watched */}
    </Wrapper>
  );
}

export default History;

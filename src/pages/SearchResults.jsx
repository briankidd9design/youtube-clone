import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ChannelInfo from "../components/ChannelInfo";
import ErrorMessage from "../components/ErrorMessage";
import NoResults from "../components/NoResults";
import TrendingCard from "../components/TrendingCard";
import Skeleton from "../skeletons/TrendingSkeleton";
import Wrapper from "../styles/Trending";
import { searchVideosAndProfiles } from "../utils/supabase";

const StyledChannels = styled.div`
  margin-top: 1rem;
`;

function SearchResults() {
  return (
    <Wrapper>
      <h2>Search Results</h2>
      <StyledChannels>{/* Profile Search Results */}</StyledChannels>
      {/* Video Search Results */}
    </Wrapper>
  );
}

export default SearchResults;

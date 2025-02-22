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
  // useParams is a hook provided by React Router DOM that enables access to dynamic parameters from the current URL. It returns an object containing key-value pairs, where the keys are the parameter names defined in the route path, and the values are the corresponding segments from the matched URL.
  // To use useParams, first ensure that react-router-dom is installed and that the component is wrapped within a <BrowserRouter> or a <Routes> context. Then, import useParams from react-router-dom and call it within the functional component. The hook will return an object containing the URL parameters.
  const { searchQuery } = useParams();
  // use the key search results and pass in the search query to the end of the key
  const { isLoading, isError, isSuccess, error, data } = useQuery(
    ["SearchResults", searchQuery],
    () => searchVideosAndProfiles(searchQuery),
    {
      enabled: !!searchQuery,
    }
  );

  console.log(data);
  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;
  if (isSuccess && !data.videos?.length && !data.profiles?.length) {
    return (
      <NoResults
        title="No results found"
        text="Try different keywords or remove search filters"
      />
    );
  }

  return (
    <Wrapper>
      <h2>Search Results</h2>
      <StyledChannels>
        {/* Profile Search Results */}
        {data.profiles?.map((channel) => (
          <ChannelInfo key={channel.id} channel={channel} />
        ))}
      </StyledChannels>
      {/* Video Search Results */}
      {data.videos?.map((video) => (
        <TrendingCard key={video.id} video={video} />
      ))}
    </Wrapper>
  );
}

export default SearchResults;

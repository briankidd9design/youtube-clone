import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "../components/ErrorMessage";
import VideoCard from "../components/VideoCard";
import Skeleton from "../skeletons/HomeSkeleton";
import Wrapper from "../styles/Home";
import VideoGrid from "../styles/VideoGrid";
import { getVideos } from "../utils/supabase";

function Home() {
  return (
    <Wrapper>
      <VideoGrid>{/* Display Videos */}</VideoGrid>
    </Wrapper>
  );
}

export default Home;

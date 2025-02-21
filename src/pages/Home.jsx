import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "../components/ErrorMessage";
import VideoCard from "../components/VideoCard";
import Skeleton from "../skeletons/HomeSkeleton";
import Wrapper from "../styles/Home";
import VideoGrid from "../styles/VideoGrid";
import { getVideos } from "../utils/supabase";

function Home() {
  // React.useEffect(() => {
  //   getVideos().then((videos) => console.log(videos));
  // }, []);

  const {
    isLoading,
    isError,
    error,
    data: videos,
  } = useQuery(["Home"], getVideos);

  if (isLoading) return <Skeleton />;
  if (isError) return <ErrorMessage error={error} />;
  return (
    <Wrapper>
      <VideoGrid>
        {videos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </VideoGrid>
    </Wrapper>
  );
}

export default Home;

import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import CommentList from "../components/AddComment";
import { DislikeIcon, LikeIcon } from "../components/Icons";
import NoResults from "../components/NoResults";
import SubscribeButton from "../components/SubscribeButton";
import VideoCard from "../components/VideoCard";
import VideoPlayer from "../components/VideoPlayer";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Skeleton from "../skeletons/WatchVideoSkeleton";
import Wrapper from "../styles/WatchVideo";
import { formatCreatedAt } from "../utils/date";
import {
  dislikeVideo,
  getVideo,
  getVideoLikes,
  getVideos,
  likeVideo,
  signInWithGoogle,
} from "../utils/supabase";

function WatchVideoPage() {
  const { videoId } = useParams();
  const profile = useCurrentProfile();
  const profileId = profile?.id;

  const {
    isLoading,
    isLoadingVideo,
    data: video,
  } = useQuery(["WatchVideo", videoId], () => getVideo(videoId));
  if (isLoadingVideo) return <Skeleton />;
  if (!video) {
    return (
      <NoResults
        title="Page not found"
        text="The page you are looking for is not found or it may have been removed"
      />
    );
  }

  // console.log(data);
  function handleLikeVideo() {}

  function handleDislikeVideo() {}
  // Does this video belong to the current user
  const isVideoMine = video.profile.id === profileId;
  return (
    <Wrapper filledLike={false} filledDislike={false}>
      <div className="video-container">
        <div className="video">
          {!isLoadingVideo && <VideoPlayer video={video} />}
        </div>

        <div className="video-info">
          <h3>{video.title}</h3>

          <div className="video-info-stats">
            <p>
              <span>{video.view[0].count} views</span> <span>•</span>{" "}
              <span>
                {video.published} {formatCreatedAt(video.created_at)}
              </span>
            </p>

            <div className="likes-dislikes flex-row">
              <p className="flex-row like">
                <LikeIcon onClick={handleLikeVideo} /> <span>{0}</span>
              </p>
              <p className="flex-row dislike" style={{ marginLeft: "1rem" }}>
                <DislikeIcon onClick={handleDislikeVideo} /> <span>{0}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="channel-info-description">
          <div className="channel-info-flex">
            <div className="channel-info flex-row">
              <img
                className="avatar md"
                src={video.profile.avatar}
                alt="channel avatar"
              />
              <div className="channel-info-meta">
                <h4>
                  <Link to={`/channel/${video.profile_id}`}>
                    {video.profile.username}
                  </Link>
                </h4>
                <span className="secondary small">
                  {video.profile.subscription_subscriber_id_fkey[0].count}{" "}
                  subscribers
                </span>
              </div>
            </div>
            {/* SubscribeButton */}
            {!isVideoMine && (
              <SubscribeButton subscribedToId={video?.profile?.id} />
            )}
          </div>

          {/* <p>description</p> */}
          <p>{video.description}</p>
        </div>
        {/* Comment List */}
        <CommentList video={video} />
      </div>

      <div className="related-videos">
        <h3 className="up-next">Up Next</h3>
        {/* More Videos */}
      </div>
    </Wrapper>
  );
}

export default WatchVideoPage;

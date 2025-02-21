import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import CommentList from "../components/AddComment";
import { DislikeIcon, LikeIcon } from "../components/Icons";
import NoResults from "../components/NoResults";
import SubscribeButton from "../components/SubscribeButton";
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
import VideoCard from "../components/VideoCard";

function WatchVideoPage() {
  const { videoId } = useParams();
  const profile = useCurrentProfile();
  const profileId = profile?.id;

  const { isLoading: isLoadingVideo, data: video } = useQuery(
    ["WatchVideo", videoId],
    () => getVideo(videoId)
  );
  const { isLoading: isLoadingLikes, data: likes } = useQuery(
    ["WatchVideo", "Likes", videoId, profileId],
    () => getVideoLikes(videoId, profileId)
  );
  const { isLoading: isLoadingVideos, data: videos } = useQuery(
    ["WatchVideo", "Up Next"],
    () => getVideos()
  );

  // console.log(data);
  function handleLikeVideo() {
    if (!profile) {
      signInWithGoogle();
    } else {
      likeVideo(profile, videoId);
    }
  }

  function handleDislikeVideo() {
    if (!profile) {
      signInWithGoogle();
    } else {
      dislikeVideo(profile, videoId);
    }
  }
  // Does this video belong to the current user
  if (isLoadingVideo || isLoadingLikes || isLoadingVideos) return <Skeleton />;
  if (!video) {
    return (
      <NoResults
        title="Page not found"
        text="The page you are looking is not found or it may have been removed"
      />
    );
  }
  const isVideoMine = video.profile.id === profileId;
  return (
    <Wrapper filledLike={likes.isLiked} filledDislike={likes.isDisliked}>
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
                <LikeIcon onClick={handleLikeVideo} />{" "}
                <span>{likes.likeCount}</span>
              </p>
              <p className="flex-row dislike" style={{ marginLeft: "1rem" }}>
                <DislikeIcon onClick={handleDislikeVideo} />{" "}
                <span>{likes.dislikeCount}</span>
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
            {/* this will determine if the logged in user's video is theirs. The id is the user that uploaded the video. */}
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
        {/* we only want to return the first 20 videos */}
        {videos
          // and number is being
          // as part of react-router, useParams() Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path. We are using useParams() ofr videoId. Also, the param of videoId is a string type and the video.id is a number. Ergo, we cannot use the strict equality !== for the filter and must use the != comparison operator
          .filter((video) => video.id != videoId)
          .slice(0, 20)
          .map((video) => (
            <VideoCard hideAvatar key={video.id} video={video} />
          ))}
      </div>
    </Wrapper>
  );
}

export default WatchVideoPage;

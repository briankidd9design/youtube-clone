import { createClient } from "@supabase/supabase-js";
import { queryClient } from "../components/AppProviders";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function signInWithGoogle() {
  supabase.auth.signInWithOAuth({ provider: "google" });
}

export async function signOut() {
  await supabase.auth.signOut();
  window.location.reload();
}

export async function getCurrentProfile(userId) {
  // profile is the alias of the data
  const { data: profile } = await supabase
    .from("profile")
    .select("*, subscription_subscriber_id_fkey(subscribed_to_id)")
    // check for equality and return a single record
    // see if the user_id column is eqaul to the userId passed to the function
    // because we are returning an array, we use the single function to return a single object
    .eq("user_id", userId)
    .single();
  const subscriptions = profile.subscription_subscriber_id_fkey.map(
    (s) => s.subscribed_to_id
  );
  return { ...profile, subscriptions };
}

export async function getVideos() {
  const { data: videos } = await supabase
    .from("video")
    .select("*, profile(*), view(count)")
    .order("created_at", { ascending: false });

  return videos;
}

export function getLikedVideos() {}

// create function view_count(video) returns bigint as $$
//   select count(*) from view where video_id = $1.id;
// $$ stable language sql;
export async function getTrendingVideos() {
  const { data: videos } = await supabase
    .from("video")
    .select("*, profile(*), view(count)")
    .order("created_at", { ascending: false })
    .order("view_count", { ascending: false });

  return videos;
}

export function getSubscriptionVideos() {}

export function getChannelSuggestions() {}

export function getHistoryVideos() {}

export async function getVideo(videoId) {
  const { data, error } = await supabase
    .from("video")
    .select(
      "*, profile(*, subscription_subscriber_id_fkey(count)), view(count),like(profile_id, type), comment(*,profile(*))"
    )
    .eq("id", videoId)
    .order("created_at", { foreignTable: "comment", ascending: false })
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getVideoLikes(videoId, profileId) {
  const { data } = await supabase
    .from("video")
    .select("like(profile_id, type)")
    .eq("id", videoId)
    .single();
  const likes = data.like.filter((l) => l.type === "like");
  const dislikes = data.like.filter((l) => l.type === "dislike");
  const likeCount = likes.length;
  const dislikeCount = dislikes.length;
  const isLiked = likes.some((l) => l.profile_id === profileId);
  const isDisliked = dislikes.some((l) => l.profile_id === profileId);
  return { likeCount, dislikeCount, isLiked, isDisliked };
}
// this adds a video to the database
export async function addVideo(video) {
  await supabase.from("video").insert([video]);
}

export function getChannel() {}
// This will add view views to the UI
export async function addVideoView(view) {
  return await supabase.from("view").insert([view]);
}

export function addComment() {}

export function searchVideosAndProfiles() {}

export async function likeVideo(profile, videoId) {
  const { data: likes } = await supabase
    .from("like")
    .select("id, profile_id, type")
    .eq("profile_id", profile.id)
    .eq("video_id", videoId);
  const like = likes[0];
  const isLiked = like && like.type === "like";
  const isDisliked = like && like.type === "dislike";

  if (isLiked) {
    // delete like
    await supabase.from("like").delete().eq("id", like.id);
  } else if (isDisliked) {
    // change it to a like
    await supabase.from("like").update({ type: "dislike" }).eq("id", like.id);
  } else {
    // add like
    await supabase.from("like").insert([
      {
        profile_id: profile.id,
        video_id: videoId,
        user_id: profile.user_id,
        type: "like",
      },
    ]);
  }
  await queryClient.invalidateQueries(["WatchVideo", "Likes"]);
}

export async function dislikeVideo(profile, videoId) {
  const { data: likes } = await supabase
    .from("like")
    .select("id, profile_id, type")
    .eq("profile_id", profile.id)
    .eq("video_id", videoId);
  const like = likes[0];
  const isLiked = like && like.type === "like";
  const isDisliked = like && like.type === "dislike";

  if (isDisliked) {
    // delete like
    await supabase.from("like").delete().eq("id", like.id);
  } else if (isLiked) {
    // change it to a like
    await supabase.from("like").update({ type: "like" }).eq("id", like.id);
  } else {
    // add like
    await supabase.from("like").insert([
      {
        profile_id: profile.id,
        video_id: videoId,
        user_id: profile.user_id,
        type: "dislike",
      },
    ]);
  }
  await queryClient.invalidateQueries(["WatchVideo", "Likes"]);
}

export function toggleSubscribeUser() {}

export function uploadImage() {}

export function updateProfile() {}

export async function deleteVideo(videoId) {
  // delete the video if the id is equal to the videoId
  await supabase.from("video").delete().eq("id", videoId);
  // invalidate queries means we want to mark it to be requested again
  await queryClient.invalidateQueries(["Channel"]);
}

export function deleteComment() {}

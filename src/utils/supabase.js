import { createClient } from "@supabase/supabase-js";
// import { queryClient } from "../components/AppProviders";

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
    .select("*")
    // check for equality and return a single record
    // see if the user_id column is eqaul to the userId passed to the function
    // because we are returning an array, we use the single function to return a single object
    .eq("user_id", userId)
    .single();
  return profile;
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
export function getTrendingVideos() {}

export function getSubscriptionVideos() {}

export function getChannelSuggestions() {}

export function getHistoryVideos() {}

export function getVideo() {}

export function getVideoLikes() {}
// this adds a video to the database
export async function addVideo(video) {
  await supabase.from("video").insert([video]);
}

export function getChannel() {}

export function addVideoView() {}

export function addComment() {}

export function searchVideosAndProfiles() {}

export function likeVideo() {}

export function dislikeVideo() {}

export function toggleSubscribeUser() {}

export function uploadImage() {}

export function updateProfile() {}

export function deleteVideo() {}

export function deleteComment() {}

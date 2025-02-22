import { LibIcon } from "../components/Icons";
import SignUpCard from "../components/SignUpCard";
import useCurrentProfile from "../hooks/useCurrentProfile";
import History from "./History";
import LikedVideos from "./LikedVideos";

function Library() {
  const profile = useCurrentProfile();
  if (!profile) {
    return (
      <SignUpCard
        icon={<LibIcon />}
        title="Enjoy your favorite videos"
        description="Sign in to access vidos that you've liked or saved"
      />
    );
  }
  return (
    <>
      <History />
      <LikedVideos />
    </>
  );
}

export default Library;

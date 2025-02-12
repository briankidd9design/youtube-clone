import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Button from "../styles/Button";
import Wrapper from "../styles/UploadVideoModal";
import { addVideo } from "../utils/supabase";
import { CloseIcon } from "./Icons";
import VideoPlayer from "./VideoPlayer";

function UploadVideoModal({
  previewVideo,
  closeModal,
  url,
  thumbnail,
  defaultTitle,
}) {
  const [tab, setTab] = React.useState("PREVIEW");
  const [title, setTitle] = React.useState(defaultTitle);
  const [description, setDescription] = React.useState("");
  const profile = useCurrentProfile();
  const navigate = useNavigate();

  async function handleTab() {
    if (tab === "PREVIEW") {
      setTab("FORM");
    } else {
      if (!title.trim() || !description.trim()) {
        return toast.error("Please fill in all the fields");
      }
      const video = {
        title,
        description,
        url,
        thumbnail,
        profile_id: profile?.id,
      };
      await addVideo(video);
      closeModal();
      toast.success("Video published");
      navigate(`/channel/${profile?.id}`);
    }
  }

  return (
    <Wrapper>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-header-left">
            <CloseIcon />
            <h3>Video Uploaded!</h3>
          </div>
          <div style={{ display: "block" }}>
            {/* <Button onClick={handleTab}>Next</Button> */}
            <Button onClick={handleTab}>
              {tab === "PREVIEW" ? "Next" : "Upload"}
            </Button>
          </div>
        </div>

        {tab === "PREVIEW" && (
          <div className="tab video-preview">
            <VideoPlayer previewUrl={previewVideo} video={url} />
          </div>
        )}
        {tab === "FORM" && (
          <div className="tab video-form">
            <h2>Video Details</h2>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your video title"
              value={title}
            />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell viewers about your video"
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default UploadVideoModal;

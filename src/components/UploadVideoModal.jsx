import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Button from "../styles/Button";
import Wrapper from "../styles/UploadVideoModal";
import { addVideo } from "../utils/supabase";
import { CloseIcon } from "./Icons";
import VideoPlayer from "./VideoPlayer";

function UploadVideoModal() {
  async function handleTab() {}

  return (
    <Wrapper>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-header-left">
            <CloseIcon />
            <h3>Video Uploaded!</h3>
          </div>
          <div style={{ display: "block" }}>
            <Button onClick={handleTab}>Next</Button>
          </div>
        </div>

        <div className="tab video-preview">{/* VideoPlayer */}</div>

        <div className="tab video-form">
          <h2>Video Details</h2>
          <input type="text" placeholder="Enter your video title" value="" />
          <textarea placeholder="Tell viewers about your video" />
        </div>
      </div>
    </Wrapper>
  );
}

export default UploadVideoModal;

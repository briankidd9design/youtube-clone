import React from "react";
import { toast } from "react-hot-toast";
import { uploadThumbnail, uploadVideo } from "../utils/upload";
import { UploadIcon } from "./Icons";
import UploadVideoModal from "./UploadVideoModal";

function UploadVideo() {
  async function handleVideoUpload(event) {}

  return (
    <div>
      <label htmlFor="video-upload">
        <UploadIcon />
      </label>
      <input
        style={{ display: "none" }}
        id="video-upload"
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
      />
      {/* UploadVideoModal */}
    </div>
  );
}

export default UploadVideo;

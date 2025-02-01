import React from "react";
import { toast } from "react-hot-toast";
import { uploadThumbnail, uploadVideo } from "../utils/upload";
import { UploadIcon } from "./Icons";
import UploadVideoModal from "./UploadVideoModal";

function UploadVideo() {
  const [showModal, setShowModal] = React.useState(false);
  const [previewVideo, setPreviewVideo] = React.useState("");
  const [defaultTitle, setDefaultTitle] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");
  const [url, setUrl] = React.useState("");

  async function handleVideoUpload(event) {
    event.persist();
    const file = event.target.files[0];
    const rawFilename = file.name.replace(/\.[^/.]+$/, "");
    const fileName = `${rawFilename}-${crypto.randomUUID()}`;
    const videoToast = toast.loading("Uploading video...");
    const videoUrl = await uploadVideo(fileName, file);
    toast.success("Uploaded video", { id: videoToast });
    const previewVideo = URL.createObjectURL(file);
    setUrl(videoUrl);
    setDefaultTitle(rawFilename);
    setPreviewVideo(previewVideo);
    setShowModal(true);
    const thumbnailToast = toast.loading("Uploading thumbnail...");
    const thumbnailUrl = await uploadThumbnail(fileName, file);
    setThumbnail(thumbnailUrl);
    toast.success("Uploaded thumbnail", { id: thumbnailToast });
  }

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

import React from "react";
import { toast } from "react-hot-toast";
import Button from "../styles/Button";
import Wrapper from "../styles/EditProfileModal";
import { supabase, updateProfile, uploadImage } from "../utils/supabase";
import { CloseIcon } from "./Icons";

function EditProfileModal({ profile, closeModal }) {
  const [cover, setCover] = React.useState(profile.cover);
  const [avatar, setAvatar] = React.useState(profile.avatar);

  async function handleCoverUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const url = await uploadImage(file);
      await supabase
        .from("profile")
        .update({ cover: url })
        .eq("id", profile?.id);
      setCover(url);
    }
  }

  async function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const url = await uploadImage(file);
      await supabase
        .from("profile")
        .update({ avatar: url })
        .eq("id", profile?.id);
      setAvatar(url);
    }
  }

  async function handleEditProfile(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = String(formData.get("username"));
    const about = String(formData.get("about"));

    if (!username.trim()) {
      return toast.error("User name be empty");
    }

    const updatedProfile = {
      id: profile?.id,
      username,
      about,
    };
    await updateProfile(updatedProfile);
    toast.success("Profile Updated");
    closeModal();
  }

  return (
    <Wrapper>
      <div className="container" />
      <div className="edit-profile">
        <form onSubmit={handleEditProfile}>
          <div className="modal-header">
            <h3>
              <CloseIcon onClick={closeModal} />
              <span>Edit Profile</span>
            </h3>
            <Button type="submit">Save</Button>
          </div>

          <div className="cover-upload-container">
            <label htmlFor="cover-upload">
              <img
                className="pointer"
                width="100%"
                height="200px"
                src={cover}
                alt="cover"
              />
            </label>
            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              onChange={handleCoverUpload}
              style={{ display: "none" }}
            />
          </div>

          <div className="avatar-upload-icon">
            <label htmlFor="avatar-upload">
              <img src={avatar} className="pointer avatar lg" alt="avatar" />
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              style={{ display: "none" }}
            />
          </div>
          <input
            type="text"
            placeholder="Insert username"
            defaultValue={profile.username}
            id="username"
            name="username"
            required
          />
          <textarea
            id="about"
            name="about"
            placeholder="Tell viewers about your channel"
            defaultValue={profile.about}
          />
        </form>
      </div>
    </Wrapper>
  );
}

export default EditProfileModal;

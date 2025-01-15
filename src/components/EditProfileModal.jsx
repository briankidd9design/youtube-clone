import React from "react";
import { toast } from "react-hot-toast";
import Button from "../styles/Button";
import Wrapper from "../styles/EditProfileModal";
import { supabase, updateProfile, uploadImage } from "../utils/supabase";
import { CloseIcon } from "./Icons";

function EditProfileModal() {
  async function handleCoverUpload(event) {}

  async function handleAvatarUpload(event) {}

  async function handleEditProfile(event) {}

  return (
    <Wrapper>
      <div className="container" />
      <div className="edit-profile">
        <form onSubmit={handleEditProfile}>
          <div className="modal-header">
            <h3>
              <CloseIcon />
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
                src=""
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
              <img src="" className="pointer avatar lg" alt="avatar" />
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
            defaultValue=""
            id="username"
            name="username"
            required
          />
          <textarea
            id="about"
            name="about"
            placeholder="Tell viewers about your channel"
            defaultValue=""
          />
        </form>
      </div>
    </Wrapper>
  );
}

export default EditProfileModal;

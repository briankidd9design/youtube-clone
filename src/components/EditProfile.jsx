import React from "react";
import Button from "../styles/Button";
import Wrapper from "../styles/EditProfile";
import EditProfileModal from "./EditProfileModal";

function EditProfile({ profile }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Wrapper>
        <div>
          <Button onClick={() => setShowModal(true)} grey>
            Edit Profile
          </Button>
        </div>
      </Wrapper>
      {/* EditProfileModal */}
      {showModal && (
        <EditProfileModal
          profile={profile}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
}
export default EditProfile;

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
          {/* when we click on this button we want the modal to open so that we can edit the profile within the modal */}
          <Button onClick={() => setShowModal(true)} grey>
            Edit Profile
          </Button>
        </div>
      </Wrapper>
      {/* EditProfileModal */}
      {/* if showModal is true, then show this component */}
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

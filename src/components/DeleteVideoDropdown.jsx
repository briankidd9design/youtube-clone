import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { useNavigate } from "react-router-dom";
import useCurrentProfile from "../hooks/useCurrentProfile";
import { deleteVideo } from "../utils/supabase";
import { DeleteIcon, SettingsIcon } from "./Icons";

function DeleteVideoDropdown({ video }) {
  const navigate = useNavigate();
  const profile = useCurrentProfile();
  const profileId = profile?.id;
  const isVideoAuthor = video.profile_id === profileId;

  async function handleDeleteVideo() {
    await deleteVideo(video.id);
    navigate(`/channel/${profileId}`);
  }

  if (isVideoAuthor) {
    return (
      <div>
        <Menu>
          <MenuButton>
            <SettingsIcon />
          </MenuButton>
          <MenuList>
            <MenuItem onSelect={handleDeleteVideo}>
              <DeleteIcon />
              <span>Delete Video</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    );
  }
  return null;
}

export default DeleteVideoDropdown;

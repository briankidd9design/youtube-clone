import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { useNavigate } from "react-router-dom";
import useCurrentProfile from "../hooks/useCurrentProfile";
import { deleteVideo } from "../utils/supabase";
import { DeleteIcon, SettingsIcon } from "./Icons";

function DeleteVideoDropdown() {
  async function handleDeleteVideo() {}

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

export default DeleteVideoDropdown;

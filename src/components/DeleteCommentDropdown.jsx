import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import useCurrentProfile from "../hooks/useCurrentProfile";
import { deleteComment } from "../utils/supabase";
import { DeleteIcon, SettingsIcon } from "./Icons";

function DeleteCommentDropdown() {
  return (
    <div>
      <Menu>
        <MenuButton>
          <SettingsIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <DeleteIcon />
            <span>Delete Comment</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default DeleteCommentDropdown;

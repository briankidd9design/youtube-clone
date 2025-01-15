import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { useNavigate } from "react-router-dom";
import Avatar from "../styles/Avatar";
import { signOut } from "../utils/supabase";
import { ChannelIcon, SignoutIcon } from "./Icons";

function UserDropdown() {
  return (
    <Menu>
      <MenuButton>
        <Avatar className="pointer" src="" alt={`username avatar`} />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <ChannelIcon />
          <span>Your channel</span>
        </MenuItem>
        <MenuItem>
          <SignoutIcon />
          <span>Sign out</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserDropdown;

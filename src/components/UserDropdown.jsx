import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { useNavigate } from "react-router-dom";
import Avatar from "../styles/Avatar";
import { signOut } from "../utils/supabase";
import { ChannelIcon, SignoutIcon } from "./Icons";

function UserDropdown({ profile }) {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuButton>
        <Avatar
          className="pointer"
          src={profile.avatar}
          alt={`${profile.username} avatar`}
        />
      </MenuButton>
      <MenuList>
        <MenuItem onSelect={() => navigate(`/channel/${profile.id}`)}>
          <ChannelIcon />
          <span>Your channel</span>
        </MenuItem>
        <MenuItem onSelect={signOut}>
          <SignoutIcon />
          <span>Sign out</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserDropdown;

import { Link } from "react-router-dom";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Wrapper from "../styles/Navbar";
import GoogleAuth from "./GoogleAuth";
import { AppsIcon, HamburgerIcon, LogoIcon, SettingsIcon } from "./Icons";
import Search from "./Search";
import UploadVideo from "./UploadVideo";
import UserDropdown from "./UserDropdown";

function Navbar({ handleToggleSidebar }) {
  const profile = useCurrentProfile();
  return (
    <Wrapper>
      <div className="logo flex-row">
        <HamburgerIcon
          onClick={handleToggleSidebar}
          className="toggle-navhandler"
        />
        <span>
          <Link to="/">
            <LogoIcon
              style={{
                width: 80,
                height: 24,
              }}
            />
          </Link>
        </span>
      </div>

      {/* Search */}
      <Search />
      <ul>
        <li>{profile ? <UploadVideo /> : <AppsIcon />}</li>
        <li>{profile ? <AppsIcon /> : <SettingsIcon />}</li>
        <li>
          {/* <GoogleAuth /> */}
          {profile ? <UserDropdown profile={profile} /> : <GoogleAuth />}
        </li>
      </ul>
    </Wrapper>
  );
}

export default Navbar;

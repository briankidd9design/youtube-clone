import NavLink from "./NavLink";
import Wrapper from "../styles/MobileNavbar";
import {
  HistoryIcon,
  HomeIcon,
  SubIcon,
  TrendingIcon,
  WatchIcon,
} from "./Icons";

function MobileNavbar() {
  return (
    <Wrapper>
      <div className="icons">
        <NavLink activeClassName="active" to="/">
          <HomeIcon />
        </NavLink>

        <NavLink activeClassName="active" to="/feed/trending">
          <TrendingIcon />
        </NavLink>

        <NavLink activeClassName="active" to="/feed/subscriptions">
          <SubIcon />
        </NavLink>

        <NavLink activeClassName="active" to="/feed/history">
          <HistoryIcon />
        </NavLink>

        <NavLink activeClassName="active" to="/feed/liked_videos">
          <WatchIcon />
        </NavLink>
      </div>
    </Wrapper>
  );
}

export default MobileNavbar;

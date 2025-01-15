import * as React from "react";
import { NavLink as BaseNavLink } from "react-router-dom";

const NavLink = React.forwardRef(
  ({ activeClassName, activeStyle, ...props }, ref) => {
    return (
      <BaseNavLink
        ref={ref}
        {...props}
        className={({ isActive }) =>
          [props.className, isActive ? activeClassName : null]
            .filter(Boolean)
            .join(" ")
        }
        style={({ isActive }) => ({
          ...props.style,
          ...(isActive ? activeStyle : null),
        })}
      >
        {props.children}
      </BaseNavLink>
    );
  }
);
// Since we are using forwardRef, React doesn't know the name of this component. We can fix that with the following
NavLink.displayName = "NavLink";
export default NavLink;

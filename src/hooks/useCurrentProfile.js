import React from "react";
import { AuthContext } from "../context/AuthContext";

export default function useCurrentProfile() {
  const value = React.useContext(AuthContext);
  if (value === undefined) {
    throw new Error(
      "useCurrentProfile must be used within an AuthProvider component"
    );
  }
  return value;
}

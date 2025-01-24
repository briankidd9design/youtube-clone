import React from "react";
import { supabase } from "../utils/supabase";

// Pass down the users current session
export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  // when we consume the profile data across the app this will be the profile and a hook to consoume this context will be createRoutesFromChildren.
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    // get session returns a promise
    supabase.auth.getSession().then(({ data }) => {
      console.log("getSession", data.session.user);
      setProfile(data.session.user);
    });
    supabase.auth.onAuthStateChange((_, session) => {
      console.log("onAuthStateChange", session);
      setProfile(session.user);
    });
  }, []);
  return (
    <AuthContext.Provider value={profile}>{children}</AuthContext.Provider>
  );
}

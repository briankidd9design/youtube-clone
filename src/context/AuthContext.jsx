import React from "react";
import { supabase, getCurrentProfile } from "../utils/supabase";

// Pass down the users current session
export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  // when we consume the profile data across the app this will be the profile and a hook to consoume this context will be createRoutesFromChildren.
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    // get session returns a promise
    supabase.auth.getSession().then(async ({ data }) => {
      // console.log("getSession", data.session.user);
      if (data.session) {
        const user = data.session.user;
        const profile = await getCurrentProfile(user.id);
        // we spread in all of the profile properties as well as the new user into an object. user is going to be it's own property on profile
        setProfile({ ...profile, user });
      }
      // setProfile(data.session.user);
    });
    supabase.auth.onAuthStateChange(async (_, session) => {
      // console.log("onAuthStateChange", session);
      if (session) {
        const user = session.user;
        const profile = await getCurrentProfile(user.id);
        setProfile({ ...profile, user });
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={profile}>{children}</AuthContext.Provider>
  );
}

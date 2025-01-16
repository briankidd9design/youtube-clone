import React from "react";
import { supabase } from "../utils/supabase";

// Pass down the users current session
export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  React.useEffect(() => {
    // get session returns a promise
    supabase.auth.getSession().then(({ data }) => {
      console.log("getSession", data.session.user);
    });
    supabase.auth.onAuthStateChange((_, session) => {
      console.log("onAuthStateChange", session);
    });
  }, []);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

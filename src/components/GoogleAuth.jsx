import Button from "../styles/Auth";
import { SignInIcon } from "./Icons";
import { signInWithGoogle } from "../utils/supabase";

function GoogleAuth() {
  return (
    <Button tabIndex={0} type="button">
      <span className="outer">
        <span className="inner">
          <SignInIcon />
        </span>
        sign in
      </span>
    </Button>
  );
}

export default GoogleAuth;

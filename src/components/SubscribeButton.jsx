import useCurrentProfile from "../hooks/useCurrentProfile";
import Button from "../styles/Button";
import { toggleSubscribeUser } from "../utils/supabase";

function SubscribeButton() {
  return <Button grey>Subscribed</Button>;
}

export default SubscribeButton;

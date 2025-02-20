import useCurrentProfile from "../hooks/useCurrentProfile";
import Button from "../styles/Button";
import { toggleSubscribeUser } from "../utils/supabase";

function SubscribeButton({ subscribedToId }) {
  // this function will get the current user
  const profile = useCurrentProfile();
  const isSubscribed = profile?.subscriptions.includes(subscribedToId);
  return (
    <Button
      onClick={() => toggleSubscribeUser(profile, subscribedToId)}
      grey={isSubscribed}
    >
      {isSubscribed ? "Subscribed" : "Subscribe"}
    </Button>
  );
  // If we have an array of ids we want to see if that includes the id of the user that is being passed into this SubscribeButton component
  //[4] includes[4]
}

export default SubscribeButton;

import React from "react";
import { toast } from "react-hot-toast";
import defaultAvatar from "../assets/default-avatar.png";
import useCurrentProfile from "../hooks/useCurrentProfile";
import Wrapper from "../styles/CommentList";
import { addComment } from "../utils/supabase";
import CommentList from "./CommentList";

function AddComment() {
  async function handleAddComment(event) {}

  return (
    <Wrapper>
      <h3>0 comments</h3>

      <div className="add-comment">
        <img src="" alt="default user" />
        <textarea
          placeholder="Add a public comment..."
          onKeyDown={handleAddComment}
          rows={1}
        />
      </div>
      {/* CommentList */}
    </Wrapper>
  );
}

export default AddComment;

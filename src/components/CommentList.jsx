import React from "react";
import { Link } from "react-router-dom";
import { formatCreatedAt } from "../utils/date";
import DeleteCommentDropdown from "./DeleteCommentDropdown";

function CommentList() {
  return null;
}

function Comment() {
  return (
    <div className="comment">
      <Link to={`/channel/profile_id`}>
        <img src="" alt="avatar" />
      </Link>
      <div className="comment-info" style={{ flex: "1 1 0" }}>
        <p className="secondary">
          <span>
            <Link className="user-channel" to={`/channel/profile_id`}>
              username
            </Link>
          </span>
          <span style={{ marginLeft: "0.6rem" }}>15 minutes ago</span>
        </p>
        <p>text</p>
      </div>
      {/* DeleteCommentDropdown */}
    </div>
  );
}

const CommentListComponent = React.memo(CommentList);
CommentListComponent.name = "CommentList";
export default CommentListComponent;

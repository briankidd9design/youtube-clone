import React from "react";
import { createPath, Link } from "react-router-dom";
import { formatCreatedAt } from "../utils/date";
import DeleteCommentDropdown from "./DeleteCommentDropdown";

function CommentList({ comments }) {
  console.log(comments);
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

function Comment({ comment }) {
  return (
    <div className="comment">
      <Link to={`/channel/${comment.profile.id}`}>
        <img src={comment.profile.avatar} alt="avatar" />
      </Link>
      <div className="comment-info" style={{ flex: "1 1 0" }}>
        <p className="secondary">
          <span>
            <Link
              className="user-channel"
              to={`/channel/${comment.profile.id}`}
            >
              {comment.profile.username}
            </Link>
          </span>
          <span style={{ marginLeft: "0.6rem" }}>
            {formatCreatedAt(comment.created_at)} ago
          </span>
        </p>
        <p>{comment.text}</p>
      </div>
      {/* DeleteCommentDropdown */}
    </div>
  );
}

const CommentListComponent = React.memo(CommentList);
CommentListComponent.name = "CommentList";
export default CommentListComponent;

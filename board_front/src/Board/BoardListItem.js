import React from "react";
import { Link } from "react-router-dom";
const BoardListItem = props => {
  let { post } = props;
  let created = new Date(post.created);
  const viewPost = `/board/${post.id}`;
  return (
    <div className="board-list-item">
      <div>
        <Link to={viewPost}>{post.id}</Link>
      </div>
      <div>{post.title}</div>
      <div>{post.username}</div>
      <div>
        {created.getFullYear()}/{created.getMonth() + 1}/{created.getDate()}
        &nbsp;
        {created.getHours()}:{created.getMinutes()}:{created.getSeconds()}
      </div>
    </div>
  );
};

export default BoardListItem;

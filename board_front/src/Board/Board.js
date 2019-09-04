import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
@inject("stores")
@observer
class Board extends Component {
  componentDidMount() {
    const { PostStore } = this.props.stores;
    const id = parseInt(window.location.pathname.replace("/board/", ""));
    PostStore.fetchItem(id);
  }

  removeItem = async () => {
    if (!window.confirm("삭제하시겠습니까?")) return false;
    await axios.delete(
      "http://localhost:8080/api/post/deletePost/" +
        this.props.stores.PostStore.currentItem.id
    );
    this.props.history.push("/");
  };

  render() {
    const { currentItem } = this.props.stores.PostStore;
    const { user } = this.props.stores.ProfileStore;
    return (
      <div>
        {currentItem ? (
          <div>
            <p>제목 : {currentItem.title}</p>
            <p>
              내용 :{" "}
              <span dangerouslySetInnerHTML={{ __html: currentItem.content }} />
            </p>
            <p>작성자 : {currentItem.username}</p>
            <p>작성시간 : {new Date(currentItem.created).toLocaleString()}</p>
            <Link to="/">
              <button>목록으로</button>
            </Link>
            {user && user.id === currentItem.userId ? (
              <React.Fragment>
                <button onClick={this.removeItem}>삭제</button>
                <Link
                  to={{
                    pathname: "/write",
                    state: JSON.stringify(currentItem)
                  }}
                >
                  <button
                    onClick={e => {
                      !window.confirm("수정하시겠습니까?") &&
                        e.preventDefault();
                    }}
                  >
                    수정
                  </button>
                </Link>
              </React.Fragment>
            ) : null}
          </div>
        ) : (
          <div>로딩중</div>
        )}
      </div>
    );
  }
}

export default withRouter(Board);

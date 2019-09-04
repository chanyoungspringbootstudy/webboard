import React, { Component } from "react";
import Board from "../Board";
import "./index.scss";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("stores")
@observer
class Home extends Component {
  render() {
    console.log(this.props.stores);
    const { user } = this.props.stores.ProfileStore;

    return (
      <div>
        {user ? (
          <Link to="/write">
            <button
              onClick={e =>
                !window.confirm("새로운 글 작성") && e.preventDefault()
              }
            >
              글쓰기
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button>로그인</button>
          </Link>
        )}

        <Board />
      </div>
    );
  }
}

export default Home;

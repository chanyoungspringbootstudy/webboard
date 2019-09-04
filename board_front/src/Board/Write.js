import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { inject, observer } from "mobx-react";

@inject("stores")
@observer
class Write extends Component {
  state = {
    id: 0,
    title: "",
    content: ""
  };

  upload = () => {
    axios
      .post("http://localhost:8080/api/post/postBoard", {
        userId: this.props.stores.ProfileStore.user.id,
        title: this.state.title,
        content: this.state.content
      })
      .then(({ data }) => {
        this.props.history.push("/board/" + data);
      })
      .catch(err => {
        alert("오류가 발생했습니다.");
      });
  };

  update = () => {
    if (
      this.props.stores.ProfileStore.user.id ===
      this.props.stores.PostStore.currentItem.userId
    )
      axios
        .put("http://localhost:8080/api/post/modify", {
          id: this.state.id,
          title: this.state.title,
          content: this.state.content
        })
        .then(({ data }) => {
          alert("수정 성공!");
          this.props.history.push("/board/" + this.state.id);
        })
        .catch(err => {
          alert("수정 실패");
        });
    else alert("권한이 없습니다");
  };
  constructor(props) {
    super(props);
    if (!this.props.stores.ProfileStore.user) {
      alert("권한이 없습니다");
      this.props.history.push("/");
    }
    if (this.props.location.state) {
      const current = JSON.parse(this.props.location.state);
      this.state = {
        id: current.id,
        title: current.title,
        content: current.content
      };
    }
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: "10px" }}>
          제목 :{" "}
          <input
            type="text"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        <div>
          내용
          <br />
          <CKEditor
            editor={ClassicEditor}
            data={this.state.content}
            onChange={(e, editor) =>
              this.setState({ content: editor.getData() })
            }
          />
        </div>
        <button
          onClick={() => {
            if (this.state.id !== 0) {
              this.update();
            } else {
              this.upload();
            }
          }}
        >
          {this.state.id !== 0 ? "수정" : "글쓰기"}
        </button>
      </div>
    );
  }
}

export default withRouter(Write);

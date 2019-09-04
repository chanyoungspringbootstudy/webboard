import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("stores")
@observer
class Login extends Component {
  state = {
    id: "",
    pw: ""
  };

  componentDidMount() {
    if (this.props.stores.ProfileStore.user) {
      alert("이미 로그인 된 사용자입니다.");
      this.props.history.push("/");
    }
  }

  login = async () => {
    const { id, pw } = this.state;
    const result = await this.props.stores.ProfileStore.login(id, pw);
    if (result) {
      alert("로그인 성공");
      this.props.history.push("/");
    } else {
      alert("아이디 혹은 비밀번호를 틀렸습니다.");
    }
  };

  render() {
    return (
      <div>
        <div>
          아이디 :
          <input
            type="text"
            placeholder="아이디"
            value={this.state.id}
            onChange={e => this.setState({ id: e.target.value })}
          />
        </div>
        <div>
          비밀번호 :
          <input
            type="password"
            value={this.state.pw}
            onChange={e => this.setState({ pw: e.target.value })}
          />
        </div>
        <button onClick={this.login}>로그인</button>
      </div>
    );
  }
}

export default withRouter(Login);

import { observable, action } from "mobx";
import axios from "axios";

class PostStore {
  static __instance = null;
  static getInstance() {
    if (PostStore.__instance === null) PostStore.__instance = new PostStore();
    return PostStore.__instance;
  }

  constructor() {
    PostStore.__instance = this;
  }

  @observable items = null;

  @observable currentItem = null;

  @action fetchItems = async () => {
    try {
      let response = await axios({
        url: "http://localhost:8080/api/post/getPosts",
        method: "get",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        timeout: 3000
      });
      console.log(response);

      if (response.status === 200) this.items = response.data;
    } catch (err) {
      console.log(err.toLocaleString());
    }
  };

  @action fetchItem = async id => {
    try {
      let response = await axios({
        url: "http://localhost:8080/api/post/getPost/" + id,
        method: "get",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        timeout: 3000
      });
      if (response.status === 200) this.currentItem = response.data;
    } catch (e) {}
  };
}

export default PostStore.getInstance();

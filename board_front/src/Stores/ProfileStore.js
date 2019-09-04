import { observable, action } from "mobx";
import axios from "axios";

class ProfileStore {
  static __instance = null;
  static getInstance() {
    if (ProfileStore.__instance === null)
      ProfileStore.__instance = new ProfileStore();
    return ProfileStore.__instance;
  }

  constructor() {
    ProfileStore.__instance = this;
  }

  @observable user = null;

  @action
  login = async (id, password) => {
    try {
      const result = await axios.get(
        `http://localhost:8080/api/user/loginUser?account=${encodeURIComponent(
          id
        )}&password=${encodeURIComponent(password)}`
      );
      if (result.status === 200) {
        if (result.data) {
          this.user = result.data;
          return true;
        } else {
          return false;
        }
      } else {
        throw Error(result.statusText);
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  };
}

export default ProfileStore.getInstance();

import { api } from "../api/Intercepter";
import UserInfo from "./userInfo.service";

class AuthService {
  login({ username, password }) {
    return api
      .post("/auth/signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          UserInfo.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    UserInfo.removeUser();
  }

  register({ username, email, password ,file}) {
    let formData = new FormData();
  
    formData.append("name", username);
    formData.append("email", email);
    formData.append("password", password); 
    formData.append("image", file[0]);
    return api
      .post("register",formData)
      .then((response) => {
        UserInfo.setUser(response.data);
        return response.data
      });
  }

  registerAdmin({ username, email, password ,role}) {
 
    return api
      .post("/auth/register-admin", {
        username,
        email,
        password,
        role
      })
      .then((response) => {
        UserInfo.setUser(response.data);
        return response.data
      });
  }
}

export default new AuthService();

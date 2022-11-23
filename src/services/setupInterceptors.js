import {api} from '../api/Intercepter';
import UserInfo from "./userInfo.service";
import router from '../router'
const setup = (store) => {
  api.interceptors.request.use(
    (config) => {
      const token = UserInfo.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
     
      if (originalConfig.url !== "/auth/signin" && err.response) {
        // Access Token was expired

        if (err.response.status === 401 && !originalConfig._retry) {
          store.dispatch("logout");
          router.push({ path: "/auth/signin" });
        } else if (err.response.status === 403) {
          router.push({ path: `/auth/confirmmail` }) 
        }else if(err.response.status ===400 && err.response.data.data == 'Please wait until getting active'){
          router.push({ path: `/auth/activeuser` }) 
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;

import axios from "axios";
import UserInfo from "../services/userInfo.service";

 
 
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api' 
});

export { api };
 
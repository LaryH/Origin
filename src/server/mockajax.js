import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const mockServer = axios.create({
  baseURL: "/mock",
  timeout: 20000,
});

mockServer.interceptors.request.use((req) => {
  NProgress.start();
  return req;
});

mockServer.interceptors.response.use(
  (res) => {
    NProgress.done();
    return res.data;
  },
  (err) => {
    NProgress.done();
    alert(err.message);
    return new Promise();
  }
);
export default mockServer;

import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress";
import "nprogress/nprogress.css";

const server = axios.create({
  baseURL: "/api",
  timeout: 20000,
  // headers:
});

server.interceptors.request.use((req) => {
  NProgress.start();
  return req;
});

server.interceptors.response.use(
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

export default server;

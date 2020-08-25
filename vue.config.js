module.exports = {
  lintOnSave: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
      },
    },
  },
};

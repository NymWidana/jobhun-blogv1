import axios from "axios";

const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const isDev = import.meta.env.VITE_APP_ENV == "dev";

export const api = {
  get: function (url = "", payload = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await apiAxios.get(url, serializeUrlQuery(payload));
        resolve(res);
      } catch (error) {
        if (isDev) {
          console.log("ERROR GET API: " + url + ", error:", error);
        }
        reject(false);
      }
    });
  },
  post: function (url = "", payload = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await apiAxios.post(url, payload);
        resolve(res);
      } catch (error) {
        if (isDev) {
          console.log("ERROR POST API: " + url + ", error:", error);
        }
        reject(false);
      }
    });
  },
  put: function (url = "", payload = {}) {
    return new Promise(async (resolve, reject) => {
      try {
        let res = apiAxios.put(url, payload);
        resolve(res);
      } catch (error) {
        if (isDev) {
          console.log("ERROR PUT API: " + url + ", error:", error);
        }
        reject(false);
      }
    });
  },
  delete: function (url = "") {
    return new Promise(async (resolve, reject) => {
      try {
        let res = apiAxios.delete(url);
        resolve(res);
      } catch (error) {
        if (isDev) {
          console.log("ERROR DELETE API: " + url + ", error:", error);
        }
        reject(false);
      }
    });
  },
};

export default api;
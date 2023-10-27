import axios from "axios";

const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_API_STATIC,
});

const isDev = import.meta.env.VITE_APP_ENV == "dev";

const serializeUrlQuery = function (obj) {
  if (_.isEmpty(obj)) return "";
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return "?" + str.join("&");
};

apiAxios.defaults.timeout = 10000;
apiAxios.interceptors.request.use(
  (config) => {
    const layoutStore = useLayoutStore();
    layoutStore.requestIncrease();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
apiAxios.interceptors.response.use(
  (response)=>{
    const layoutStore = useLayoutStore();
    layoutStore.requestDecrease();
    return Promise.resolve(response.data.data);
  },
  (error) => {
    console.log(error);
    const layoutStore = useLayoutStore();
    layoutStore.requestDecrease();
    let message = error.response.data.message;
    const toast = useToast();
    toast.error(message, {
      timeout: 2000,
    });
    return Promise.reject(error.response.data);
  }
);

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
  }
};

export default api;

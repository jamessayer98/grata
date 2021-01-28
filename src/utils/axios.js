import axios from "axios";

export const baseURL = process.env.REACT_APP_BACK_END_API;

const INSTANCE = axios.create({
  baseURL,
});

const createAxiosResponseInterceptor = () => {
  const interceptor = INSTANCE.interceptors.response.use(
    (response) => response,
    (error) => {
      // Reject promise if usual error
      if (error.response.status !== 401) {
        return Promise.reject(error);
      }

      /**
       * When response status is 401, try to refresh the token.
       * Eject the interceptor so it doesn't loop in case
       * token refresh causes the 401 response
       */
      INSTANCE.interceptors.response.eject(interceptor);

      return INSTANCE.post(`/login/refresh-token/?key=${process.env.REACT_APP_TOKEN_API_KEY}`, {
        refreshToken: localStorage.getItem("refreshToken"),
      })
        .then((response) => {
          localStorage.setItem("idToken", response.data.idToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);

          error.response.config.headers["Authorization"] = `Bearer ${response.data.idToken}`;

          return INSTANCE(error.response.config);
        })
        .catch((error) => {
          // localStorage.clear();
          // window.location.href = "/login";

          return Promise.reject(error);
        })
        .finally(createAxiosResponseInterceptor);
    }
  );
};

createAxiosResponseInterceptor();

export default INSTANCE;

import { BASE_URL, TIME_OUT } from "./config";
import AXRequest from "./request";
const axRequest = new AXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    }
  }
});

export default axRequest;

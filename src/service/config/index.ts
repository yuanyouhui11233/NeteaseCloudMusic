let BASE_URL = "";
if (process.env.NODE_ENV === "development") {
  // BASE_URL = "http://codercba.com:9002";
  BASE_URL = "http://localhost:3001";
} else {
  BASE_URL = "http://codercba.com:9002";
}

export const TIME_OUT = 10000;
export { BASE_URL };

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "20e95ceb23cf4d8f895f0170055cdedd",
  },
});

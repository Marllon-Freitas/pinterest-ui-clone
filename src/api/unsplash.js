import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID nwEjxu3yj3dxY7mrLtWtRRDBiq-OxGrsd7LT4OPw0Uw",
  },
})
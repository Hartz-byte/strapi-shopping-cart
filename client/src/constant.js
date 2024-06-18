import axios from "axios";

export const AVATAR_API = "https://ui-avatars.com/api";
export const API = "http://192.168.29.24:1337/api";
export const AUTH_TOKEN = "authToken";
export const BEARER = "Bearer";

const base_url = "https://192.168.29.24:1337/api";

const api_key =
  "3b315717616399174e1cbd2d61ec2b548b9968d22abd91d733ac903054adaeaf165326d5c142d959492095e0bd20221c1f132d88b9a7cdd81a81b583e258b1686f004628876ae00f1589ff38e32dd4ef741747a9ba7c5665881737c65de81b1cc7fd04f9b2a2f7d77c994fd049f83e36be67610b562724ac885c971dea04bab4";

const AxioInstance = axios.create({
  baseURL: base_url,
  headers: {
    Authorization: "Bearer " + api_key,
  },
});

const getUsers = () => AxioInstance.get("/carts");

export default {
  getUsers,
};

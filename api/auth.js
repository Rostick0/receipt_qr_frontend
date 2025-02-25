import useFetcher from "../utils/fetch";

export default {
  login: async (data) => useFetcher().post(`/auths/login`, data),
  register: async (data) => useFetcher().post(`/auths/register`, data),
  // logout: async (data = {}) => useFetcher().post(`/auths/logout`, data),
  me: async (params, headers) => useFetcher().get(`/auths/me`, params, headers),
};

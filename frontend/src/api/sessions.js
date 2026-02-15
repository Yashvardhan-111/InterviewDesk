import axiosInstance from "../lib/axios";

export const sessionApi = {
  createSession: async (data) => {
    const response = await axiosInstance.post("/sessions", data);
    return response.data;
  },

  getActiveSessions: async () => {
    const response = await axiosInstance.get("/sessions/active");
    return response.data;
  },
  getMyRecentSessions: async () => {
    const response = await axiosInstance.get("/sessions/my-recent");
    return response.data;
  },

  getSessionById: async (id) => {
    const response = await axiosInstance.get(`/sessions/${id}`);
    return response.data;
  },

  joinSession: async (payload) => {
    // Support both old format (id string) and new format (object with sessionId and roomCode)
    if (typeof payload === "string") {
      const response = await axiosInstance.post(`/sessions/${payload}/join`);
      return response.data;
    }
    // New format with room code
    const { sessionId, roomCode } = payload;
    const response = await axiosInstance.post(`/sessions/${sessionId}/join`, { roomCode });
    return response.data;
  },
  endSession: async (id) => {
    const response = await axiosInstance.post(`/sessions/${id}/end`);
    return response.data;
  },
  getStreamToken: async () => {
    const response = await axiosInstance.get(`/chat/token`);
    return response.data;
  },
};
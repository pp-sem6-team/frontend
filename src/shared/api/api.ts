import axios from 'axios';
import { type Analysis, type AuthResponse, type HealthStatus, type User } from './types';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post<AuthResponse>(`${API_BASE_URL}/auth/refresh`, {
          refresh_token: refreshToken,
        });
        const { access_token, refresh_token } = response.data;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  register: (data: any) => api.post<AuthResponse>('/auth/register', data),
  login: (data: any) => api.post<AuthResponse>('/auth/login', data),
  logout: (refreshToken: string) => api.post('/auth/logout', { refresh_token: refreshToken }),
  refresh: (refreshToken: string) => api.post<AuthResponse>('/auth/refresh', { refresh_token: refreshToken }),
};

export const userApi = {
  getMe: () => api.get<User>('/users/me'),
  updateMe: (data: Partial<User>) => api.patch<User>('/users/me', data),
  updatePassword: (data: any) => api.patch('/users/me/password', data),
  deleteAccount: () => api.delete('/users/me'),
};

export const analysisApi = {
  uploadPhoto: (formData: FormData) => api.post<Analysis>('/analyses', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  getHistory: (offset = 0, limit = 10) => api.get<Analysis[]>('/analyses', { params: { offset, limit } }),
  getDetail: (id: string, recsLimit = 10, ingsLimit = 10) => 
    api.get<Analysis>(`/analyses/${id}`, { params: { recs_limit: recsLimit, ings_limit: ingsLimit } }),
  deleteAnalysis: (id: string) => api.delete(`/analyses/${id}`),
};

export const healthApi = {
  check: () => api.get<HealthStatus>('/health'),
  checkDb: () => api.get<HealthStatus>('/health/db'),
  checkStorage: () => api.get<HealthStatus>('/health/storage'),
  checkMl: () => api.get<HealthStatus>('/health/ml'),
};

export default api;

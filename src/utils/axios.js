// src/utils/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // .env 파일에서 가져옴 (보통 개발/배포 환경 구분용)
  timeout: 5000, // 요청 제한 시간 (5초)
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('Axios Base URL:', api.defaults.baseURL); 

// 필요하다면 인터셉터도 추가 가능
api.interceptors.response.use(
  response => response,
  error => {
    // 에러 처리 로직 (예: 401 토큰 만료 등)
    return Promise.reject(error);
  }
);


export default api;

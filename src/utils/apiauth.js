import api from '@/utils/axios';

// 사용자 인증 관련 API

/**
 * 사용자 정보 조회
 * @param {number|string} userEmail - 조회할 사용자 이메일
 * @returns {Promise<object>} 사용자 정보 데이터
 */
export const fetchUser = async (userEmail) => {
  try {
    const response = await api.get(`/users/${userEmail}`);
    return response.data;
  } catch (error) {
    console.error('fetchUser 에러:', error);
    throw error;
  }
};

/**
 * 사용자 로그인
 * @param {object} credentials - { email, password }
 * @returns {Promise<object>} 로그인 결과
 */
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data; // 200 OK 시 반환될 데이터
  } catch (error) {
    console.error("loginUser 에러:", error);
    throw error; // 401 Unauthorized 또는 다른 에러 반환
  }
};

/** 사용자 생성(회원가입)
 * @param {object} userData 
 * @returns {Promise<object>}
 */
export const createUser = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('createUser 에러:', error);
    throw error;
  }
};



/**
 * 
 * @param {object} [params] - 검색/필터링 파라미터 (선택)
 * @returns {Promise<Array>} 사용자 목록
 */
export const fetchUserList = async (params = {}) => {
  try {
    const response = await api.get('/users', { params });
    return response.data;
  } catch (error) {
    console.error('fetchUserList 에러:', error);
    throw error;
  }
};

/**
 * 사용자 정보 수정
 * @param {number|string} userId - 수정할 사용자 ID
 * @param {object} userData - 수정할 데이터
 * @returns {Promise<object>} 수정된 사용자 정보
 */
export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('updateUser 에러:', error);
    throw error;
  }
};

/**
 * 사용자 삭제
 * @param {number|string} userId - 삭제할 사용자 ID
 * @returns {Promise<void>}
 */
export const deleteUser = async (userId) => {
  try {
    await api.delete(`/users/${userId}`);
  } catch (error) {
    console.error('deleteUser 에러:', error);
    throw error;
  }
};

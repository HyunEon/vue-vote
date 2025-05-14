import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginUser, createUser } from '@/utils/apiauth';

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false); //ref(true);
  const userData = ref(null) //ref({username: '테스트 사용자'});

  // 로그인
  async function login(credentials) {
    try {
      const response = await loginUser(credentials);
      isLoggedIn.value = true;
      userData.value = response;  // 로그인 후 사용자 데이터 저장
      console.log('로그인 성공:', response);
      return response;
    } catch (error) {
      isLoggedIn.value = false;
      console.error('로그인 실패:', error);
      throw error;
    }
  }

  // 로그아웃
  function logout() {
    isLoggedIn.value = false;
    userData.value = null;
  }

  // 회원가입
  async function register(userDetails) {
    try {
      const response = await createUser(userDetails);
      console.log('회원가입 성공:', response);
    } catch (error) {
      console.error('회원가입 실패:', error);
      throw error;
    }
  }

  return { isLoggedIn, userData, login, logout, register };
});

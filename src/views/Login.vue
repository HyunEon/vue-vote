<!-- 로그인 뷰 -->
<template>
  <Loading v-model="loading" />
    <div class="login-container">
      <h1>로그인</h1>
      <form @submit.prevent="login" class="form-login">
        <label>이메일</label>
        <input type="email" v-model="email" placeholder="이메일을 입력하세요" required />
        <label>비밀번호</label>
        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" required />
        <div class="login-btn-wrapper">
          <button type="submit" class="login-btn">로그인</button>
        </div>
          <router-link to="/register" class="register-link-a" title="회원가입 페이지로 이동하기">아직 계정이 없으신가요?</router-link>
        </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/userstores';
  import { useSnackbar } from "vue3-snackbar";
  import { useRoute } from 'vue-router';
  import Loading from '@/components/Loading.vue';
  
  const snackbar = useSnackbar();
  const email = ref('');
  const password = ref('');
  const router = useRoute();
  const authStore = useAuthStore();
  const loading = ref(false);
  
  const login = async () => {
    try {
      loading.value = true;
      const response = await authStore.login({
      email: email.value,
      password: password.value,
    });

    snackbar.add({
    type: 'success',
    text: `로그인에 성공했습니다. ${response.value}`
    });
    router.push('/main');
    
    } catch (error) {
      snackbar.add({
      type: 'error',
      text: `로그인에 실패했습니다. ${error}`
      })
    } finally {
      loading.value = false;
    }
  };
  </script>
  
  <style>
  .login-container {
    max-width: 300px;
    margin: auto;
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .form-login {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .required-color {
    color: red;
  }

  .form-login input {
    display: block;
    width: 100%; /* 컨테이너 너비를 꽉 채움 */
    margin-bottom: 8px;
    padding: 8px; 
    box-sizing: border-box; /* 패딩 포함하여 너비 계산 */
  }

  .login-input {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .login-btn-wrapper {
    width: 100%;
    height: 35px;
    padding-top: 2%;
  }

  .login-btn {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;  
  }

  .login-btn:hover {
    opacity: 0.8;
    }

  .login-btn:active {
    background-color: lightgrey;
  }

  .register-link-a {
    text-decoration: none;
    color: black;
  }

  .register-link-a:link {
      color: black;
      text-decoration: none;
  }

  .register-link-a:visited {
      color: black;
      text-decoration: none;
  }

  .register-link-a:hover {
      font-weight: bold;
      color: darkblue;
  }

  .register-link-a:active {
      color: red;
  }

  </style>
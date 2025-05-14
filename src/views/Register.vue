<!-- 회원가입 뷰 -->
<template>
  <Loading v-model="loading" />
    <div class="register-container">
      <h1>회원 가입</h1>
      <form @submit.prevent="register" class="form-register">
        <label><span class="required-color">*</span>이메일</label>
        <input type="email" v-model="email" placeholder="example@example.com" required />
        <label><span class="required-color">*</span>비밀번호</label>
        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" required />
        <label><span class="required-color">*</span>이름</label>
        <input type="text" v-model="username" placeholder="이름을 입력하세요" required />
        <label><span class="required-color">*</span>전화번호</label>
        <input type="tel" v-model="phone" placeholder="하이픈(-) 제외" required />
        <div class="register-btn-wrapper">
          <button type="submit" class="register-btn">가입하기</button>
      </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useSnackbar } from "vue3-snackbar";
  import { useAuthStore } from '@/stores/userstores';
  import { useRouter } from 'vue-router';
  import Loading from '@/components/Loading.vue';

  const snackbar = useSnackbar();
  const authStore = useAuthStore();
  const email = ref('');
  const password = ref('');
  const username = ref('');
  const phone = ref('');
  const loading = ref(false);
  
  const register = async () => {
    const router = useRouter();

  try {
    loading.value = true;
    const response = await authStore.register({
      email: email.value,
      password: password.value,
      name: username.value,
      phone: phone.value,
    });

    snackbar.add({
    type: 'success',
    text: `회원 가입에 성공했습니다. ${response.value}`
})
    // 로그인 페이지로 이동
    router.push('/login');

  } catch (error) {
    snackbar.add({
    type: 'error',
    text: `회원 가입에 실패했습니다. ${error}`
})
  } finally {
    loading.value = false;
  }
};
</script>

  <style>
  .register-container {
    max-width: 300px;
    margin: auto;
  }

  .form-register {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .required-color {
    color: red;
  }

  .form-register input {
    display: block;
    width: 100%; /* 컨테이너 너비를 꽉 채움 */
    margin-bottom: 8px;
    padding: 8px; 
    box-sizing: border-box; /* 패딩 포함하여 너비 계산 */
  }

  .register-input {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .register-btn-wrapper {
    width: 100%;
    height: 35px;
    padding-top: 2%;
  }

  .register-btn {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;  
  }

  .register-btn:hover {
    opacity: 0.8;
    }

  .register-btn:active {
    background-color: lightgrey;
  }
  </style>
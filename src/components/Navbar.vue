<!-- 최상단에 들어갈 네비게이터 컴포넌트 -->
<template>
    <nav class="navbar">
      <div class="logo">
        <router-link to="/main" class="router-main" title="메인 페이지로 이동합니다.">메인</router-link>
      </div>
  
      <ul class="menu">
        <li><router-link to="/vote" class="router-vote" title="투표 목록 페이지로 이동합니다.">투표 목록</router-link></li>
        <li><router-link to="/myvotes" class="router-my-votes" title="내 투표 페이지로 이동합니다.">내 투표</router-link></li>
      </ul>
  
      <div class="auth">
        <template v-if="authStore.isLoggedIn">
          <router-link to="/mypage" class="router-mypage" title="내 정보 페이지로 이동합니다.">{{ authStore.userData.username }}님</router-link>
          <button @click="authStore.logout" class="logout-btn" title="로그아웃 합니다.">로그아웃</button>
        </template>
        <template v-else>
          <div class="auth-btn-wrapper">
            <router-link to="/login" class="router-login" title="로그인 페이지로 이동합니다.">로그인</router-link>
            <router-link to="/register" class="router-register" title="회원가입 페이지로 이동합니다.">회원가입</router-link>
          </div>
        </template>
      </div>
    </nav>
  </template>
  
  <script setup>
    import { useAuthStore } from '@/stores/userstores';

    const authStore = useAuthStore();
  </script>
  
  <style>
    .navbar {
      display: flex;
      padding-left: 10%;
      padding-right: 10%;
    }

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    
    .menu {
      display: flex;
      list-style: none;
      gap: 10px;
      padding-left: 10px;
    }
    
    .auth {
      display: flex;
      margin-left: auto;
      align-items: center;
    }
    
    .auth-btn-wrapper {
      display: flex;
      width: 130px;
      list-style: none;
    }
    
    .router-main {
      color: black;
      font-size: 25px;
      text-decoration: none;
    }

    .router-main:visited {
      color: black;
      text-decoration: none;
    }

    .router-vote {
      width: 100%;
      text-align: center;
      text-decoration: none;
    }

    .router-vote:link {
      color: black;
      text-decoration: none;
    }

    .router-vote:visited {
      color: black;
      text-decoration: none;
    }

    .router-my-votes {
      width: 100%;
      text-align: center;
      text-decoration: none;
    }

    .router-my-votes:link {
      color: black;
      text-decoration: none;
    }

    .router-my-votes:visited {
      color: black;
      text-decoration: none;
    }

    .router-login {
      width: 100%;
      text-align: center;
      text-decoration: none;
    }

    .router-login:visited {
      color: black;
      text-decoration: none;
    }

    .router-register {
      width: 100%;
      text-align: center;
      text-decoration: none;
    }

    .router-register:visited {
      color: black;
      text-decoration: none;
    }

    .router-mypage {
      color: black;
      text-decoration: none;
    }

    .router-mypage:link {
      color: black;
      text-decoration: none;
    }

    .router-mypage:visited {
      color: black;
      text-decoration: none;
    }

    .logout-btn {
    height: 35px;
    width: 80px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 5px;
  }

  .logout-btn:hover {
    opacity: 0.8;
  }

  .logout-btn:active {
    background-color: lightgrey;
  }

  </style>
  
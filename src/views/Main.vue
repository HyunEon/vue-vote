<!-- 메인 뷰 -->
<template>
  <!-- 로그인 메인 페이지 -->
  <LoggedInMainView v-if="authStore.isLoggedIn"></LoggedInMainView>
  <!-- 비로그인 메인 페이지 -->
  <GuestMainView v-else></GuestMainView>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/userstores';
  import { ref } from 'vue';
  import GuestMainView from '@/components/GuestMainView.vue';
  import LoggedInMainView from '@/components/LoggedInMainView.vue';

  const router = useRouter();
  const authStore = useAuthStore();
</script>

<style>
  body {
    height: 100vh;
  }

  </style>
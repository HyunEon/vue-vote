<template>
  <div class="app-base">
    <!-- Header -->
    <header class="app-header">
      <Navbar />
      <hr class="hr-style">
    </header>
    
    <!-- Main Content -->
    <main class="app-body">
      <router-view />
    </main>
    
    <!-- Footer -->
    <footer class="app-footer">
      <div class="footer-contents">
        <a>이용 약관</a> |
        <p>© 2025 투표앱. All rights reserved.</p>
      </div>
    </footer>
    <vue3-snackbar top right :duration="4000"></vue3-snackbar>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { Vue3Snackbar } from "vue3-snackbar";
</script>

<style>
/* 공백 0 설정 */
body {
  margin: 0;
  padding: 0;
}


/* 전체 앱 */
.app-base {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* 헤더 */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* 헤더 밑 hr 스타일 */
.hr-style {
  border: none;
  height: 1px;
  width: 98%;
  background: linear-gradient(to right, lightgray, gray);
  border-radius: 10px;
}

/* 메인 콘텐츠 */
.app-body {
  flex: 1;
  padding: 1rem;
}

/* 푸터 */
.app-footer {
  padding: 1rem;
  color: black;
  background-color: rgba(248, 248, 248);
}

.footer-contents {
  display: flex;
  font-size: small;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

</style>

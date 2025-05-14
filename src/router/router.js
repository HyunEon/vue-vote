import { createRouter, createWebHistory } from 'vue-router';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import Main from '@/views/Main.vue';
import MyVotes from '@/views/MyVotes.vue';
import MyPage from '@/views/MyPage.vue';

const routes = [
  { 
    path: '/register', component: Register
  },
  {
    path: '/login', component: Login
  },
  // 사용자가 로그인하지 않았다면 Login 뷰를 보여주도록, JW 토큰 기술이 있는게 좋을 것 같다.
  {
    path: '/main', component: Main
  },
  {
    path: '/myvotes', component: MyVotes
  },
  {
    path: '/mypage', component: MyPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
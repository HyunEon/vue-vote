<!-- 로그인 하지 않은 메인 페이지에 들어갈 컴포넌트 -->
<template>
    <div class="main-container">
      <h1>투표 서비스</h1>
      <div>
      <h2>사람들이 만든 투표를 둘러보세요!</h2>
      <p> 약 {{ voteCount }}개의 투표 주제가 궁금하지 않나요?</p>
      <button class="main-start-btn" @click="goLogin">시작하기</button>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const router = useRouter();
    const voteCount = 150;

  const goLogin = () => {
    router.push('/login');
  }
</script>

<style>
.main-container {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
  }

  .main-container > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    animation: slideup 3s linear infinite;
  }

  .main-container > div > h2 > span {
    display: block;
  }

  .main-start-btn {
    height: 40px;
    width: 150px;
    border: none;
    border-radius: 20px;
    font-size: large;
    cursor: pointer;
  }

  .main-start-btn:hover {
    opacity: 0.8;
  }

  .main-start-btn:active {
    background-color: lightgrey;
  }

  @keyframes slideup {
    0% {
        opacity: 0;
        margin-top: 50px;
    }
    20% {
      opacity: 1;
        margin-top: 0;
    }

    80% {
        opacity: 1;
        margin-top: 0;
    }
    100% {
        opacity: 0;
        margin-top: 0;
    }
}
</style>
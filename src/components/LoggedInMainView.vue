<!-- 로그인된 메인 페이지에 들어갈 컴포넌트 -->
 <template>
    <div class="main-container">
      <h1>내 활동 페이지</h1>
    </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
</script>

<style>
.main-container {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
  }
</style>
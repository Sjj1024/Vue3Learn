<template>
  <div class="login">登陆页面：
  <router-link to="/regist"> 跳到注册</router-link></div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>

<style scoped>
.login {
  background-color: skyblue;
  width: 100vw;
  height: 100vh;
  color: white;
}
</style>

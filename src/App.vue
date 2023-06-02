<template>
  <router-link to="/">登陆页</router-link>&nbsp;&nbsp;
  <router-link to="/regist">注册页</router-link>&nbsp;&nbsp;
  <router-link replace to="/">登陆页无历史记录</router-link>&nbsp;&nbsp;
  <router-link replace to="/regist">注册页无历史记录</router-link>&nbsp;&nbsp;
  <el-button type="primary" @click="goLogin">按钮跳转登陆页</el-button>&nbsp;&nbsp;
  <el-button type="primary" @click="goRegist">按钮跳转注册页</el-button>&nbsp;&nbsp;
  <!-- 路由容器挂载点 -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const goLogin = ()=>{
  router.replace("/")
}

const goRegist = ()=>{
  router.replace("/regist")
}
</script>

<style scoped></style>

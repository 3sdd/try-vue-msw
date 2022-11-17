<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

type User = {
  username: string;
};

const user = ref<User | null>(null);

async function onLoginClick() {
  try {
    await axios.post("/login");
  } catch (e) {
    alert("ログインエラー");
    return;
  }

  const { data: u } = await axios.get("/user");
  user.value = u;
}
</script>

<template>
  <main>
    <button @click="onLoginClick">login</button>
    <div>
      {{ user === null ? "未ログイン" : "ログイン済み" }}
    </div>
    <div v-if="user">ユーザー名:{{ user.username }}</div>
  </main>
</template>

<template>
  <div>
    <Topbar v-if="isAuthenticated"></Topbar>

    <div class="flex m-[1rem] justify-start" v-if="isAuthenticated" style="height: calc(100vh - 107.2px);">
      <Navbar></Navbar>
      <div class="ms-[1rem] flex-1 overflow-x-auto">
        <slot></slot>
      </div>
    </div>

    <div v-else class="ms-[1rem] flex-1 overflow-x-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import Topbar from '@/components/layout/Topbar.vue';
import Navbar from '@/components/layout/Navbar.vue';

const authStore = useAuthStore();

const isAuthenticated = computed(() => authStore.isAuthenticated);

authStore.checkAuth();
</script>
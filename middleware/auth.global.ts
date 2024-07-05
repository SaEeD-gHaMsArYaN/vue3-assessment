import { useAuthStore } from '@/stores/authStore';
import { defineNuxtMiddleware } from '@nuxt/types';

const authMiddleware: defineNuxtMiddleware = (context) => {
  const authStore = useAuthStore();
  authStore.checkAuth();

  if (!authStore.isAuthenticated && context.route && context.route.name !== 'login') {
    context.redirect('/');
  }
};

export default authMiddleware;
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<string | null>(null);
  const token = ref<string | null>(null);
  const router = useRouter();

  const isAuthenticated = computed(() => !!token.value);

  const login = (userData: { username: string; token: string }) => {
    user.value = userData.username;
    token.value = userData.token;
    if (process.client) {
      localStorage.setItem('authToken', userData.token);
      localStorage.setItem('authUser', userData.username);
      localStorage.setItem('authExpiry', (Date.now() + 30 * 60 * 1000).toString());
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    if (process.client) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
      localStorage.removeItem('authExpiry');
      router.push('/');
    }
  };

  const checkAuth = () => {
    if (process.client) {
      const storedToken = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('authUser');
      const storedExpiry = localStorage.getItem('authExpiry');

      if (storedToken && storedUser && storedExpiry) {
        const expiryTime = parseInt(storedExpiry, 10);
        if (Date.now() < expiryTime) {
          token.value = storedToken;
          user.value = storedUser;
        } else {
          logout();
        }
      }
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    checkAuth,
  };
});
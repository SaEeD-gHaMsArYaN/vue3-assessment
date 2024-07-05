import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<string | null>(null);
  const token = ref<string | null>(null);
  const router = useRouter();

  const isAuthenticated = computed(() => !!token.value);

  const login = (userData: { username: string; token: string }) => {
    user.value = userData.username;
    token.value = userData.token;
    if (process.client) {
      Cookies.set('authToken', userData.token, { expires: 1 / 48 });
      Cookies.set('authUser', userData.username, { expires: 1 / 48 });
    }
  };

  const logout = async () => {
    user.value = null;
    token.value = null;
    if (process.client) {
      Cookies.remove('authToken');
      Cookies.remove('authUser');
    }
  };

  const checkAuth = () => {
    if (process.client) {
      const storedToken = Cookies.get('authToken');
      const storedUser = Cookies.get('authUser');

      if (storedToken && storedUser) {
        token.value = storedToken;
        user.value = storedUser;
      } else {
        logout();
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

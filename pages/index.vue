<template>
  <Head>
      <Title>{{ title }}</Title>
  </Head>
  <div class="flex items-center justify-center h-[calc(100vh_-_107px)]">
    <Toast />
    <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h1 class="mb-6 text-2xl font-semibold text-center">Login</h1>
      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-700">Username</label>
          <InputText v-model="username" id="username" class="w-full" />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <Password v-model="password" id="password" class="w-full" />
        </div>
        <Button label="Login" type="submit" class="w-full" />
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import { useToast } from "primevue/usetoast";
import { useAuthStore } from "@/stores/authStore";

interface Errors {
  username?: string;
  password?: string;
}

const title = ref('Login Page');
const username = ref("");
const password = ref("");
const authStore = useAuthStore();
const router = useRouter();
const toast = useToast();

const validate = () => {
  let valid = true;
  if (!username.value.trim()) {
    toast.add({ severity: 'error', summary: 'Validation Error', detail: 'Username is required', life: 3000 });
    valid = false;
  }
  if (!password.value.trim()) {
    toast.add({ severity: 'error', summary: 'Validation Error', detail: 'Password is required', life: 3000 });
    valid = false;
  }
  return valid;
};

const onSubmit = () => {
  if (validate()) {
    if (username.value === "admin" && password.value === "1234") {
      const token = "dummy-token";
      authStore.login({ username: username.value, token });
      toast.add({ severity: 'success', summary: 'Login Successful', detail: 'Welcome to the application', life: 3000 });
      router.push("/home");
    } else {
      toast.add({ severity: 'error', summary: 'Login Failed', detail: 'Invalid username or password', life: 3000 });
    }
  }
};
</script>


<style>
  #password input[type="password"] {
    width: 100%;
  }
</style>

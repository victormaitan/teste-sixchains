<template>
  <div class="login-container">
    <v-card class="glass" rounded="xl" style="min-width: 300px">
      <v-col class="d-flex justify-center align-center flex-column">
        <v-img
          :width="100"
          aspect-ratio="1/1"
          cover
          style="filter: hue-rotate(85deg)"
          src="https://firebasestorage.googleapis.com/v0/b/teste-sistema-de-vendas.appspot.com/o/todo-icon-5.png?alt=media&token=5d2077a6-d5e0-4597-b414-dfb660100c30"
        ></v-img>
        <p class="text-h5 text-grey-darken-3 mt-2">SixChains ToDo App</p>
      </v-col>

      <v-card-text>
        <p class="text-h5 text-grey-darken-1 mt-2">Entrar</p>
        <v-form @submit.prevent="handleLogin()" ref="form">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>

          <v-btn type="submit" color="primary" block>Entrar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuth } from "~/composables/useAuth";
import { ref } from "vue";

const { login } = useAuth();
const router = useRouter();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const success = await login(email.value, password.value);
    if (success) {
      router.push("/"); // Redireciona após login bem sucedido
    } else {
      alert("Usuário e/ou senha incorretos");
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};
</script>

<style scoped>
.login-container {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

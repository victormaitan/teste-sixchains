<template>
  <div class="login-container">
    <v-card class="glass" rounded="xl" style="min-width: 300px">
      <v-col class="d-flex justify-center align-center flex-column">
        <v-img :width="100" aspect-ratio="1/1" cover alt="Logo do app SixChains ToDo App"
          style="filter: hue-rotate(85deg)"
          src="https://firebasestorage.googleapis.com/v0/b/teste-sistema-de-vendas.appspot.com/o/todo-icon-5.png?alt=media&token=5d2077a6-d5e0-4597-b414-dfb660100c30"
          lazy-src="https://firebasestorage.googleapis.com/v0/b/teste-sistema-de-vendas.appspot.com/o/todo-icon-5.png?alt=media&token=5d2077a6-d5e0-4597-b414-dfb660100c30"></v-img>
        <p class="text-h5 text-grey-darken-3 mt-2">SixChains ToDo App</p>
      </v-col>

      <v-card-text>
        <p class="text-h5 text-grey-darken-1 mt-2">Entrar</p>
        <v-form @submit.prevent="handleLogin()" ref="form">
          <v-text-field v-model="email" label="Email" type="email" required></v-text-field>

          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>

          <v-btn type="submit" color="primary" block>Entrar</v-btn>
          <v-dialog v-model="registerDialog" max-width="600">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn class="text-none font-weight-regular mt-2" text="Não tem uma conta? Registre-se"
                variant="plain" v-bind="activatorProps" @click="clearInputs()"></v-btn>
            </template>
            <v-card prepend-icon="mdi-account" title="Novo usuário" rounded="xl">
              <v-card-text>
                <v-row dense>
                  <v-col cols="12">
                    <v-text-field v-model="email" label="Email" required type="email"></v-text-field>
                    <v-text-field v-model="password" label="Password" required type="password"></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Cancelar" variant="plain" aria-label="Cancelar" @click="registerDialog = false"></v-btn>

                <v-btn :disabled="(email && password) === ''" color="success" text="Salvar" aria-label="Salvar"
                  variant="tonal" @click="handleRegister()"></v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuth } from "~/composables/useAuth";
import { ref } from "vue";

const { login, register } = useAuth();
const router = useRouter();

const email = ref("");
const password = ref("");
let registerDialog = ref(false);

const handleLogin = async () => {
  try {
    const success = await login(email.value, password.value);
    if (success) {
      router.push("/"); // Redireciona após login bem sucedido
    } else {
      alert("Usuário e/ou senha incorretos");
    }
  } catch (error) {
    console.log("Erro ao fazer login:", error);
  }
};

const handleRegister = async () => {
  await register(email.value, password.value).then(() => {
    alert("Cadastro realizado com sucesso!");
  }).catch(() => {
    alert("Erro ao realizar registro");
  });
  clearInputs()
  registerDialog = false
};

function clearInputs() {
  email.value = "";
  password.value = "";
}
</script>

<style scoped>
.login-container {
  background-image: url("../assets/background.webp");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

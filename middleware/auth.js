import { useNuxtApp } from "#app";
export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth } = useNuxtApp();
  const user = $auth.onAuthStateChanged((user) => {
    if (user) {
      // O usuário está logado e permite a navegação
      return;
    } else {
      // O usuário não está logado, redireciona para a página de login
      return navigateTo('/login');
    }
  });
});


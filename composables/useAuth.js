import { ref } from "vue";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNuxtApp } from "#app";

export const useAuth = () => {
  const { $auth } = useNuxtApp();
  const user = ref(null);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      );
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      user.value = userCredential.user; // Atualiza o usuário logado
      return true; // Login bem-sucedido
    } catch (error) {
      console.error("Erro no login:", error);
      return false; // Login falhou
    }
  };

  const logout = async () => {
    try {
      await signOut($auth); // Desloga o usuário
      localStorage.removeItem("user");
      user.value = null; // Limpa o usuário
    } catch (error) {
      console.error("Erro no logout:", error);
    }
  };

  return { user, login, logout };
};

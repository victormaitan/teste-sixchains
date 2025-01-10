import { useNuxtApp } from "#app";

export const loginWithEmail = async (email, password) => {
  const { $auth } = useNuxtApp();
  try {
    const userCredential = await $auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error(error.message);
    throw new Error('Erro ao fazer login');
  }
};

export const logout = async () => {
  try {
    await $auth.signOut();
    console.log('Usuário desconectado');
  } catch (error) {
    console.error(error.message);
    throw new Error('Erro ao fazer logout');
  }
};

export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await $auth.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error(error.message);
    throw new Error('Erro ao registrar usuário');
  }
};

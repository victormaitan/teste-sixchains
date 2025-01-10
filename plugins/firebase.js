import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(() => {
  
  const config = useRuntimeConfig();
  
  const firebaseConfig = {
    apiKey: "AIzaSyB_WwAb96xo_0ve2NkwvymyQU3K4ty-LF8",
    authDomain: "teste-sistema-de-vendas.firebaseapp.com",
    databaseURL: "https://teste-sistema-de-vendas-default-rtdb.firebaseio.com",
    projectId: "teste-sistema-de-vendas",
    storageBucket: "teste-sistema-de-vendas.appspot.com",
    messagingSenderId: "842276438092",
    appId: "1:842276438092:web:404e959285a3f4cc0474e9",
    measurementId: "G-V6Q3GSF6RK"
  };

  // Inicialize o Firebase
  const app = initializeApp(firebaseConfig);

  // Inicialize Firestore e Auth
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Adiciona as instâncias de db e auth ao Nuxt
  return {
    provide: {
      db,
      auth,
    },
  };
});

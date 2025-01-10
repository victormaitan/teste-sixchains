import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(() => {
  
  const config = useRuntimeConfig();
  
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
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

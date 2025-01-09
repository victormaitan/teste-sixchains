<template>
    <v-container>
      <v-form>
        <v-text-field
          label="Descrição"
          v-model="task.description"
          required
        ></v-text-field>
        <v-btn @click="saveTask">
          {{ task.id ? 'Atualizar' : 'Adicionar' }}
        </v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useNuxtApp } from '#app'
  // import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
  
  // const { $db } = useNuxtApp()
  const task = ref({ description: '', id: null, done: false })
  
  const saveTask = async () => {
    // if (task.value.id) {
    //     task.push
    //   await updateDoc(doc($db, 'tasks', task.value.id), {
    //     description: task.value.description,
    //   })
    // } else {
    //   await addDoc(collection($db, 'tasks'), {
    //     description: task.value.description,
    //   })
    // }
    // task.value = { description: '',  id: null, done: false }
  }
  </script>
  
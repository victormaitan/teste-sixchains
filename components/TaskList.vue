<template>
    <v-container>
        <v-card :ripple="false" class="mt-3 pa-2" rounded="xl" v-for="task in tasks" :key="task.id"
            @click="editTask(task)">
            <v-row class="d-flex justify-space-between align-center">
                <v-col cols="10">
                    <v-checkbox hide-details :label="task.description" />
                </v-col>
                <v-col cols="2">
                    <v-btn class="mr-2" icon variant="tonal" density="comfortable" @click.stop="deleteTask(task.id)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// import { useNuxtApp } from '#app'
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

const tasks = ref([
    {
        id: 'fewf23f21w143y9fj',
        description: 'Tarefa 1',
        done: false
    },
    {
        id: 'sdaf13f3254u6435y2q4',
        description: 'Não esquecer de levar a canela no veterinario hoje as 14h,Não esquecer de levar a canela no veterinario hoje as 14h',
        done: false
    },
    {
        id: '254n247547m45',
        description: 'Tarefa 3',
        done: false
    }
])
// const { $db } = useNuxtApp()

const fetchTasks = async () => {
    // const querySnapshot = await getDocs(collection($db, 'tasks'))
    // tasks.value = querySnapshot.docs.map(doc => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }))
}

const deleteTask = async (id) => {
    // await deleteDoc(doc($db, 'tasks', id))
    // fetchTasks()
}

const editTask = (task) => {
    // Emit task data for editing
}

onMounted(fetchTasks)
</script>
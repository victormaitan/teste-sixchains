<template>
    <v-container class="mb-14" style="overflow-y: auto; height: 78vh;">
        <v-card :ripple="false" color="primary" class="mt-3 pa-2" rounded="xl" v-for="task in tasks" :key="task.id"
            @click="editTask(task)">
            <v-row class="d-flex justify-space-between align-center">
                <v-col cols="10">
                    <v-checkbox hide-details :label="task.description" />
                </v-col>
                <v-col cols="2" class="d-flex justify-end">
                    <v-btn class="mr-2" icon variant="tonal" color="red" density="comfortable" @click.stop="deleteTask(task.id)">
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
        id: 'fewf23f21sw143y9fj',
        description: 'Tarefa 1',
        done: false
    },
    {
        id: 'sdaf13f3g254u6435y2q4',
        description: 'Não esquecer de levar a canela no veterinario hoje as 14h,Não esquecer de levar a canela no veterinario hoje as 14h',
        done: false
    },
    {
        id: 'fewf23f21wh143y9fj',
        description: 'Tarefa 2',
        done: false
    },
    {
        id: 'sdaf13f3g254u643a5y2q4',
        description: 'Não esquecer de levar a canela no veterinario hoje as 14h,Não esquecer de levar a canela no veterinario hoje as 14h',
        done: false
    },
    {
        id: 'fewf23f21wh1a43y9fj',
        description: 'Tarefa 2',
        done: false
    },
    {
        id: 'sdaf13sf3254u6435y2q4',
        description: 'Não esquecer de levar a canela no veterinario hoje as 14h,Não esquecer de levar a canela no veterinario hoje as 14h',
        done: false
    },
    {
        id: 'fewf23f21hw143y9fj',
        description: 'Tarefa 3',
        done: false
    },
    {
        id: 'sdaf13f3d254u6435y2q4',
        description: 'Não esquecer de levar a canela no veterinario hoje as 14h,Não esquecer de levar a canela no veterinario hoje as 14h',
        done: false
    },
    {
        id: '254n247547m45',
        description: 'Tarefa 4',
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
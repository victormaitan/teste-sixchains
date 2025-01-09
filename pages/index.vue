<template>
    <v-container class="full-height">
        <v-row cols="auto" class="d-flex justify-space-between align-center mx-2">
            <v-col>
                <h1>Hoje</h1>
                <h4 class="font-weight-regular text-grey-lighten-1">{{ new Date().toLocaleDateString('pt-BR', {
                    weekday:
                        'long', day: '2-digit', month: 'long', year: 'numeric'
                }) }}</h4>
            </v-col>
            <v-btn class="ma-2" icon="mdi-cog" size="small"></v-btn>
        </v-row>
        <v-tabs v-model="tab" color="primary" align-tabs="center">
            <v-tab prepend-icon="mdi-book-open-page-variant" text="A fazer" value="a-fazer"></v-tab>
            <v-tab prepend-icon="mdi-handshake" text="Concluídos" value="concluidos"></v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="a-fazer">
                <TaskList @taskEdit="editTask" />
            </v-tabs-window-item>
            <v-tabs-window-item value="concluidos">
                <TaskList @taskEdit="editTask" />
            </v-tabs-window-item>
        </v-tabs-window>
        <!-- <TaskList @taskEdit="editTask" /> -->
        <!-- <TaskForm @taskSaved="fetchTasks" /> -->
        </v-container>
        <v-fab color="primary" icon="mdi-playlist-edit" class="ms-4 mb-4" size="64" absolute layout></v-fab>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('a-fazer')

const fetchTasks = () => {
    // Refresh the list
}

const editTask = (task) => {
    // Pass task data to form
}
</script>
<style scoped>
.tabButton {
    color: white;
    background-color: rgb(var(--v-theme-primary));
}
</style>
<template>
    <div height="98vh" class="pa-2 d-flex justify-space-between">
        <div>
            <v-row cols="auto" class="d-flex justify-space-between align-center mx-2">
                <v-col>
                    <h1>Hoje</h1>
                    <h4 class="font-weight-regular text-grey-lighten-1">{{ new Date().toLocaleDateString('pt-BR', {
                        weekday:
                            'long', day: '2-digit', month: 'long', year: 'numeric'
                    }) }}</h4>
                </v-col>
                <v-btn class="ma-2" icon="mdi-cog" size="small" variant="tonal" tile rounded="lg"></v-btn>
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
        </div>
        <!-- <TaskList @taskEdit="editTask" /> -->
        <!-- <TaskForm @taskSaved="fetchTasks" /> -->
        <v-bottom-sheet>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" variant="elevated" rounded="lg" position="fixed" location="bottom" class="mb-4"
                    color="primary" size="large" prepend-icon="mdi-playlist-edit">Nova Tarefa</v-btn>
            </template>

            <v-card title="Nova Tarefa" rounded="t-xl" class="glass">
                <v-textarea class="mx-6" clearable variant="plain" placeholder="Escreva aqui..." auto-grow></v-textarea>
                <v-row class="ma-4 d-flex justify-end ga-2">
                    <v-btn flat color="grey-lighten-2">
                        Cancelar
                    </v-btn>
                    <v-btn color="success">
                        Salvar
                    </v-btn>
                </v-row>
            </v-card>
        </v-bottom-sheet>
    </div>
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

.glass {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
</style>
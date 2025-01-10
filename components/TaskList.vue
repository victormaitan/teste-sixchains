<template>
  <v-container class="mb-14" style="overflow-y: auto; height: 78vh">
    <div v-if="tasks.length">
      <v-card :ripple="false" :color="task.done ? 'grey-lighten-2' : 'accent'" class="mt-3 pa-2" rounded="xl"
        v-for="task in tasks" :key="task.id">
        <v-row class="d-flex justify-space-between align-center">
          <v-col cols="2">
            <v-checkbox aria-label="Marcar ou desmarcar como concluído" v-model="task.done"
              :color="task.done ? 'grey-lighten-1' : ''" hide-details @click="editTask(task, 'check')" />
          </v-col>
          <v-col cols="8" @click="editTask(task, 'update')" aria-label="Clique para editar" style="cursor: pointer">
            <p :class="`text-subtitle-1 ${task.done ? 'text-grey-lighten-1 text-decoration-line-through' : ''}`">{{
              task.description }}</p>
          </v-col>
          <v-col cols="2" class="d-flex justify-end">
            <v-dialog v-model="editDialog" max-width="600">
              <v-card prepend-icon="mdi-playlist-edit" title="Editar Tarefa" class="glass" rounded="xl">
                <v-card-text>
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field placeholder="Descrição" autofocus aria-label="Editar descrição" required
                        v-model="editedTask.description"></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text="Cancelar" variant="plain" aria-label="Cancelar" @click="editDialog = false"></v-btn>

                  <v-btn color="success" text="Salvar" aria-label="Salvar" variant="tonal" @click="
                    updateTask(editedTask.id, editedTask), (editDialog = false)
                    "></v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn class="mr-2" icon variant="tonal" aria-label="Excluir" :color="task.done ? 'grey-lighten-1' : 'red'"
              density="comfortable" @click.stop="deleteTask(task.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <v-row class="d-flex justify-center mt-6" v-else>
      <v-card :ripple="false" flat color="grey-lighten-2" class="mt-3 pa-2" rounded="lg">
      <p>Nenhuma tarefa criada</p>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from "vue";
import { useTasks } from "~/composables/useTasks";

const { tasks, fetchTasks, updateTask, deleteTask } = useTasks();
const editDialog = ref(false);
const editedTask = ref({});

function editTask(task, type) {
  editedTask.value = { ...task };
  if (type === "update") {
    editDialog.value = true;
  } else if (type === "check") {
    task.done = !task.done;
    updateTask(task.id, task);
  }
}

onMounted(() => {
  fetchTasks();
});
</script>

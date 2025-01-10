<template>
  <div height="98vh" class="pa-2 d-flex justify-center app-background">
    <div>
      <v-row cols="auto" class="d-flex justify-space-between align-center mx-2">
        <v-col>
          <h1>Hoje</h1>
          <h4 class="font-weight-regular text-grey-darken-1">
            {{
              new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
            }}
          </h4>
        </v-col>
        <v-btn
          class="ma-2"
          icon="mdi-logout"
          size="small"
          variant="tonal"
          tile
          rounded="lg"
          @click="handleLogout()"
        ></v-btn>
      </v-row>
      <TaskList @taskEdit="editTask" />
    </div>
    <v-bottom-sheet v-model="newTaskController">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          variant="elevated"
          rounded="lg"
          position="fixed"
          location="bottom"
          class="mb-4"
          color="secondary"
          size="large"
          prepend-icon="mdi-playlist-edit"
          >Nova Tarefa</v-btn
        >
      </template>

      <v-card title="Nova Tarefa" rounded="t-xl" class="glass">
        <v-textarea
          class="mx-6"
          clearable
          variant="plain"
          placeholder="Escreva aqui..."
          auto-grow
          v-model="newTask.description"
        ></v-textarea>
        <v-row class="ma-4 d-flex justify-end ga-2">
          <v-btn variant="text" @click="newTaskController = !newTaskController">
            Cancelar
          </v-btn>
          <v-btn variant="tonal" color="success" @click="saveTask()"> Salvar </v-btn>
        </v-row>
      </v-card>
    </v-bottom-sheet>
  </div>
</template>

<script setup>
import { useAuth } from "~/composables/useAuth";
import { useTasks } from "~/composables/useTasks";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";

definePageMeta({
  middleware: "auth", // Aplica o middleware de autenticação usando Composition API
});

const { createTask } = useTasks();
const { logout } = useAuth();
const router = useRouter();

const newTaskController = ref(false);
let newTask = reactive({
  id: "",
  description: "",
  done: false,
});

const saveTask = async () => {
  if (newTask) {
    await createTask(newTask);
    newTask = {
      id: "",
      description: "",
      done: false,
    };
    newTaskController.value = false;
  }
};

const handleLogout = async () => {
  await logout();
  router.push("/login");
};
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

.app-background {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

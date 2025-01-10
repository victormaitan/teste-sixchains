import { ref } from "vue";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  doc,
} from "firebase/firestore";
import { useNuxtApp } from "#app";

const tasks = ref([]);

export function useTasks() {
  const { $db } = useNuxtApp();
  const tasksCollection = collection($db, "tasks");

  const createTask = async (task) => {
    await addDoc(tasksCollection, task).then((docRef) => {
        const taskDoc = doc($db, "tasks", docRef.id);
        task.id = docRef.id;
        updateDoc(taskDoc, task);
    });
    await fetchTasks();
  };

  const fetchTasks = async () => {
    const q = query(tasksCollection, orderBy("done", "asc"));
    const querySnapshot = await getDocs(q)
    tasks.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  const updateTask = async (id, updatedTask) => {
    const taskDoc = doc($db, "tasks", id);
    await updateDoc(taskDoc, updatedTask);
    await fetchTasks();
  };

  const deleteTask = async (id) => {
    const taskDoc = doc($db, "tasks", id);
    await deleteDoc(taskDoc);
    await fetchTasks();
  };

  return {
    tasks,
    createTask,
    fetchTasks,
    updateTask,
    deleteTask,
  };
}

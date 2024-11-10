<template>
  <div class="container mt-5">
    <h1>Gestor de Tareas</h1>
    <NewTask @add="addTask" />
    <TaskFilter @filter-changed="updateFilter" />
    <TaskList
      :tasks="filteredTasks"
      @toggle="toggleTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import NewTask from "./components/NewTask.vue";
import TaskList from "./components/TaskList.vue";
import TaskFilter from "./components/TaskFilter.vue";

export default {
  name: "App",
  components: { NewTask, TaskList, TaskFilter },
  data() {
    return {
      tasks: [],
      filter: "all",
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === "completed") {
        return this.tasks.filter((task) => task.completed);
      } else if (this.filter === "incomplete") {
        return this.tasks.filter((task) => !task.completed);
      } else {
        return this.tasks;
      }
    },
  },
  methods: {
    addTask(task) {
      this.tasks.push({
        ...task, // Toma los datos de la tarea
        id: Date.now(), // Asegúrate de que cada tarea tenga un id único
      });
    },
    toggleTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    updateFilter(filter) {
      this.filter = filter;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id); // Elimina la tarea con el id especificado
    },
  },
};
</script>

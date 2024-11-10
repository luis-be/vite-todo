<template>
  <div class="mb-3">
    <button @click="fetchTasks" class="btn btn-info">
      Cargar Tareas de la API
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get("https://dummyjson.com/todos"); // API de DummyJSON
        this.$emit("setTasks", response.data.todos); // Envia las tareas al componente principal
      } catch (error) {
        console.error("Error al obtener tareas:", error);
      }
    },
  },
};
</script>

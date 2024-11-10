<template>
  <div class="mb-3">
    <input
      v-model="taskText"
      type="text"
      class="form-control"
      placeholder="Ingresa una nueva tarea"
    />
    <button @click="addTask" class="btn btn-primary mt-2">Agregar Tarea</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskText: "",
    };
  },
  methods: {
    addTask() {
      if (this.taskText.trim()) {
        this.$emit("add", { text: this.taskText, completed: false });
        this.taskText = ""; // Limpiar campo de entrada
      }
    },
  },
};
</script>

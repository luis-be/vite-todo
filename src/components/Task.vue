<template>
  <div
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span :class="{ 'text-decoration-line-through': task.completed }">{{
      task.text
    }}</span>
    <div>
      <button @click="toggle" class="btn btn-success btn-sm">
        {{ task.completed ? "Desmarcar" : "Marcar" }}
      </button>
      <button @click="deleteTask" class="btn btn-danger btn-sm ms-2">
        Eliminar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    toggle() {
      this.$emit("toggle", this.task.id);
    },
    deleteTask() {
      if (window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
        this.$emit("delete", this.task.id);
      }
    },
  },
};
</script>

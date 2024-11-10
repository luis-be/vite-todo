<template>
  <div class="list-group">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="toggleTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "TaskList",
  components: { Task },
  props: {
    tasks: Array,
  },
  methods: {
    toggleTask(id) {
      this.$emit("toggle", id);
    },
    deleteTask(id) {
      this.$emit("delete", id); // Emite el evento 'delete' hacia el componente padre
    },
  },
};
</script>

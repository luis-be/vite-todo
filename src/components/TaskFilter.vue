<template>
  <div class="mb-3">
    <label for="filter" class="form-label">Filtrar Tareas:</label>
    <select v-model="filter" class="form-select" id="filter">
      <option value="all">Todas</option>
      <option value="completed">Completadas</option>
      <option value="incomplete">Incompletas</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TaskFilter",
  data() {
    return {
      filter: "all",
    };
  },
  methods: {
    updateFilter() {
      this.$emit("filter-changed", this.filter);
    },
  },
  watch: {
    filter(newFilter) {
      this.updateFilter();
    },
  },
};
</script>

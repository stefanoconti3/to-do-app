<template>
  <div>
    <b-button variant="primary" @click="showCreateTaskModal">Create Task</b-button>
    <create-task-modal
      :modal-open.sync="showModal"
      :model="model"
    />
  </div>
</template>

<script>

import CreateTaskModal from "@/components/CreateTaskModal.vue";

export default {
  name: "Home",
  components: { CreateTaskModal },
  data() {
    return {
      model: {
        task: "",
        mark: false
      },
      showModal: false
    };
  },
  methods: {
    showCreateTaskModal() {
      this.showModal = true;
    }
  }
};
</script>

<template>
  <div>
    <b-button variant="primary" @click="showCreateTaskModal">Create Task</b-button>
    <create-task-modal
      :modal-open.sync="showModal"
      :model="model"
      @create="createTask"
    />
  </div>
</template>

<script>

import CreateTaskModal from "@/components/CreateTaskModal.vue";
import { v4 as uuidV4 } from 'uuid';
import store from "@/store";

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
    },
    async createTask() {
      await store.dispatch("task/createTask", {...this.model, id: uuidV4() });
    }
  }
};
</script>

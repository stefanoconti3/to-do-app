<template>
  <div>
    <b-button variant="primary" @click="showCreateTaskModal">Create Task</b-button>
    <task-list :rows="tasks" />
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
import TaskList from "@/components/TaskList.vue";

export default {
  name: "Home",
  components: {TaskList, CreateTaskModal },
  data() {
    return {
      model: {
        _id: "",
        name: "",
        mark: false
      },
      showModal: false,
      tasks: this.$store.state.task.tasks
    };
  },
  methods: {
    showCreateTaskModal() {
      this.showModal = true;
    },
    async createTask() {
      await store.dispatch(
        "task/createTask",
        {
          ...this.model,
          id: uuidV4(),
          createdAt: new Date()
        }
      );
      console.log(this.tasks)
    }
  }
};
</script>

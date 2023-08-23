<template>
  <div class="container mt-5">
    <h1 class="text-center font-weight-bold">To Do App</h1>
    <div class="d-flex justify-content-between mt-5 mb-3">
      <h2>Task List</h2>
      <b-button variant="danger" @click="showCreateTaskModal">Create Task</b-button>
    </div>
    <task-list :rows="tasks" @delete="deleteTask" @complete="completeTask" />
    <create-task-modal
      :modal-open.sync="showModal"
      :model="model"
      @create="createTask"
    />
  </div>
</template>

<script>
import CreateTaskModal from "@/components/Modal/CreateTaskModal.vue";
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
      this.showModal = false;
    },
    async deleteTask(id) {
      await store.dispatch("task/deleteTask", { id });
      this.tasks = this.$store.state.task.tasks;
    },
    async completeTask(id) {
      await store.dispatch("task/completeTask", { id });
      this.tasks = this.$store.state.task.tasks;
    }
  },
  watch: {
    showModal(v) {
      if (v) {
        this.model = {
          _id: "",
          name: "",
          mark: false
        }
      }
    }
  }
};
</script>

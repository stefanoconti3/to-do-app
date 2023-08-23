<template>
  <b-modal
    ref="modal-create-task"
    hide-footer
    hide-header
    size="lg"
    modal-class="modal-create-task"
    centered
    v-model="showModal"
  >
      <h6 class="text-left font-weight-bold">
        Create Task
      </h6>
      <b-form-input
        name="task"
        required
        class="p-3"
        v-model="model.task"
      />
      <b-button
        variant="primary"
        @click="createTask"
      >
        Create
      </b-button>
      <b-button
        variant="danger"
        @click="() => {this.showModal = false}"
      >
        Cancel
      </b-button>
  </b-modal>
</template>

<script>

export default {
  name: "CreateTaskModal",
  props: {
    modalOpen: {
      type: Boolean,
      default: false,
    },
    model: {
      default: () => ({})
    }
  },
  computed: {
    showModal: {
      get() {
        return this.modalOpen;
      },
      set(v) {
        this.$emit("update:modalOpen", v);
      },
    },
  },
  methods: {
    createTask() {
      this.$emit("create");
    }
  },
};
</script>

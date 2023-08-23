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
    <h3 class="text-left font-weight-bold pt-3">
      Create Task
    </h3>
    <div class="mb-3">
      <p class="font-size-20 mb-2">Task Name:</p>
      <b-form-input
        name="task"
        required
        class="p-3"
        v-model="model.name"
      />
      <b-form-invalid-feedback v-if="error" class="d-block">
        This field is required.
      </b-form-invalid-feedback>
    </div>
    <b-form-checkbox
      id="checkbox-1"
      class="font-size-18"
      v-model="model.mark"
      name="checkbox-1"
      :value="true"
      :unchecked-value="false"
    >
      I mark task as complete
    </b-form-checkbox>
    <div class="d-flex justify-content-around mt-5">
      <b-button variant="primary" size="lg" @click="createTask">
        Create
      </b-button>
      <b-button variant="danger" size="lg" @click="() => {this.showModal = false}">
        Cancel
      </b-button>
    </div>
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
  data() {
    return {
      error: false
    };
  },
  methods: {
    createTask() {
      if (!this.model.name) {
        this.error = true;
      } else {
        this.error = false;
        this.$emit("create");
      }
    }
  },
};
</script>

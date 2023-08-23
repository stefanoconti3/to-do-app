<template>
  <b-modal
    ref="modal-confirm"
    v-model="showModal"
    hide-footer
    hide-header
    centered
    modal-class="modal-confirm"
  >
    <div class="text-center">
      <p class="confirm-title color-red">
        {{ title }}
      </p>
      <button
        class="btn btn-blue"
        @click="onButtonClick"
      >
        {{ button }}
      </button>
      <button
        class="btn btn-red mr-3"
        @click="onCancelButtonClick"
      >
        Cancel
      </button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ConfirmModal",
  props: {
    modalOpen: {
      type: Boolean,
      default: false,
    },
    button: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
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
    onButtonClick() {
      this.$emit("continue");
    },
    onCancelButtonClick() {
      this.showModal = false;
    },
  },
};
</script>

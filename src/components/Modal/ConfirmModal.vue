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
      <div class="d-flex justify-content-around">
        <b-button
          variant="danger"
          size="lg"
          @click="onButtonClick"
        >
          {{ button }}
        </b-button>
        <b-button
          variant="primary"
          size="lg"
          @click="onCancelButtonClick"
        >
          Cancel
        </b-button>
      </div>
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

<template>
  <div>
    <vue-good-table
      mode="remote"
      :rows="rows"
      :columns="tableColumns"
      :sort-options="{ enabled: false }"
      :pagination-options="{
        enabled: true,
        mode: 'records'
      }"
      styleClass="custom-table"
    >
      <template slot="table-column" slot-scope="props">
      <span v-if="props.column.label">
        {{ props.column.label }}
      </span>
      </template>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field === 'createdAt'">
          {{ new Date(props.row.createdAt).toLocaleDateString() }}
        </span>
        <span v-else-if="props.column.field === 'mark'">
          <b-badge v-if="props.row.mark" pill variant="success" class="font-size-18">Completed</b-badge>
        </span>
        <div v-else-if="props.column.field === 'action'" class="d-flex align-items-center justify-content-center">
          <delete-icon class="color-red" @click="showDeleteTaskConfirmModal(props.row.id)"/>
          <b-dropdown
            v-if="!props.row.mark"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
            offset="0"
            class="icon-dropdown"
          >
            <template v-slot:button-content>
              <action-icon />
            </template>
            <b-dropdown-item @click="showCompleteTaskConfirmModal(props.row.id)">
              Complete Task
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
      <div slot="emptystate" class="empty-state">
        Currently, there is no data available for this list.
      </div>
    </vue-good-table>
    <confirm-modal
      :modal-open.sync="showModal"
      :title="title"
      :button="buttonTitle"
      @continue="handleTask"
    />
  </div>
</template>

<script>
import ConfirmModal from "@/components/Modal/ConfirmModal.vue";

export default {
  name: "TaskList",
  components: { ConfirmModal },
  props: {
    rows: {
      default: () => [],
    }
  },
  data() {
    return {
      columns: [
        {
          label: "Task",
          field: "name"
        },
        {
          label: "Mark",
          field: "mark"
        },
        {
          label: "Created At",
          field: "createdAt"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      mobileColumns: [
        {
          label: "Task",
          field: "name"
        },
        {
          label: "Mark",
          field: "mark"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      showModal: false,
      selectedId: "",
      title: "",
      buttonTitle: "",
      mode: "",
      isMobile: false
    };
  },
  computed: {
    tableColumns() {
      return this.isMobile
          ? [...this.mobileColumns]
          : [...this.columns];
    },
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 768;
    },
    showDeleteTaskConfirmModal(id) {
      this.title = "Are you sure you want to delete this task?";
      this.buttonTitle = "Delete Task"
      this.selectedId = id;
      this.mode = "delete";
      this.showModal = true;
    },
    showCompleteTaskConfirmModal(id) {
      this.title = "Are you sure you want to complete this task?";
      this.buttonTitle = "Complete Task"
      this.mode = "complete";
      this.selectedId = id;
      this.showModal = true;
    },
    handleTask() {
      if (this.mode === "delete") {
        this.$emit("delete", this.selectedId)
      } else {
        this.$emit("complete", this.selectedId)
      }
      this.showModal = false;
    }
  },
  watch: {
    showModal(v) {
      if (!v) {
        this.title = "";
        this.buttonTitle = ""
        this.mode = "";
        this.selectedId = "";
      }
    }
  }
};
</script>

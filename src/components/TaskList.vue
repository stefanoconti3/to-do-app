<template>
  <vue-good-table
    mode="remote"
    :rows="rows"
    :columns="columns"
    :sort-options="{ enabled: false }"
    :pagination-options="{ enable: true }"
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
        <b-badge v-if="props.row.mark" pill variant="success">Completed</b-badge>
      </span>
    </template>
    <div slot="emptystate" class="empty-state">
      Currently, there is no data available for this list.
    </div>
  </vue-good-table>
</template>

<script>

export default {
  name: "TaskList",
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
      ]
    };
  }
};
</script>

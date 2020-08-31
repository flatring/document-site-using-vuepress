<template lang="html">
  <div>
    <vue-good-table
      :columns="columns"
      :rows=getRows()
      :line-numbers="true"
      :sort-options="{ enabled: false }"
      styleClass="vgt-table condensed"
    />
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import Styles from './Styles'

export default {
  name: 'tableGrid',
  components: { VueGoodTable },
  props: {
    rows: {
      type: Array,
      default: () => [],
    }
  },
  data () {
    return {
      columns: [
        {
          label: 'Physical name',
          field: 'physical_name',
        },
        {
          label: 'Logical name',
          field: 'logical_name',
        },
        {
          label: 'Type',
          field: 'type',
        },
        {
          label: 'Digit',
          field: 'digit',
          type: 'number',
        },
        {
          label: 'Not Null',
          field: 'not_null',
        },
        {
          label: 'Default value',
          field: 'default_value',
          html: true,
        },
        {
          label: 'Description',
          field: 'description',
          html: true,
        },
      ],
    }
  },
  methods: {
    getRows: () => {
      // return this.rows
      return [
        { physical_name: "id", logical_name: "id", type: "int", not_null: "True", description: "Primary key. auto increment" },
        { physical_name: "password", logical_name: "パスワード", type: "string", digit: 30, not_null: "True", default_value: "<code>qwerty12345</code>", description: "crypt" },
        { physical_name: "name", logical_name: "名前", type: "string", digit: 100, not_null: "True", description: "full name" },
        { physical_name: "email", logical_name: "Eメール", type: "string", digit: 100, not_null: "True", description: "login id" },
        { physical_name: "gender", logical_name: "性別", type: "tinyint", not_null: "-", description: "<a href='#性別-gender'>性別</a>" },
      ]
    }
  }
}
</script>

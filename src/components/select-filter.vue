<template>
  <el-select @change="sendSort" v-model="sortBy" placeholder="Sort">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'name',
          label: 'Name'
        }, {
          value: 'price',
          label: 'Price'
        }, 
        ],
        sortBy: ''
      }
    },
    methods: {
        sendSort() {
            this.$emit('sorted', this.sortBy)
        }
    }
  }
</script>
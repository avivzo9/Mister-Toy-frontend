<template>
  <div class="toy-edit-container" v-if="toyToEdit">
      <h1>Toy edit</h1>
      <form @submit.prevent="saveToy">
        <input ref="toyName" type="text" v-model="toyToEdit.name" placeholder="Toy name">
        <input type="number" v-model="toyToEdit.price" placeholder="Toy price">
        <input type="text" v-model="toyToEdit.type" placeholder="Toy type">
        <button>Save</button>
      </form>
  </div>
</template>

<script>

import {toyService} from '../services/toy.service.js'

export default {
    name: 'edit-toy',
    data() {
        return {
            toyToEdit: null 
        }
    },
    methods:{
        saveToy() {
            const toy = this.toyToEdit
            this.$store.dispatch({type: 'saveToy', toy})
                .then(() => this.$router.push('/toy'))
        }
    },
    created() {
        const id = this.$route.params.toyId
        if (id) {
            toyService.getToyById(id)
                .then(toy => this.toyToEdit = toy)
        } else this.toyToEdit = toyService.getEmptyToy()
    },
}
</script>
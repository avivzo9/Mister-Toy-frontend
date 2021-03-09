<template>
  <section class="toy-details-container container" v-if="currToy">
      <div class="toy-details sub-container">
        <h1>{{currToy.name}}</h1>
        <h3>Toy type: {{currToy.type}}</h3>
        <p>Price: {{currToy.price}}</p>
        <p>{{stockDisplay}}</p>
        <router-link class="link" to="/toy">Back</router-link>
      </div>
  </section>
</template>

<script>

import {toyService} from '../services/toy.service.js'

export default {
    name: 'edit-details',
    data() {
        return {
            currToy: null 
        }
    },
    methods:{
    },
    created() {
        const id = this.$route.params.toyId
        toyService.getToyById(id)
            .then(toy => this.currToy = toy)
    },
    computed: {
        stockDisplay() {
            return (this.currToy.inStock) ? 'In stock!' : 'Not in stock'
        }
    },
}
</script>
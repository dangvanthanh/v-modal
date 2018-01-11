<template>
  <div class="app">
    <button @click="showModal">Open Modal</button>
    <modal :isShow.sync="isShow" @close="isShow = false"></modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'app',
  components: { Modal },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showModal () {
      this.isShow = true
    }
  }
}
</script>

<style>
</style>

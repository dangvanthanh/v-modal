<template>
  <div aria-hidden="true" v-show="isShow">
    <div tabindex="-1">
      <div role="dialog" aria-modal="true" aria-labelledby="">
        <header>
          <button aria-label="Close modal"></button>
        </header>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    isShow: {
      type: Boolean,
      required: true
    }
  },
  created () {
    let self = this
    window.addEventListener('keydown', self.hideModal)
  },
  methods: {
    hideModal (e) {
      if (e.keyCode == 27 && this.isShow) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style>
</style>

<template>
  <div class="modal" v-if="isShow">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">Header</slot>
        </div>
        <div class="modal-content">
          <slot name="content">Body</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">Footer</slot>
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
    window.addEventListener('keydown', (e) => {
      if (e.keyCode == 27 && this.isShow) {
        this.isShow = false
      }
    })
  }
}
</script>

<style>
.modal {
  background: rgba(0, 0, 0, .3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  background-color: #fff;
  width: 300px;
  padding: 15px;
  margin: 0 auto;
}
</style>

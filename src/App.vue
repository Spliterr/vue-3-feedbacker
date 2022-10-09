<template>
  <router-view />
  <modal-factory />
</template>

<script>
import ModalFactory from './components/ModalFactory/Index.vue'
export default {
  components: {
    ModalFactory
  }
}
</script>

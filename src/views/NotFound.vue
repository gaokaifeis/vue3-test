<template>
  <div>Not Found: {{ route.fullPath }}</div>
</template>

<script>
import { defineComponent, inject } from 'vue'
import { useRoute } from '../../routerCore/vue-router.esm.js'

export default defineComponent({
  name: 'NotFound',
  setup() {
    const route = useRoute()
    return { route }
  },
})
</script>

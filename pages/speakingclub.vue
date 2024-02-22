<template>
  <third-content />
</template>

<script>
const ThirdContent = () => import('~/components/ThirdContent')

export default {
  name: 'speakingclub',
  layout: 'default',
  components: { ThirdContent },
  mounted() {
    this.$store.commit('content/setContent', 3)
  }
}
</script>

<style scoped>

</style>

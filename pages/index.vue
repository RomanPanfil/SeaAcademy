<template>
    <first-content />
</template>

<script>
const FirstContent = () => import('~/components/FirstContent')

export default {
  components: { FirstContent },
  layout: 'default',
  scrollToTop: true,
  mounted() {
    this.$store.commit('content/setContent', 1)
  }
}
</script>

<style scoped lang="scss">

</style>

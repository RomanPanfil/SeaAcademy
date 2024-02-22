<template>
  <second-content />
</template>

<script>
const SecondContent = () => import('~/components/SecondContent')

export default {
  name: 'course',
  layout: 'default',
  components: { SecondContent },
  mounted() {
    this.$store.commit('content/setContent', 2)
  }
}
</script>

<style scoped>

</style>


<template>
  <div id="getCourseWi">
  </div>
</template>

<script>
export default {
  name: "getCourse",
  mounted() {
    const id =this.$route.query.id
    const frames = document.querySelectorAll('iframe')
    const body = document.getElementById('getCourseWi')

    body.appendChild(frames[id])
  },
  beforeDestroy() {
    window.location.reload()
  }
}
</script>

<style scoped>

</style>

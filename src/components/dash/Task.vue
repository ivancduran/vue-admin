<template>
  <div>
    <h1 class="text-center">Task</h1>
    <section class="content">

    </section>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  computed: {
    datetime: function () {
      return new Date()
    }
  },
  methods: {
    clearInput: function (vueModel) {
      vueModel = ''
    }
  },
  mounted: function () {
  }
}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>

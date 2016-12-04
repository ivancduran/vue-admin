<template>
  <div :class="['app', 'app--' + $route.name]">
    <h1>Vue App</h1>
    <nav>
      <ul>
        <li><a v-link="'/home'">Home</a></li>
        <li><a v-link="'/about'">About</a></li>
      </ul>
    </nav>
    <router-view transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello world!'
      }
    }
  }
</script>

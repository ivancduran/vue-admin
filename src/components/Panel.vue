<template>

  <div class="nav-md">
    <div class="container body">
      <div class="main_container">

          <menubar></menubar>

          <topnav></topnav>

          <router-view></router-view>

          <foobar></foobar>

      </div>
    </div>
  </div>

</template>

<script>
  import TopNav from './dash/TopNav.vue'
  import Menu from './dash/Menu.vue'
  import Footer from './dash/Footer.vue'

  export default {
    data () {
      return {
        title: 'Home'
      }
    },
    components: {
      'menubar': Menu,
      'topnav': TopNav,
      'Foobar': Footer
    }
  }
</script>
